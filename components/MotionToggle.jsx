'use client';

import { useState, useEffect } from 'react';

export default function MotionToggle() {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPaused(true);
      document.body.classList.add('motion-paused');
    }

    const handleChange = (e) => {
      setIsPaused(e.matches);
      if (e.matches) {
        document.body.classList.add('motion-paused');
      } else {
        document.body.classList.remove('motion-paused');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleMotion = () => {
    const next = !isPaused;
    setIsPaused(next);
    if (next) {
      document.body.classList.add('motion-paused');
    } else {
      document.body.classList.remove('motion-paused');
    }
  };

  return (
    <button
      type="button"
      className={`motion-toggle ${isPaused ? 'is-paused' : ''}`}
      onClick={toggleMotion}
      aria-label={isPaused ? 'Resume page animations' : 'Pause page animations'}
      title={isPaused ? 'Resume animations' : 'Pause animations'}
    >
      <span className="motion-dot" />
      <span>{isPaused ? 'Motion: Off' : 'Motion: On'}</span>
    </button>
  );
}
