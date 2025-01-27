import React, { useState } from 'react';

interface Option {
  optionText: string;
  nextStep: string;
}

interface GameState {
  text: string;
  options: Option[];
}

export default function LocalGame() {
  const [gameState, setGameState] = useState<GameState>({
    text: "Welcome to the LocalGame from runiverse-trail!",
    options: [
      { optionText: "Go forward", nextStep: "forward" },
      { optionText: "Go backward", nextStep: "back" },
    ],
  });

  function handleOptionClick(next: string) {
    if (next === "forward") {
      setGameState({
        text: "You stepped forward bravely!",
        options: [
          { optionText: "Keep going", nextStep: "keep" },
          { optionText: "Retreat", nextStep: "back" },
        ],
      });
    } else {
      setGameState({
        text: "You retreated. Let's try again later.",
        options: [],
      });
    }
  }

  return (
    <div style={{ color: '#fff', textAlign: 'center' }}>
      <h2>Local Game</h2>
      <p>{gameState.text}</p>
      <div style={{ marginTop: '1rem' }}>
        {gameState.options.map((opt, idx) => (
          <button
            key={idx}
            style={{
              margin: '0.5rem',
              backgroundColor: '#444',
              color: '#fff',
              border: '1px solid #999',
              padding: '0.3rem 0.6rem',
              cursor: 'pointer'
            }}
            onClick={() => handleOptionClick(opt.nextStep)}
          >
            {opt.optionText}
          </button>
        ))}
      </div>
    </div>
  );
}