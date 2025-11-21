import { Github } from 'lucide-react';
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
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 text-center animate-fade-in`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 animate-scale-in ${isDark ? 'bg-gray-900 shadow-lg shadow-gray-900/50' : 'bg-white shadow-md'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 ${isDark ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 transition-colors ${isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
