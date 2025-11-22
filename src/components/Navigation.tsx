import { Menu, X, Moon, Sun, RotateCcw, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SOCIAL_LINKS } from '../constants/portfolio';

interface NavigationProps {
  onRestartIntro?: () => void;
}

export default function Navigation({ onRestartIntro }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleDarkMode } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-portfolio-navy/20 transition-colors duration-300 shadow-sm dark:shadow-portfolio-navy/5">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - Image based on theme */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center group"
          >
            <img
              src={isDark ? "/light_logo/MH_Logo_transparent_light.png" : "/dark_logo/MH_Logo_transparent.png"}
              alt="MH Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="ml-5 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Portfolio
            </span>
          </button>

          {/* Desktop Menu - Social Links on Right */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:border-portfolio-navy dark:hover:border-portfolio-navy transition-all hover:scale-105 group"
                title="GitHub"
              >
                <Github size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-portfolio-navy dark:group-hover:text-portfolio-royal-blue transition-colors" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:border-portfolio-royal-blue dark:hover:border-portfolio-royal-blue transition-all hover:scale-105 group"
                title="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-portfolio-royal-blue dark:group-hover:text-portfolio-royal-blue transition-colors" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:border-portfolio-coral dark:hover:border-portfolio-coral transition-all hover:scale-105 group"
                title="Instagram"
              >
                <Instagram size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-portfolio-coral dark:group-hover:text-portfolio-coral transition-colors" />
              </a>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-portfolio-silver/30 to-transparent" />

            {/* Theme & Restart Buttons */}
            <div className="flex items-center space-x-2">
              {onRestartIntro && (
                <button
                  onClick={onRestartIntro}
                  className="p-2.5 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:border-portfolio-indigo dark:hover:border-portfolio-indigo transition-all hover:scale-105 group"
                  title="Restart Intro"
                >
                  <RotateCcw size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-portfolio-indigo dark:group-hover:text-portfolio-indigo transition-colors" />
                </button>
              )}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10 hover:border-portfolio-navy dark:hover:border-portfolio-navy transition-all hover:scale-105 group"
                title={isDark ? "Light Mode" : "Dark Mode"}
              >
                {isDark ? <Sun size={18} className="text-gray-300 group-hover:text-portfolio-platinum transition-colors" /> : <Moon size={18} className="text-gray-700 group-hover:text-portfolio-navy transition-colors" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="p-2 text-gray-600 dark:text-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 border-t border-gray-200/50 dark:border-portfolio-navy/20 pt-6">
            <div className="flex justify-center gap-4 mb-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10"
              >
                <Github size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10"
              >
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/5 dark:to-white/10 border border-gray-200 dark:border-white/10"
              >
                <Instagram size={20} className="text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            {onRestartIntro && (
              <button
                onClick={() => {
                  onRestartIntro();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center space-x-2 w-full text-gray-400 hover:text-portfolio-coral transition-colors py-2 text-sm"
              >
                <RotateCcw size={16} />
                <span>Restart Intro</span>
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
