import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useGlobalControls } from '../hooks/useGlobalControls';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Coordinates {
  x: number;
  y: number;
}

interface LocationData {
  id: string;
  biome: string;
  description: string;
  actions: string[];
}

interface LocationMap {
  [key: string]: LocationData;
}

interface RuniverseMapProps {
  width?: number;
  height?: number;
  gridSize?: number;
  onClose?: () => void;
}

export default function RuniverseMap({
  width = 50,
  height = 40,
  gridSize = 32,
  onClose,
}: RuniverseMapProps) {
  const [mapData, setMapData] = useState<LocationMap>({});
  const [playerPos, setPlayerPos] = useState<Coordinates>({ x: 16, y: 12 });
  const [currentTileData, setCurrentTileData] = useState<LocationData | null>(null);

  useEffect(() => {
    async function fetchMap() {
      try {
        const { data, error } = await supabase.from('map_tiles').select('*');
        if (error) throw error;

        if (data) {
          const formatted: LocationMap = {};
          data.forEach((tile: any) => {
            const key = `${tile.x}-${tile.y}`;
            formatted[key] = {
              id: tile.id,
              biome: tile.biome || 'None',
              description: tile.description || '',
              actions: tile.actions || [],
            };
          });
          setMapData(formatted);
        }
      } catch (err) {
        console.error('Error fetching map data:', err);
      }
    }
    fetchMap();
  }, []);

  function move(dx: number, dy: number) {
    setPlayerPos((prev) => {
      const newX = Math.max(0, Math.min(width - 1, prev.x + dx));
      const newY = Math.max(0, Math.min(height - 1, prev.y + dy));
      return { x: newX, y: newY };
    });
  }

  useEffect(() => {
    const key = `${playerPos.x}-${playerPos.y}`;
    setCurrentTileData(mapData[key] || null);
  }, [playerPos, mapData]);

  useGlobalControls({
    onUp: () => move(0, -1),
    onDown: () => move(0, 1),
    onLeft: () => move(-1, 0),
    onRight: () => move(1, 0),
    onEscape: () => {
      if (onClose) onClose();
    },
  });

  return (
    <div
      style={{
        position: 'relative',
        width: `${width * gridSize}px`,
        height: `${height * gridSize}px`,
        overflow: 'hidden',
        backgroundColor: '#333',
      }}
    >
      <img
        src="/img/runiversemap.png"
        alt="Runiverse Map"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: `${playerPos.y * gridSize}px`,
          left: `${playerPos.x * gridSize}px`,
          width: `${gridSize}px`,
          height: `${gridSize}px`,
          backgroundColor: 'red',
          zIndex: 1,
        }}
      ></div>

      {/* Tile info in top-right corner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '150px',
          backgroundColor: 'rgba(0,0,0,0.7)',
          color: '#fff',
          padding: '0.5rem',
          zIndex: 2,
        }}
      >
        <h3>Current Tile</h3>
        <p>
          <strong>Coords:</strong> ({playerPos.x}, {playerPos.y})
        </p>
        {currentTileData ? (
          <>
            <p>
              <strong>Biome:</strong> {currentTileData.biome}
            </p>
            <p>{currentTileData.description}</p>
          </>
        ) : (
          <p>Unexplored tile</p>
        )}
      </div>
    </div>
  );
}