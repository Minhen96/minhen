import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-32 relative ${isDark ? 'bg-neutral-950' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Luxurious Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-portfolio-royal-blue to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-portfolio-royal-blue via-portfolio-navy to-portfolio-royal-blue blur-sm" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-portfolio-royal-blue/50" />
          <div className="mx-4 px-6 py-1 rounded-full border border-portfolio-royal-blue/20 bg-gradient-to-r from-portfolio-royal-blue/5 to-portfolio-navy/5">
            <span className="text-xs font-medium tracking-widest uppercase text-portfolio-royal-blue">Contact</span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-portfolio-navy/50" />
        </div>

        <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-6 text-center animate-fade-in tracking-tight`}>
          Get In Touch
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'} text-center mb-20 max-w-2xl mx-auto animate-slide-in-left`}>
          Have a project in mind or just want to chat? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start animate-slide-in-right">
          <div className="space-y-6">
            <div className={`${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-2 border-white/20' : 'bg-gradient-to-br from-white to-gray-50 border-2 border-black/20'} p-8 rounded-2xl transition-all hover:shadow-xl shadow-lg relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-portfolio-navy to-portfolio-royal-blue" />

              <div className="flex items-start space-x-4 mb-8 relative z-10">
                <div className={`p-4 rounded-xl bg-gradient-to-br from-portfolio-navy/30 to-portfolio-navy/10 border border-portfolio-navy/30 shadow-lg shadow-portfolio-navy/20`}>
                  <Mail className="text-portfolio-navy" size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'} mb-2 tracking-tight`}>Email</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-700'} break-all`}>evanyap96@gmail.com</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-portfolio-navy/30 to-transparent mb-8" />

              <div className="flex items-start space-x-4 relative z-10">
                <div className={`p-4 rounded-xl bg-gradient-to-br from-portfolio-royal-blue/30 to-portfolio-royal-blue/10 border border-portfolio-royal-blue/30 shadow-lg shadow-portfolio-royal-blue/20`}>
                  <MessageSquare className="text-portfolio-royal-blue" size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'} mb-2 tracking-tight`}>Response Time</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-700'}>Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'} leading-relaxed`}>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`${isDark ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-2 border-white/20' : 'bg-gradient-to-br from-white to-gray-50 border-2 border-black/20'} p-8 rounded-2xl transition-all shadow-xl hover:shadow-2xl relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-portfolio-royal-blue/10 to-transparent rounded-bl-full" />

            <div className="mb-6 relative z-10">
              <label htmlFor="name" className={`block ${isDark ? 'text-gray-300' : 'text-gray-900'} font-medium mb-2 text-sm tracking-wide`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl transition-all ${isDark ? 'bg-white/5 border-2 border-white/20 text-white focus:border-portfolio-navy/50 placeholder:text-gray-600' : 'bg-black/5 border-2 border-black/20 text-black focus:border-portfolio-navy/50 placeholder:text-gray-500'} focus:outline-none shadow-sm focus:shadow-md`}
                placeholder="Your name"
              />
            </div>

            <div className="mb-6 relative z-10">
              <label htmlFor="email" className={`block ${isDark ? 'text-gray-300' : 'text-gray-900'} font-medium mb-2 text-sm tracking-wide`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl transition-all ${isDark ? 'bg-white/5 border-2 border-white/20 text-white focus:border-portfolio-navy/50 placeholder:text-gray-600' : 'bg-black/5 border-2 border-black/20 text-black focus:border-portfolio-navy/50 placeholder:text-gray-500'} focus:outline-none shadow-sm focus:shadow-md`}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6 relative z-10">
              <label htmlFor="message" className={`block ${isDark ? 'text-gray-300' : 'text-gray-900'} font-medium mb-2 text-sm tracking-wide`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-xl transition-all ${isDark ? 'bg-white/5 border-2 border-white/20 text-white focus:border-portfolio-navy/50 placeholder:text-gray-600' : 'bg-black/5 border-2 border-black/20 text-black focus:border-portfolio-navy/50 placeholder:text-gray-500'} focus:outline-none resize-none shadow-sm focus:shadow-md`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className={`relative w-full px-6 py-4 rounded-xl font-semibold transition-all hover:scale-[1.02] flex items-center justify-center space-x-2 overflow-hidden group shadow-lg hover:shadow-xl ${isDark ? 'text-black' : 'text-white'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-navy to-portfolio-royal-blue" />
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-royal-blue to-portfolio-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Send Message</span>
              <Send size={18} className="relative z-10" />
            </button>
          </form>
        </div>

        <footer className={`mt-20 text-center ${isDark ? 'text-gray-600' : 'text-gray-500'} text-sm`}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-portfolio-navy/30" />
            <div className="mx-4 w-2 h-2 rounded-full bg-gradient-to-r from-portfolio-navy to-portfolio-royal-blue" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-portfolio-royal-blue/30" />
          </div>
          <p>&copy; {new Date().getFullYear()} MH. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
