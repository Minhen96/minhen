import { Github, Instagram, Mail, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-950' : 'bg-gradient-to-br from-blue-50 to-white'} pt-16 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left ${isDark ? 'text-white' : 'text-gray-700'}`} >
            Hi, I'm{" "}
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>
              MH
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 animate-slide-in-right ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-scale-in">
            I build innovative solutions across web and mobile platforms, specializing in creating robust applications that solve real-world problems.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a
              href="https://github.com/Minhen96"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all dark:hover:shadow-blue-500/20"
            >
              <Github className="text-gray-900 dark:text-white" size={24} />
            </a>
            <a
              href="https://www.instagram.com/minhen_96?igsh=ODNveW1yZnVka2Y%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all dark:hover:shadow-blue-500/20"
            >
              <Instagram className="text-pink-600 dark:text-pink-400" size={24} />
            </a>
            <a
              href="mailto:evanyap96@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all dark:hover:shadow-blue-500/20"
            >
              <Mail className="text-gray-900 dark:text-white" size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/40 animate-glow"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-400 dark:text-gray-600" />
        </button>
      </div>
    </section>
  );
}
