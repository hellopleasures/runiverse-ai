import React, { useState, useEffect } from 'react';
import { useCharacter } from '../../../context/CharacterContext';
import CharacterCreation from '../CharacterCreation';
import GameInterface from '../GameInterface';
import styles from "../../../styles/pixelbutton.module.css";

interface Story {
  id: string;
  title?: string;
  description?: string;
}

interface Adventure {
  id: string;
  characterId: string;
  storyId: string;
}

interface GameState {
  storyText: string;
  options: { optionText: string; nextStep: string }[];
}

const RuniverseAdventure: React.FC = () => {
  const { selectedCharacter } = useCharacter();
  const [stories, setStories] = useState<Story[]>([]);
  const [selectedStory, setSelectedStory] = useState<string>('');
  const [adventure, setAdventure] = useState<Adventure | null>(null);
  const [gameState, setGameState] = useState<GameState>({ storyText: '', options: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch('/api/consciousnft/story');
      if (!response.ok) {
        throw new Error('Failed to fetch stories');
      }
      const data = await response.json();
      if (data && Array.isArray(data.stories)) {
        setStories(data.stories);
      } else {
        console.error('Received unexpected data structure for stories:', data);
        setStories([]);
      }
    } catch (err) {
      console.error('Error fetching stories:', err);
      setError('Failed to load stories');
      setStories([]);
    }
  };

  const handleStartAdventure = async () => {
    try {
      setLoading(true);
      const createResponse = await fetch("/api/consciousnft/create-adventure", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          characterId: selectedCharacter?.consciousId,
          storyId: selectedStory,
        })
      });
      if (!createResponse.ok) {
        throw new Error(`HTTP error! status: ${createResponse.status}`);
      }
      
      const adventureData = await createResponse.json();
      setAdventure(adventureData.data.adventure);

      const streamResponse = await fetch("/api/consciousnft/stream-adventure", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adventureId: adventureData.data.adventure.id,
        })
      });
      
      if (!streamResponse.ok) {
        throw new Error(`HTTP error! status: ${streamResponse.status}`);
      }

      const reader = streamResponse.body?.getReader();
      if (!reader) {
        throw new Error("No readable stream available");
      }

      setGameState({ storyText: '', options: [] });
      
      const decoder = new TextDecoder();
      let buffer = '';
      let doneReading = false;
      let accumulatedContent = '';

      while (!doneReading) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        const chunk = decoder.decode(value);
        buffer += chunk;

        let lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (let line of lines) {
          if (line.trim() === '') continue;
          try {
            const parsedChunk = JSON.parse(line);
            const deltaContent = parsedChunk.choices?.[0]?.delta?.content || '';
            accumulatedContent += deltaContent;
            if (parsedChunk.choices?.[0]?.finish_reason === 'stop') {
              doneReading = true;
              break;
            }
          } catch (e) {
            console.error("Error parsing line as JSON:", e);
            continue;
          }
        }
      }

      if (buffer.trim() !== '') {
        try {
          const parsedChunk = JSON.parse(buffer);
          const deltaContent = parsedChunk.choices?.[0]?.delta?.content || '';
          accumulatedContent += deltaContent;
        } catch (e) {
          console.error("Error parsing buffer as JSON after stream ended:", e);
        }
      }

      // parse JSON code block
      const jsonMatch = accumulatedContent.match(/```json\s*([\s\S]*?)\s*```/);

      if (jsonMatch && jsonMatch[1]) {
        try {
          const parsedData = JSON.parse(jsonMatch[1]);
          setGameState({
            storyText: parsedData.storytext || '',
            options: parsedData.options || [],
          });
        } catch (e) {
          console.error("Error parsing JSON content:", e);
          setError("Error parsing story data");
        }
      } else {
        console.error("JSON code block not found in the content");
        setError("Story data not found");
      }
    } catch (error) {
      console.error("Error starting adventure:", error);
      setError("Error starting adventure");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionClick = async (nextStep: string) => {
    try {
      setLoading(true);
      if (!adventure) {
        throw new Error("No active adventure");
      }
  
      const response = await fetch("/api/consciousnft/stream-adventure", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adventureId: adventure.id,
          characterMessage: nextStep,
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No readable stream available");
      }
  
      setGameState({ storyText: '', options: [] });
  
      const decoder = new TextDecoder();
      let buffer = '';
      let doneReading = false;
      let accumulatedContent = '';

      while (!doneReading) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        const chunk = decoder.decode(value);
        buffer += chunk;

        let lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (let line of lines) {
          if (line.trim() === '') continue;
          try {
            const parsedChunk = JSON.parse(line);
            const deltaContent = parsedChunk.choices?.[0]?.delta?.content || '';
            accumulatedContent += deltaContent;
            if (parsedChunk.choices?.[0]?.finish_reason === 'stop') {
              doneReading = true;
              break;
            }
          } catch (e) {
            console.error("Error parsing line as JSON:", e);
            continue;
          }
        }
      }

      if (buffer.trim() !== '') {
        try {
          const parsedChunk = JSON.parse(buffer);
          const deltaContent = parsedChunk.choices?.[0]?.delta?.content || '';
          accumulatedContent += deltaContent;
        } catch (e) {
          console.error("Error parsing buffer as JSON after stream ended:", e);
        }
      }

      const jsonMatch = accumulatedContent.match(/```json\s*([\s\S]*?)\s*```/);

      if (jsonMatch && jsonMatch[1]) {
        try {
          const parsedData = JSON.parse(jsonMatch[1]);
          setGameState({
            storyText: parsedData.storytext || '',
            options: parsedData.options || [],
          });
        } catch (e) {
          console.error("Error parsing story data:", e);
          setError("Error parsing story data");
        }
      } else {
        console.error("JSON code block not found in the content");
        setError("Story data not found");
      }
    } catch (error) {
      console.error("Error continuing adventure:", error);
      setError("Error continuing adventure");
    } finally {
      setLoading(false);
    }
  };

  const handleContinueAdventure = async () => {
    try {
      setLoading(true);
      if (!adventure) {
        throw new Error("No active adventure");
      }
  
      const response = await fetch('/api/consciousnft/continue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adventureId: adventure.id,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setSelectedStory(data.storyId);
      handleStartAdventure();
    } catch (error) {
      console.error("Error continuing adventure:", error);
      setError("Error continuing adventure");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-[#697c01] flex items-center justify-center">
      <div className="w-11/12 h-5/6 max-w-4xl border-2 border-[#333d02] bg-[#697c01] flex flex-col overflow-hidden">
        <h1 className="font-[MekMono] text-center text-[#333d02] mt-2 text-[22px] leading-none uppercase">
          Runiverse Adventure
        </h1>

        {!selectedCharacter && <CharacterCreation />}

        {selectedCharacter && !adventure && (
          <div className="flex flex-col items-center gap-1">
            <div className="text-center text-[#333d02] py-2">
              <h2 className="font-[MekMono] text-[14px] uppercase mb-1">Selected Character</h2>
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="mx-auto w-16 h-16 border-2 border-[#333d02] object-cover rounded-full mb-1"
              />
              <span className="font-[MekMono] text-[14px] uppercase">
                {selectedCharacter.name}
              </span>
            </div>

            <div className="w-full px-4">
              <h2 className="font-[MekMono] text-[14px] text-center uppercase text-[#333d02] mb-1">
                Select a Story
              </h2>
              <select
                value={selectedStory}
                onChange={(e) => setSelectedStory(e.target.value)}
                className="w-full p-2 border-2 border-[#333d02] text-[#333d02] font-ocra text-[10px] uppercase bg-transparent"
              >
                <option value="">Select a story</option>
                {Array.isArray(stories) && stories.length > 0 ? (
                  stories.map((story) => (
                    <option key={story.id} value={story.id}>{story.title || `Story ${story.id}`}</option>
                  ))
                ) : (
                  <option disabled>No stories available</option>
                )}
              </select>
            </div>

            <button
              onClick={handleStartAdventure}
              disabled={!selectedCharacter || !selectedStory || loading}
              className="border-2 border-[#333d02] text-[#333d02] font-[MekMono] uppercase text-[12px] px-2 py-1 mt-1 hover:bg-yellow-400/30"
            >
              {loading ? 'Starting...' : 'Start Adventure'}
            </button>
          </div>
        )}

        {error && (
          <div className="text-[#333d02] uppercase font-ocra text-[12px] p-2 text-center">
            {error}
          </div>
        )}

        {adventure && (
          <div className="flex-1 overflow-hidden">
            <GameInterface
              storyText={gameState.storyText}
              options={gameState.options}
              continueAvailable={true}
              onOptionClick={handleOptionClick}
              onContinue={handleContinueAdventure}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RuniverseAdventure;