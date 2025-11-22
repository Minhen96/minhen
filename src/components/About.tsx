import { Code2, Palette, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const { isDark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices.",
      color: "navy"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces that users love to interact with.",
      color: "royal-blue"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient development process with quick turnaround times.",
      color: "indigo"
    }
  ];

  return (
    <section id="about" className={`py-32 relative ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300 overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-portfolio-navy/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-portfolio-royal-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Luxurious Top Border */}
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
              <span className="text-xs font-medium tracking-widest uppercase text-portfolio-navy">About</span>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-portfolio-royal-blue/50" />
          </div>

          <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-6 tracking-tight`}>
            About Me
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              I'm a passionate software engineer with expertise in building full-stack applications
              across multiple platforms. I enjoy creating innovative solutions that blend functionality
              with user-centric design.
            </p>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              Beyond building applications, I'm constantly exploring new technologies and improving my craft.
              I enjoy experimenting with AI, backend systems, and emerging tools—always looking for ways to
              build smarter, more efficient, and meaningful digital experiences.
            </p>

            {/* Quick Skills Tags */}
            {/* <div className="flex flex-wrap gap-2 pt-4">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Mobile Dev'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-portfolio-navy/20 text-portfolio-royal-blue border border-portfolio-navy/30' : 'bg-portfolio-navy/10 text-portfolio-navy border border-portfolio-navy/20'} cursor-default`}
                >
                  {skill}
                </motion.span>
              ))}
            </div> */}
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`group p-8 ${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/20' : 'bg-gradient-to-br from-black/5 to-black/[0.02] border-black/20'} border-2 rounded-2xl transition-all relative overflow-hidden shadow-lg cursor-pointer`}
                >
                  {/* Animated left border */}
                  <motion.div
                    className={
                      feature.color === 'navy'
                        ? 'absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-navy to-portfolio-navy/50'
                        : feature.color === 'royal-blue'
                        ? 'absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-royal-blue to-portfolio-royal-blue/50'
                        : 'absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-indigo to-portfolio-indigo/50'
                    }
                    initial={{ height: 0 }}
                    animate={{ height: hoveredCard === index ? '100%' : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Hover background */}
                  <motion.div
                    className={
                      feature.color === 'navy'
                        ? 'absolute inset-0 bg-gradient-to-br from-portfolio-navy/5 to-transparent'
                        : feature.color === 'royal-blue'
                        ? 'absolute inset-0 bg-gradient-to-br from-portfolio-royal-blue/5 to-transparent'
                        : 'absolute inset-0 bg-gradient-to-br from-portfolio-indigo/5 to-transparent'
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div
                      className={
                        feature.color === 'navy'
                          ? 'p-4 rounded-xl bg-gradient-to-br from-portfolio-navy/30 to-portfolio-navy/10 border border-portfolio-navy/30 shadow-lg'
                          : feature.color === 'royal-blue'
                          ? 'p-4 rounded-xl bg-gradient-to-br from-portfolio-royal-blue/30 to-portfolio-royal-blue/10 border border-portfolio-royal-blue/30 shadow-lg'
                          : 'p-4 rounded-xl bg-gradient-to-br from-portfolio-indigo/30 to-portfolio-indigo/10 border border-portfolio-indigo/30 shadow-lg'
                      }
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon
                        className={
                          feature.color === 'navy'
                            ? 'text-portfolio-navy'
                            : feature.color === 'royal-blue'
                            ? 'text-portfolio-royal-blue'
                            : 'text-portfolio-indigo'
                        }
                        size={24}
                      />
                    </motion.div>
                    <div>
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 tracking-tight`}>
                        {feature.title}
                      </h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
