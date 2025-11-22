import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants/portfolio';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showAccents, setShowAccents] = useState(false);
  const [showAccentLines, setShowAccentLines] = useState(false);
  const [showClickHint, setShowClickHint] = useState(false);

  useEffect(() => {
    console.log('🎬 IntroScreen mounted/remounted - BLACK BACKGROUND');
    // Reset all states when component mounts
    setFadeOut(false);
    setShowLogo(false);
    setShowName(false);
    setShowRole(false);
    setShowAccents(false);
    setShowAccentLines(false);
    setShowClickHint(false);

    // Staggered animation sequence - NO AUTO-SKIP
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
      setShowAccentLines(true); // Show accent lines with logo
    }, 800);
    const nameTimer = setTimeout(() => setShowName(true), 1200);
    const roleTimer = setTimeout(() => setShowRole(true), 1200);
    const accentsTimer = setTimeout(() => setShowAccents(true), 2500);
    const clickHintTimer = setTimeout(() => setShowClickHint(true), 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
      clearTimeout(accentsTimer);
      clearTimeout(clickHintTimer);
    };
  }, []);

  const handleContinue = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  useEffect(() => {
    let cleanupFn: (() => void) | null = null;

    // Wait 500ms before enabling click handlers to prevent auto-trigger
    const enableDelay = setTimeout(() => {
      // Click anywhere to skip
      const handleClick = () => {
        if (!fadeOut) {
          console.log('👆 User clicked - continuing to portfolio');
          handleContinue();
        }
      };

      window.addEventListener('click', handleClick);
      window.addEventListener('keydown', handleClick);

      // Store cleanup function
      cleanupFn = () => {
        window.removeEventListener('click', handleClick);
        window.removeEventListener('keydown', handleClick);
      };
    }, 500);

    return () => {
      clearTimeout(enableDelay);
      if (cleanupFn) cleanupFn();
    };
  }, [fadeOut]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}
    >
      {/* Minimalist corner accents */}
      {showAccents && (
        <>
          <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-portfolio-navy/50 animate-fade-in" />
          <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-portfolio-royal-blue/50 animate-fade-in" />
          <div className="absolute top-8 right-8 w-16 h-16 border border-portfolio-navy/45 rotate-45 animate-fade-in" />
          <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full border border-portfolio-royal-blue/45 animate-fade-in" />
        </>
      )}

      {/* Subtle particles */}
      {showAccents && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-portfolio-royal-blue/30 animate-ping"
              style={{
                top: `${20 + i * 10}%`,
                left: `${15 + i * 12}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: '4s',
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-6xl w-full px-6 relative z-10">
        <div className="space-y-8 text-center">
          {/* Cool Logo Animation - Appears First */}
          <div
            className={`transition-all duration-1000 ${
              showLogo
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-50 rotate-180'
            }`}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
              {/* Animated Brackets Logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-navy to-portfolio-royal-blue rounded-full blur-xl opacity-50 animate-pulse-slow" />
                <div className="relative text-6xl font-bold">
                  <span className="text-portfolio-navy">&lt;</span>
                  <span className="text-white">/</span>
                  <span className="text-portfolio-royal-blue">&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Name - Large Gradient Hero */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              showName
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 25%, #3B82F6 50%, #60A5FA 75%, #93C5FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 80px rgba(37, 99, 235, 0.5)',
              }}
            >
              {PERSONAL_INFO.name}
            </h1>
          </div>

          {/* Role/Title - Clean White */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              showRole
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 tracking-wide">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Accent Lines */}
          {showAccentLines && (
            <div className="flex items-center justify-center gap-4 pt-4 animate-fade-in">
              <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-portfolio-navy to-transparent" />
              <div className="w-2 h-2 rounded-full bg-portfolio-royal-blue" />
              <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent via-portfolio-royal-blue to-transparent" />
            </div>
          )}

          {/* Skip hint */}
          {showClickHint && (
            <div className="pt-8 animate-fade-in">
              <p className="text-xs md:text-sm text-gray-500 font-mono">
                Click anywhere to continue...
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
