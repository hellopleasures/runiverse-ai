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
  width?: number;    // total map width in tiles
  height?: number;   // total map height in tiles
  gridSize?: number; // tile size in px
  onClose?: () => void;
}

/**
 * We now have a 16×16-tile viewport, each tile is 25px => total 400x400 px.
 * This should align nicely with a Phaser-like 400×400 scene.
 */
export default function RuniverseMap({
  width = 50,
  height = 40,
  gridSize = 25,
  onClose,
}: RuniverseMapProps) {
  // Viewport is 16 tiles wide/tall
  const viewportWidth = 16;
  const viewportHeight = 16;

  const [mapData, setMapData] = useState<LocationMap>({});
  // Start player near middle
  const [playerPos, setPlayerPos] = useState<Coordinates>({ x: 8, y: 8 });
  // Camera offset (top-left tile of viewport)
  const [cameraOffset, setCameraOffset] = useState<Coordinates>({ x: 0, y: 0 });
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

  function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }

  function move(dx: number, dy: number) {
    setPlayerPos(prev => {
      const newX = clamp(prev.x + dx, 0, width - 1);
      const newY = clamp(prev.y + dy, 0, height - 1);
      return { x: newX, y: newY };
    });

    setCameraOffset(prev => {
      const nextOffset = { ...prev };
      // The player's position relative to camera
      const relX = playerPos.x - cameraOffset.x;
      const relY = playerPos.y - cameraOffset.y;

      // If within 3..(viewport-4) horizontally, shift camera
      if (dx !== 0) {
        if (relX >= 3 && relX <= viewportWidth - 4) {
          nextOffset.x = clamp(prev.x + dx, 0, width - viewportWidth);
        }
      }
      // If within 3..(viewport-4) vertically, shift camera
      if (dy !== 0) {
        if (relY >= 3 && relY <= viewportHeight - 4) {
          nextOffset.y = clamp(prev.y + dy, 0, height - viewportHeight);
        }
      }

      return nextOffset;
    });
  }

  // Update tile info
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

  // The player's position on-screen in px
  const playerRenderX = (playerPos.x - cameraOffset.x) * gridSize;
  const playerRenderY = (playerPos.y - cameraOffset.y) * gridSize;

  // The background offset for panning
  const backgroundOffsetX = -cameraOffset.x * gridSize;
  const backgroundOffsetY = -cameraOffset.y * gridSize;

  return (
    <div
      style={{
        position: 'relative',
        width: `${viewportWidth * gridSize}px`,  // 16 * 25 = 400
        height: `${viewportHeight * gridSize}px`, // 16 * 25 = 400
        overflow: 'hidden',
        backgroundColor: '#333',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: backgroundOffsetY,
          left: backgroundOffsetX,
          width: `${width * gridSize}px`,
          height: `${height * gridSize}px`,
          backgroundImage: 'url("/img/runiversemap.png")',
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      />

      {/* Player */}
      <div
        style={{
          position: 'absolute',
          top: playerRenderY,
          left: playerRenderX,
          width: `${gridSize}px`,
          height: `${gridSize}px`,
          backgroundColor: 'red',
          zIndex: 1,
        }}
      />

      {/* Tile info overlay */}
      <div
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          width: '180px',
          maxHeight: '50%',
          backgroundColor: '#000',
          color: '#fff',
          padding: '0.5rem',
          zIndex: 9999,
          fontSize: '0.75rem',
          overflowY: 'auto',
          border: '1px solid #444',
          borderRadius: '4px',
        }}
      >
        <h3 style={{ margin: '0 0 0.4rem 0' }}>Current Tile</h3>
        <p style={{ margin: 0 }}>
          <strong>Coords:</strong> ({playerPos.x}, {playerPos.y})
        </p>
        {currentTileData ? (
          <>
            <p style={{ margin: '0.4rem 0 0 0' }}>
              <strong>Biome:</strong> {currentTileData.biome}
            </p>
            <p style={{ margin: 0 }}>{currentTileData.description}</p>
          </>
        ) : (
          <p style={{ margin: 0 }}>Unexplored tile</p>
        )}
      </div>
    </div>
  );
}