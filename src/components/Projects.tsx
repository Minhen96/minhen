import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'HR System with Mobile & Web Portal',
      description: 'Complete HR management system featuring a Flutter mobile app for employees and an admin web portal for HR management. Users can apply for leave, manage equipment, and check company information.',
      technologies: ['Flutter', 'Dart', 'Web Portal', '.NET(C#)'],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Minhen96/hr_user_app_with_admin_web_portal'
    },
    {
      title: 'RE-ME: Personal Growth Tracker',
      description: 'A self-growth web application that helps users track moods, hobbies, and personal reflections. Features data visualization to identify your strengths and patterns over time.',
      technologies: ['TypeScript', 'Nextjs', 'Supabase'],
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Minhen96/RE-ME'
    },
    {
      title: 'AI WhatsApp Assistant',
      description: 'Intelligent AI chatbot that integrates with WhatsApp, supporting knowledge storage and file uploads. The bot answers questions based on user-provided documents.',
      technologies: ['Java', 'OpenAI API', 'Twilio', 'WhatsApp API'],
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Minhen96/ai-whatsapp-assistant'
    },
    {
      title: 'AI Legal Assistant',
      description: 'AWS GreatAI Hackathon project. A specialized AI assistant for legal document management and law-related inquiries. Users can upload legal documents and ask questions about them.',
      technologies: ['TypeScript', 'AI', 'AWS amplify', 'AWS lambda'],
      image: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Minhen96/ai-legal-assistant'
    },
    {
      title: 'Pet E-Commerce Platform',
      description: 'TARUMT Final Year Project. A mobile e-commerce application for pet-related products. Users can act as either merchants or buyers in a peer-to-peer marketplace.',
      technologies: ['Kotlin', 'Android', 'Mobile Commerce', 'Firebase'],
      image: 'https://images.pexels.com/photos/2962123/pexels-photo-2962123.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Minhen96/FYP-pet-ecommerce-platform-mobile-app'
    }
  ];

  return (
    <section id="projects" className={`py-32 relative ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      {/* Luxurious Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-portfolio-navy to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-portfolio-navy via-portfolio-royal-blue to-portfolio-navy blur-sm" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-portfolio-navy/50" />
          <div className="mx-4 px-6 py-1 rounded-full border border-portfolio-navy/20 bg-gradient-to-r from-portfolio-navy/5 to-portfolio-royal-blue/5">
            <span className="text-xs font-medium tracking-widest uppercase text-portfolio-navy">Portfolio</span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-portfolio-royal-blue/50" />
        </div>

        <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-20 text-center animate-fade-in tracking-tight`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group rounded-2xl overflow-hidden transition-all hover:translate-y-[-8px] animate-scale-in ${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-2 border-white/20' : 'bg-gradient-to-br from-black/5 to-black/[0.02] border-2 border-black/20'} shadow-xl hover:shadow-2xl relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Premium corner accents */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${index % 2 === 0 ? 'bg-gradient-to-br from-portfolio-navy/10' : 'bg-gradient-to-br from-portfolio-royal-blue/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`} />
              <div className={`absolute bottom-0 left-0 w-20 h-20 ${index % 2 === 0 ? 'bg-gradient-to-tr from-portfolio-royal-blue/10' : 'bg-gradient-to-tr from-portfolio-navy/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-full`} />

              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 saturate-[0.6] group-hover:saturate-100"
                />
                {/* Luxury gradient overlay */}
                <div className={`absolute inset-0 ${isDark ? 'bg-black/50' : 'bg-white/50'} group-hover:opacity-20 transition-all duration-500`} />
                <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-br from-portfolio-navy/40 via-transparent to-portfolio-royal-blue/30' : 'bg-gradient-to-br from-portfolio-royal-blue/40 via-transparent to-portfolio-navy/30'} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                {/* Elegant border on image */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-portfolio-navy via-portfolio-royal-blue to-portfolio-navy' : 'from-portfolio-royal-blue via-portfolio-navy to-portfolio-royal-blue'}`} />
              </div>

              <div className="p-8 relative z-10">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-4 tracking-tight leading-tight`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-700'} mb-6 leading-relaxed text-sm`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-2 rounded-full text-xs font-medium border-2 transition-all hover:scale-105 ${isDark ? 'bg-white/5 text-gray-400 border-white/20 hover:border-portfolio-navy/50' : 'bg-black/5 text-gray-600 border-black/20 hover:border-portfolio-navy/50'} shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg border-2 transition-all group/link hover:scale-105 ${isDark ? 'text-gray-300 hover:text-white border-white/20 hover:border-portfolio-royal-blue/50 hover:bg-portfolio-royal-blue/10' : 'text-gray-700 hover:text-black border-black/20 hover:border-portfolio-navy/50 hover:bg-portfolio-navy/10'} shadow-sm hover:shadow-md`}
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">View Source</span>
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
