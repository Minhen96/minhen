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
    <section id="contact" className={`py-20 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-950' : 'bg-gradient-to-br from-blue-50 to-white'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 text-center animate-fade-in`}>
          Get In Touch
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} text-center mb-12 max-w-2xl mx-auto animate-slide-in-left`}>
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start animate-slide-in-right">
          <div>
            <div className={`${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white'} p-8 rounded-xl shadow-md mb-6 transition-all hover:shadow-lg`}>
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-600/20' : 'bg-blue-100'}`}>
                  <Mail className={isDark ? 'text-blue-400' : 'text-blue-600'} size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Email</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>evanyap96@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-green-600/20' : 'bg-green-100'}`}>
                  <MessageSquare className={isDark ? 'text-green-400' : 'text-green-600'} size={24} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Response Time</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <p className={isDark ? 'text-gray-500' : 'text-gray-500'} >
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white'} p-8 rounded-xl shadow-md transition-all hover:shadow-lg`}>
            <div className="mb-6">
              <label htmlFor="name" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all ${isDark ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-600' : 'border-gray-300 focus:ring-blue-600'} border focus:ring-2 focus:border-transparent outline-none`}
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all ${isDark ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-600' : 'border-gray-300 focus:ring-blue-600'} border focus:ring-2 focus:border-transparent outline-none`}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg transition-all ${isDark ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-600' : 'border-gray-300 focus:ring-blue-600'} border focus:ring-2 focus:border-transparent outline-none resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-md flex items-center justify-center space-x-2 animate-glow"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>

        <footer className={`mt-20 text-center ${isDark ? 'text-gray-600' : 'text-gray-500'} text-sm`}>
          <p>&copy; {new Date().getFullYear()} MH. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
