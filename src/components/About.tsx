import { Code2, Palette, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center animate-fade-in`}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
              I'm a passionate software engineer with expertise in building full-stack applications
              across multiple platforms. I specialize in creating innovative solutions that blend
              functionality with user-centric design. My experience spans web development, mobile
              applications, and AI-powered tools.
            </p>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              I'm passionate about leveraging technology to solve real-world problems. Whether it's
              building HR systems, AI assistants, e-commerce platforms, or self-growth applications,
              I approach every project with creativity and technical excellence.
            </p>
          </div>

          <div className="grid gap-6 animate-slide-in-right">
            <div className={`p-6 ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-blue-50'} rounded-xl hover:shadow-lg transition-all hover:-translate-y-1`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${isDark ? 'bg-blue-600/20' : 'bg-blue-600'} rounded-lg`}>
                  <Code2 className={isDark ? 'text-blue-400' : 'text-white'} size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Clean Code</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Writing maintainable, scalable code that follows best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-green-50'} rounded-xl hover:shadow-lg transition-all hover:-translate-y-1`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${isDark ? 'bg-green-600/20' : 'bg-green-600'} rounded-lg`}>
                  <Palette className={isDark ? 'text-green-400' : 'text-white'} size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Design Focus</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    Creating beautiful interfaces that users love to interact with.
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-orange-50'} rounded-xl hover:shadow-lg transition-all hover:-translate-y-1`}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${isDark ? 'bg-orange-600/20' : 'bg-orange-600'} rounded-lg`}>
                  <Rocket className={isDark ? 'text-orange-400' : 'text-white'} size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Fast Delivery</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
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
