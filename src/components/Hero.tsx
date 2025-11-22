import { Github, Instagram, Mail, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { isDark } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-colors duration-300"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)'
          : 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
      }}
    >
      {/* Animated geometric accents - bold & dynamic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-12 w-40 h-40 border-l-2 border-t-2 border-portfolio-navy/30"
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-12 w-40 h-40 border-r-2 border-b-2 border-portfolio-royal-blue/30"
          initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-navy/10 to-portfolio-royal-blue/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="space-y-8">
          {/* Cool Logo - floating & glowing */}
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-portfolio-navy/30 to-portfolio-royal-blue/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative text-6xl font-bold">
                <motion.span
                  className="text-portfolio-navy"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  &lt;
                </motion.span>
                <motion.span
                  className={isDark ? 'text-white' : 'text-black'}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  /
                </motion.span>
                <motion.span
                  className="text-portfolio-royal-blue"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  &gt;
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Name - with reveal animation */}
          <motion.h1
            className={`text-6xl md:text-8xl font-bold leading-none tracking-tight mb-4 ${isDark ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            Min Hen
          </motion.h1>

          <motion.p
            className={`text-2xl md:text-3xl font-light tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Full Stack Developer & Software Engineer
          </motion.p>

          {/* Accent divider - animated */}
          <motion.div
            className="flex items-center justify-center gap-4 py-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div
              className="h-[2px] w-20 md:w-28 bg-gradient-to-r from-transparent via-portfolio-navy/50 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "7rem" }}
              transition={{ delay: 1.3, duration: 0.6 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-portfolio-royal-blue shadow-lg shadow-portfolio-royal-blue/50"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 10px rgba(37, 99, 235, 0.5)",
                  "0 0 20px rgba(37, 99, 235, 0.8)",
                  "0 0 10px rgba(37, 99, 235, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="h-[2px] w-20 md:w-28 bg-gradient-to-r from-transparent via-portfolio-royal-blue/50 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "7rem" }}
              transition={{ delay: 1.3, duration: 0.6 }}
            />
          </motion.div>

          <p className={`text-base md:text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            I build innovative solutions across web and mobile platforms, specializing in creating robust applications that solve real-world problems.
          </p>

          {/* Social Links - Minimalist Style */}
          <div className="flex justify-center gap-4 pt-6">
            <a
              href="https://github.com/Minhen96"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-lg transition-all hover:scale-105 ${isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-black/5 hover:bg-black/10 border border-black/10'}`}
            >
              <Github className={`${isDark ? 'text-white/70 group-hover:text-white' : 'text-black/70 group-hover:text-black'} transition-colors`} size={22} />
            </a>
            <a
              href="https://www.instagram.com/minhen_96?igsh=ODNveW1yZnVka2Y%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 rounded-lg transition-all hover:scale-105 ${isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-black/5 hover:bg-black/10 border border-black/10'}`}
            >
              <Instagram className={`${isDark ? 'text-white/70 group-hover:text-white' : 'text-black/70 group-hover:text-black'} transition-colors`} size={22} />
            </a>
            <a
              href="mailto:evanyap96@gmail.com"
              className={`group p-4 rounded-lg transition-all hover:scale-105 ${isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-black/5 hover:bg-black/10 border border-black/10'}`}
            >
              <Mail className={`${isDark ? 'text-white/70 group-hover:text-white' : 'text-black/70 group-hover:text-black'} transition-colors`} size={22} />
            </a>
          </div>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className={`mt-8 px-8 py-3 rounded-full font-medium relative overflow-hidden group ${isDark ? 'text-white' : 'text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-portfolio-navy to-portfolio-royal-blue"
              initial={{ opacity: 1 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-portfolio-royal-blue to-portfolio-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="relative z-10">Get In Touch</span>
            <motion.div
              className="absolute inset-0 -z-0"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(30, 64, 175, 0.3)",
                  "0 0 40px rgba(37, 99, 235, 0.5)",
                  "0 0 20px rgba(30, 64, 175, 0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className={isDark ? 'text-gray-700' : 'text-gray-400'} />
        </button>
      </div>
    </section>
  );
}
