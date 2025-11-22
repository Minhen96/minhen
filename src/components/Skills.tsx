import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['⚛️ React', '▲ Next.js', '📘 TypeScript', '🎨 Tailwind CSS']
    },
    {
      title: 'Mobile Development',
      skills: ['📱 Flutter (Dart)', '🤖 Kotlin']
    },
    {
      title: 'Backend Languages & Frameworks',
      skills: ['☕ Spring Boot (Java)', '🔷 .NET (C#)']
    },
    {
      title: 'Database',
      skills: ['🐘 Postgres', '🗄️ SQL Server', '⚡ Supabase', '🔥 Firebase']
    },
    {
      title: 'Tools & Others',
      skills: ['🔧 Git', '📮 Postman', '🐳 Docker', '☁️ AWS', '🌐 Cloudflare', '▲ Vercel', '🌍 Ngrok']
    }
  ];

  return (
    <section id="skills" className={`py-32 relative ${isDark ? 'bg-neutral-950' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Luxurious Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-portfolio-royal-blue to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-portfolio-royal-blue via-portfolio-navy to-portfolio-royal-blue blur-sm" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-portfolio-royal-blue/50" />
          <div className="mx-4 px-6 py-1 rounded-full border border-portfolio-royal-blue/20 bg-gradient-to-r from-portfolio-royal-blue/5 to-portfolio-navy/5">
            <span className="text-xs font-medium tracking-widest uppercase text-portfolio-royal-blue">Expertise</span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-portfolio-navy/50" />
        </div>

        <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-20 text-center animate-fade-in tracking-tight`}>
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group/card p-8 rounded-2xl transition-all hover:translate-y-[-8px] ${isDark ? 'bg-gradient-to-br from-black to-neutral-950 border-2 border-white/10' : 'bg-gradient-to-br from-white to-gray-50 border-2 border-black/10'} animate-scale-in relative overflow-hidden shadow-xl hover:shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Premium dual-tone accent border */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-portfolio-navy via-portfolio-royal-blue to-portfolio-navy' : 'from-portfolio-royal-blue via-portfolio-navy to-portfolio-royal-blue'} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-navy/5 via-transparent to-portfolio-royal-blue/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 tracking-tight flex items-center gap-3 relative z-10`}>
                <span className={`w-1.5 h-8 rounded-full ${index % 2 === 0 ? 'bg-gradient-to-b from-portfolio-navy to-portfolio-royal-blue' : 'bg-gradient-to-b from-portfolio-royal-blue to-portfolio-navy'} shadow-lg`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-portfolio-navy/50'
                        : 'bg-black/5 text-gray-700 border-black/20 hover:bg-black/10 hover:border-portfolio-navy/50'
                    } shadow-sm hover:shadow-md`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
