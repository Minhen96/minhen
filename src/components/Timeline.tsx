import { Briefcase, GraduationCap, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants/portfolio';
import { useState } from 'react';

export default function Timeline() {
  const { isDark } = useTheme();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (uniqueId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(uniqueId)) {
        newSet.delete(uniqueId);
      } else {
        newSet.add(uniqueId);
      }
      return newSet;
    });
  };

  // Combine and sort timeline items by date (newest first)
  const timelineItems = [
    ...EXPERIENCE.map((exp, index) => ({
      ...exp,
      uniqueId: `exp-${index}`,
      title: exp.position,
      subtitle: exp.company,
      items: exp.description,
    })),
    ...EDUCATION.map((edu, index) => ({
      ...edu,
      uniqueId: `edu-${index}`,
      title: edu.degree,
      subtitle: edu.institution,
      items: edu.achievements || [],
    })),
  ].sort((a, b) => {
    // Sort by startDate (newest first)
    // null endDate (Present) should come first
    const dateA = a.endDate === null ? '9999-12' : a.startDate;
    const dateB = b.endDate === null ? '9999-12' : b.startDate;
    return dateB.localeCompare(dateA);
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      default:
        return Briefcase;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'portfolio-navy';
      case 'education':
        return 'portfolio-royal-blue';
      default:
        return 'portfolio-navy';
    }
  };

  return (
    <section
      id="timeline"
      className={`py-32 relative ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300 overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-portfolio-royal-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-navy/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-portfolio-navy to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-portfolio-navy via-portfolio-royal-blue to-portfolio-navy blur-sm" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-portfolio-navy/50" />
            <div className="mx-4 px-6 py-1 rounded-full border border-portfolio-navy/20 bg-gradient-to-r from-portfolio-navy/5 to-portfolio-royal-blue/5">
              <span className="text-xs font-medium tracking-widest uppercase text-portfolio-navy">
                Journey
              </span>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-portfolio-royal-blue/50" />
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold ${
              isDark ? 'text-white' : 'text-black'
            } mb-6 tracking-tight`}
          >
            My Timeline
          </h2>
          <p
            className={`text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}
          >
            From education to professional experience—here's my journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
              isDark ? 'bg-gradient-to-b from-portfolio-navy via-portfolio-royal-blue to-portfolio-navy' : 'bg-gradient-to-b from-portfolio-navy/30 via-portfolio-royal-blue/30 to-portfolio-navy/30'
            }`}
          />

          {/* Animated Sparkle traveling along timeline */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 transform -translate-x-1/2"
            animate={{
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="text-portfolio-royal-blue" size={16} />
            </motion.div>
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = getIcon(item.type);
              const iconColor = getIconColor(item.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.uniqueId}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    } pl-16 md:pl-0 text-left`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`p-6 rounded-2xl ${
                        isDark
                          ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10'
                          : 'bg-gradient-to-br from-black/5 to-black/[0.02] border-black/10'
                      } border-2 shadow-lg relative`}
                    >
                      {/* Company/Institution Logo - Desktop Only (Top Corner) */}
                      {item.logo && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`hidden md:block absolute ${isEven ? 'md:left-4' : 'md:right-4'} top-4 group/logo z-10`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            className="w-16 h-16 rounded-lg overflow-hidden transition-all"
                          >
                            <img
                              src={item.logo}
                              alt={`${item.subtitle} logo`}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>
                        </a>
                      )}

                      {/* Duration Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${
                          isDark
                            ? 'bg-portfolio-navy/20 border border-portfolio-navy/30'
                            : 'bg-portfolio-navy/10 border border-portfolio-navy/20'
                        }`}
                      >
                        <span className={`text-xs font-medium text-${iconColor}`}>
                          {item.duration}
                        </span>
                      </div>

                      {/* Title with Logo on Mobile */}
                      <div className="flex items-center gap-3 mb-2">
                        {/* Company/Institution Logo - Mobile Only (Inline with Title) */}
                        {item.logo && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:hidden group/logo flex-shrink-0"
                          >
                            <motion.div
                              whileHover={{ scale: 1.15, rotate: 5 }}
                              className="w-12 h-12 rounded-lg overflow-hidden transition-all"
                            >
                              <img
                                src={item.logo}
                                alt={`${item.subtitle} logo`}
                                className="w-full h-full object-contain"
                              />
                            </motion.div>
                          </a>
                        )}

                        <h3
                          className={`text-xl md:text-2xl font-bold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* Subtitle - Clickable */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-block"
                      >
                        <h4
                          className={`text-lg font-semibold ${
                            isDark ? 'text-portfolio-royal-blue' : 'text-portfolio-navy'
                          } mb-2 group-hover/link:underline transition-all`}
                        >
                          {item.subtitle}
                        </h4>
                      </a>

                      {/* Location */}
                      <div
                        className={`flex items-center gap-2 mb-4 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        } justify-start`}
                      >
                        <MapPin size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.location}
                        </span>
                      </div>

                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => toggleItem(item.uniqueId)}
                        className={`flex items-center justify-center p-2 rounded-full mb-3 transition-all ${
                          isDark
                            ? 'bg-white/5 hover:bg-white/10 text-gray-300'
                            : 'bg-black/5 hover:bg-black/10 text-gray-700'
                        } ${isEven ? 'md:ml-auto' : ''}`}
                        title={expandedItems.has(item.uniqueId) ? 'Hide Details' : 'Show Details'}
                      >
                        <motion.div
                          animate={{ rotate: expandedItems.has(item.uniqueId) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>

                      {/* Description/Achievements - Collapsible */}
                      <AnimatePresence>
                        {expandedItems.has(item.uniqueId) && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 overflow-hidden"
                          >
                            {item.items.map((desc: string, i: number) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`text-sm ${
                                  isDark ? 'text-gray-300' : 'text-gray-700'
                                } flex items-start gap-2 ${
                                  isEven ? 'md:flex-row-reverse md:text-right' : ''
                                }`}
                              >
                                <span className={`text-${iconColor} mt-1`}>•</span>
                                <span className="flex-1">{desc}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 top-0 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br from-${iconColor}/30 to-${iconColor}/10 border-4 ${
                        isDark ? 'border-black' : 'border-white'
                      } shadow-lg flex items-center justify-center`}
                    >
                      <Icon className={`text-${iconColor}`} size={24} />
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
