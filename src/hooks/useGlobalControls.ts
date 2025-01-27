import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface UseGlobalControlsOptions {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onAction?: () => void;       // e.g., Enter or Space
  onSecondary?: () => void;    // e.g., Q or E
  onEscape?: () => void;       // e.g., ESC
}

export function useGlobalControls({
  onUp,
  onDown,
  onLeft,
  onRight,
  onAction,
  onSecondary,
  onEscape
}: UseGlobalControlsOptions) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const key = e.key.toLowerCase();

      // Arrow keys
      if (key === 'arrowup') {
        onUp?.();
      } else if (key === 'arrowdown') {
        onDown?.();
      } else if (key === 'arrowleft') {
        onLeft?.();
      } else if (key === 'arrowright') {
        onRight?.();
      }

      // WASD
      else if (key === 'w') {
        onUp?.();
      } else if (key === 's') {
        onDown?.();
      } else if (key === 'a') {
        onLeft?.();
      } else if (key === 'd') {
        onRight?.();
      }

      // Q/E
      else if (key === 'q' || key === 'e') {
        onSecondary?.();
      }

      // Enter / Space
      else if (key === 'enter' || key === ' ') {
        onAction?.();
      }

      // Escape
      else if (key === 'escape') {
        onEscape?.();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onUp, onDown, onLeft, onRight, onAction, onSecondary, onEscape]);
}