import { Code2, Palette, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-32 relative ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      {/* Luxurious Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-portfolio-navy to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-portfolio-navy via-portfolio-royal-blue to-portfolio-navy blur-sm" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-portfolio-navy/50" />
          <div className="mx-4 px-6 py-1 rounded-full border border-portfolio-navy/20 bg-gradient-to-r from-portfolio-navy/5 to-portfolio-royal-blue/5">
            <span className="text-xs font-medium tracking-widest uppercase text-portfolio-navy">About</span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-portfolio-royal-blue/50" />
        </div>

        <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-20 text-center animate-fade-in tracking-tight`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-in-left space-y-6">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'} leading-relaxed`}>
              I'm a passionate software engineer with expertise in building full-stack applications
              across multiple platforms. I specialize in creating innovative solutions that blend
              functionality with user-centric design. My experience spans web development, mobile
              applications, and AI-powered tools.
            </p>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'} leading-relaxed`}>
              I'm passionate about leveraging technology to solve real-world problems. Whether it's
              building HR systems, AI assistants, e-commerce platforms, or self-growth applications,
              I approach every project with creativity and technical excellence.
            </p>
          </div>

          <div className="grid gap-6 animate-slide-in-right">
            <div className={`group/about p-8 ${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/20' : 'bg-gradient-to-br from-black/5 to-black/[0.02] border-black/20'} border-2 rounded-2xl hover:${isDark ? 'border-portfolio-navy/50' : 'border-portfolio-navy/30'} transition-all relative overflow-hidden shadow-lg hover:shadow-portfolio-navy/10`}>
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-navy to-portfolio-navy/50 opacity-0 group-hover/about:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-navy/5 to-transparent opacity-0 group-hover/about:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start space-x-4 relative z-10">
                <div className="p-4 rounded-xl bg-gradient-to-br from-portfolio-navy/30 to-portfolio-navy/10 border border-portfolio-navy/30 group-hover/about:from-portfolio-navy/40 group-hover/about:to-portfolio-navy/20 transition-all shadow-lg shadow-portfolio-navy/20">
                  <Code2 className="text-portfolio-navy" size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 tracking-tight`}>Clean Code</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Writing maintainable, scalable code that follows best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className={`group/about p-8 ${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/20' : 'bg-gradient-to-br from-black/5 to-black/[0.02] border-black/20'} border-2 rounded-2xl hover:${isDark ? 'border-portfolio-royal-blue/50' : 'border-portfolio-royal-blue/30'} transition-all relative overflow-hidden shadow-lg hover:shadow-portfolio-royal-blue/10`}>
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-royal-blue to-portfolio-royal-blue/50 opacity-0 group-hover/about:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-royal-blue/5 to-transparent opacity-0 group-hover/about:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start space-x-4 relative z-10">
                <div className="p-4 rounded-xl bg-gradient-to-br from-portfolio-royal-blue/30 to-portfolio-royal-blue/10 border border-portfolio-royal-blue/30 group-hover/about:from-portfolio-royal-blue/40 group-hover/about:to-portfolio-royal-blue/20 transition-all shadow-lg shadow-portfolio-royal-blue/20">
                  <Palette className="text-portfolio-royal-blue" size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 tracking-tight`}>Design Focus</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Creating beautiful interfaces that users love to interact with.
                  </p>
                </div>
              </div>
            </div>

            <div className={`group/about p-8 ${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/20' : 'bg-gradient-to-br from-black/5 to-black/[0.02] border-black/20'} border-2 rounded-2xl hover:border-portfolio-navy/50 transition-all relative overflow-hidden shadow-lg hover:shadow-xl`}>
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-portfolio-navy via-portfolio-royal-blue to-portfolio-navy opacity-0 group-hover/about:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-navy/5 via-portfolio-royal-blue/5 to-transparent opacity-0 group-hover/about:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start space-x-4 relative z-10">
                <div className="p-4 rounded-xl bg-gradient-to-br from-portfolio-navy/20 via-portfolio-royal-blue/20 to-portfolio-navy/10 border border-portfolio-navy/30 group-hover/about:from-portfolio-navy/30 group-hover/about:to-portfolio-royal-blue/30 transition-all shadow-lg">
                  <Rocket className="text-portfolio-navy group-hover/about:text-portfolio-royal-blue transition-colors" size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 tracking-tight`}>Fast Delivery</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    Efficient development process with quick turnaround times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
