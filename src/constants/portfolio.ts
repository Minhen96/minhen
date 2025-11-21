// Portfolio Constants - Update your information here
// This centralized file makes it easy to maintain your portfolio content

export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  bio: "Passionate developer with experience in building modern web applications. I love creating elegant solutions to complex problems.",
  resumeUrl: "/path-to-your-resume.pdf",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://www.instagram.com/minhen_96?igsh=ODNveW1yZnVka2Y%3D&utm_source=qr",
  // portfolio: "https://yourwebsite.com",
  // Add more social links as needed
};

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  frontend: ["React", "Vue.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "Django", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"],
  other: ["REST APIs", "GraphQL", "Microservices", "Agile/Scrum"],
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    image: "/projects/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project1",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    image: "/projects/taskapp.png",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project2",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
    image: "/projects/weather.png",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/yourusername/project3",
    featured: false,
  },
  // Add more projects as needed
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    duration: "Jan 2022 - Present",
    location: "Remote",
    description: [
      "Led development of customer-facing web applications serving 100K+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: 2,
    company: "Startup XYZ",
    position: "Full Stack Developer",
    duration: "Jun 2020 - Dec 2021",
    location: "City, Country",
    description: [
      "Built RESTful APIs and microservices using Node.js and Express",
      "Developed responsive UI components with React and TypeScript",
      "Collaborated with cross-functional teams in Agile environment",
    ],
  },
  // Add more experience as needed
];

export const EDUCATION = [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor of Science in Computer Science",
    duration: "2016 - 2020",
    location: "City, Country",
    achievements: ["GPA: 3.8/4.0", "Dean's List", "Relevant coursework: Data Structures, Algorithms, Web Development"],
  },
  // Add more education as needed
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/verification/...",
  },
  {
    id: 2,
    name: "React Advanced Certification",
    issuer: "Platform Name",
    date: "2022",
    credentialUrl: "https://example.com/cert/...",
  },
  // Add more certifications as needed
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "John Doe",
    position: "CTO at Company",
    content: "An exceptional developer who consistently delivers high-quality work. Great team player!",
    avatar: "/testimonials/person1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    content: "Very professional and detail-oriented. Always meets deadlines and exceeds expectations.",
    avatar: "/testimonials/person2.jpg",
  },
  // Add more testimonials as needed
];

// Theme and UI Constants
export const THEME = {
  primaryColor: "#3B82F6", // Tailwind blue-500
  secondaryColor: "#8B5CF6", // Tailwind purple-500
  accentColor: "#10B981", // Tailwind green-500
};

// SEO Meta Data
export const SEO = {
  title: "Your Name - Portfolio",
  description: "Full Stack Developer specializing in modern web applications. View my projects and experience.",
  keywords: ["web developer", "full stack", "react", "node.js", "portfolio"],
  ogImage: "/og-image.png",
};

// Contact Form Configuration
export const CONTACT_CONFIG = {
  emailServiceId: "your_emailjs_service_id",
  emailTemplateId: "your_emailjs_template_id",
  emailPublicKey: "your_emailjs_public_key",
};
