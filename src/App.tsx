import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import IntroScreen from './components/IntroScreen';
import { ThemeProvider } from './context/ThemeContext';
import { useIntroComplete } from './hooks/useIntroComplete';
import { INTRO_CONFIG } from './constants/portfolio';

function PortfolioContent({ onRestartIntro }: { onRestartIntro: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <Navigation onRestartIntro={onRestartIntro} />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

function App() {
  const { introCompleted, markIntroComplete, resetIntro } = useIntroComplete();
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [introKey, setIntroKey] = useState(0);

  useEffect(() => {
    // If intro was previously completed and skip is enabled, show portfolio directly
    if (introCompleted && INTRO_CONFIG.enableSkip) {
      setShowPortfolio(true);
    }
  }, [introCompleted]);

  const handleIntroComplete = () => {
    markIntroComplete();
    setShowPortfolio(true);
  };

  const handleRestartIntro = () => {
    // Reset the intro completed state
    resetIntro();

    setShowPortfolio(false);

    // Force remount of IntroScreen by changing key
    setIntroKey(prev => {
      return prev + 1;
    }); 
    
    setTimeout(() => {
    }, 100);
  };

  console.log('App render - showPortfolio:', showPortfolio, 'introKey:', introKey, 'introCompleted:', introCompleted);

  return (
    <ThemeProvider>
      {!showPortfolio 
      ? (
        <IntroScreen key={introKey} onComplete={handleIntroComplete} />
      ) 
      : (
        <PortfolioContent onRestartIntro={handleRestartIntro} />
      )}
    </ThemeProvider>
  );
}

export default App;
