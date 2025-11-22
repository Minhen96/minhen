import { useState, useEffect } from 'react';

const INTRO_COMPLETE_KEY = 'portfolio_intro_completed';

/**
 * Custom hook to manage intro screen completion state
 * Stores the state in localStorage to skip intro on subsequent visits
 */
export function useIntroComplete() {
  const [introCompleted, setIntroCompleted] = useState<boolean>(() => {
    // Check localStorage on initial load
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(INTRO_COMPLETE_KEY);
      return stored === 'true';
    }
    return false;
  });

  const markIntroComplete = () => {
    setIntroCompleted(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem(INTRO_COMPLETE_KEY, 'true');
    }
  };

  const resetIntro = () => {
    setIntroCompleted(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(INTRO_COMPLETE_KEY);
    }
  };

  return {
    introCompleted,
    markIntroComplete,
    resetIntro,
  };
}
