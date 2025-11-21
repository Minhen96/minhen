import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'blue'
    },
    {
      title: 'Mobile Development',
      skills: ['Flutter (Dart)', 'Kotlin'],
      color: 'teal'
    },
    {
      title: 'Backend Languages & Frameworks',
      skills: ['Spring Boot (Java)', '.NET (C#)'],
      color: 'green'
    },
    {
      title: 'Database',
      skills: ['Postgres', 'SQL Server', 'Supabase', 'Firebase'],
      color: 'purple'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Postman', 'Docker', 'AWS', 'Cloudflare', 'Vercel', 'Ngrok'],
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: isDark ? 'dark:bg-blue-600/20 dark:text-blue-300 dark:border-blue-600/30' : 'bg-blue-100 text-blue-700 border-blue-200',
    green: isDark ? 'dark:bg-green-600/20 dark:text-green-300 dark:border-green-600/30' : 'bg-green-100 text-green-700 border-green-200',
    orange: isDark ? 'dark:bg-orange-600/20 dark:text-orange-300 dark:border-orange-600/30' : 'bg-orange-100 text-orange-700 border-orange-200',
    purple: isDark ? 'dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-600/30' : 'bg-purple-100 text-purple-700 border-purple-200',
    teal: isDark ? 'dark:bg-teal-600/20 dark:text-teal-300 dark:border-teal-600/30' : 'bg-teal-100 text-teal-700 border-teal-200'
  };

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center animate-fade-in`}>
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-8 rounded-xl transition-all hover:shadow-xl hover:-translate-y-1 ${isDark ? 'bg-gray-950 border border-gray-800' : 'bg-white shadow-md'} animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${
                      colorClasses[category.color as keyof typeof colorClasses]
                    }`}
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
