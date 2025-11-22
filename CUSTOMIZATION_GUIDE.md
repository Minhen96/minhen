# Portfolio Customization Guide

Quick reference for updating your portfolio website.

## 🎯 Main File to Edit

**`src/constants/portfolio.ts`** - This is your single source of truth!

---

## 🎮 Intro Screen (Game-like Landing)

### What Users See:
1. **First Visit**: Animated 3D character → Typing text → "Press any key to continue"
2. **Return Visit**: Skips directly to portfolio (saved in browser)

### How to Customize:

```typescript
export const INTRO_CONFIG = {
  greeting: "Hi there,",
  introduction: [
    "First line appears...",
    "Then second line...",
    "Finally third line..."
  ],
  tagline: "Where Code Meets Creativity",
  skipText: "Press any key to continue...",
  enableSkip: true, // Set false to always show intro
}
```

### Tips:
- Keep introduction lines concise (1-2 sentences each)
- The typing animation plays sequentially
- Set `enableSkip: false` during development to test changes

---

## 🎨 Color Scheme

Your custom colors are in **`tailwind.config.js`**:

```javascript
portfolio: {
  coral: '#FF6B6B',      // Use: text-portfolio-coral
  mint: '#4ECDC4',       // Use: bg-portfolio-mint
  mustard: '#FFD93D',    // Use: border-portfolio-mustard
  peach: '#FFB4A2',      // Use: hover:bg-portfolio-peach
  slate: '#2D3142',      // Dark text
  'off-white': '#F8F9FA' // Backgrounds
}
```

### How to Use in Components:
```tsx
<div className="bg-portfolio-mint text-portfolio-slate">
  <button className="hover:bg-portfolio-coral">Click me</button>
</div>
```

---

## 👤 Personal Information

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your@email.com",
  phone: "+1 234 567 8900",
  location: "City, Country",
  bio: "Your short bio...",
  resumeUrl: "/resume.pdf",
}
```

---

## 🔗 Social Links

```typescript
export const SOCIAL_LINKS = {
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  instagram: "https://instagram.com/username",
  // Add more as needed
}
```

**Note:** Instagram icon is already set up in Hero.tsx!

---

## 🛠️ Skills

Organized by category for clean display:

```typescript
export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Python"],
  frontend: ["React", "Tailwind CSS", "Next.js"],
  backend: ["Node.js", "Express", "PostgreSQL"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  tools: ["Git", "Docker", "AWS"],
  other: ["REST APIs", "GraphQL", "Microservices"],
}
```

---

## 💼 Projects

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of what this project does",
    image: "/projects/project1.png", // Place in public/projects/
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/you/project",
    featured: true, // Show prominently
  },
  // Add more projects...
]
```

### Adding Project Images:
1. Save image to `public/projects/your-image.png`
2. Reference as `/projects/your-image.png` in constants

---

## 💼 Work Experience

```typescript
export const EXPERIENCE = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "Jan 2022 - Present",
    location: "City, Country / Remote",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3",
    ],
  },
]
```

---

## 🎓 Education

```typescript
export const EDUCATION = [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor of Science in Computer Science",
    duration: "2016 - 2020",
    location: "City, Country",
    achievements: ["GPA: 3.8/4.0", "Dean's List"],
  },
]
```

---

## 📜 Certifications

```typescript
export const CERTIFICATIONS = [
  {
    id: 1,
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://verify-link.com",
  },
]
```

---

## 💬 Testimonials

```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Client Name",
    position: "Their Position at Company",
    content: "What they said about working with you...",
    avatar: "/testimonials/person1.jpg",
  },
]
```

---

## 🎨 Advanced: Customizing the 3D Character

The CSS-based 3D character is in **`src/components/Scene3DFallback.tsx`**.

### Change Colors:
Look for these className patterns and update:
- `bg-portfolio-coral` → Head color
- `bg-portfolio-mustard` → Body color
- `bg-portfolio-mint` → Arms color
- `bg-portfolio-peach` → Legs color

### Adjust Size:
Find these divs and change width/height values:
```tsx
<div className="w-32 h-48"> // Main container
<div className="w-24 h-24 bg-portfolio-coral"> // Head
```

---

## 🚀 Testing Your Changes

1. Save your changes to `portfolio.ts`
2. The dev server auto-reloads (http://localhost:5173)
3. To test intro again: Open DevTools → Application → Local Storage → Delete `portfolio_intro_completed`

---

## 📱 Responsive Design

All components are already responsive! The design automatically adjusts for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

---

## 🐛 Common Issues

### Intro not showing?
- Check `enableSkip` is `true` in INTRO_CONFIG
- Clear localStorage: DevTools → Application → Local Storage → Clear All

### Colors not updating?
- Make sure you're using `portfolio-*` prefix
- Check `tailwind.config.js` for color definitions
- Restart dev server if needed

### Images not loading?
- Place images in `public/` folder
- Reference as `/path-from-public/image.png` (no "public" in path)

---

## 🎯 Quick Wins

1. **Update your name**: Edit `PERSONAL_INFO.name`
2. **Change intro text**: Edit `INTRO_CONFIG.introduction` array
3. **Add projects**: Copy a project object in `PROJECTS` and modify
4. **Customize colors**: Edit hex values in `tailwind.config.js`

---

**Need help?** All changes are in `src/constants/portfolio.ts` - that's the only file you need to edit for content updates!
