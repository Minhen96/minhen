# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Game-like 3D Intro Screen** - Interactive CSS-based 3D character with typing animation
- **Dual Experience** - First-time visitors see intro, returning visitors skip to portfolio
- **Custom Color Palette** - Professional design inspired by design_colouring.png reference
- **Responsive design** that works on all devices
- **Modern UI** with smooth animations and micro-interactions
- **Easy content management** through centralized constants
- **Fast performance** with Vite
- **Type-safe** with TypeScript
- **Styled** with Tailwind CSS custom theme

## Project Structure

```
project/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── IntroScreen.tsx  # Game-like intro with typing animation
│   │   ├── Scene3DFallback.tsx # CSS-based 3D character
│   │   ├── Hero.tsx         # Hero section
│   │   └── ...              # Other components
│   ├── constants/            # Centralized data and configuration
│   │   └── portfolio.ts      # Main constants file - UPDATE THIS FILE
│   ├── context/              # React context providers
│   ├── hooks/                # Custom React hooks
│   │   └── useIntroComplete.ts # Intro state management
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── reference/                # Design inspiration images
│   ├── design_colouring.png
│   └── game_style.png
├── public/                  # Static assets
├── tailwind.config.js       # Custom color palette
├── index.html              # HTML template
└── package.json            # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Updating Your Portfolio Content

All your portfolio content is centralized in `src/constants/portfolio.ts`. Simply update this file to modify:

### Intro Screen Configuration
Customize the game-like intro experience:
```typescript
export const INTRO_CONFIG = {
  greeting: "Hi there,",
  introduction: [
    "Line 1 of your introduction",
    "Line 2 of your introduction",
    "Line 3 of your introduction",
  ],
  tagline: "Your tagline here",
  skipText: "Press any key to continue...",
  enableSkip: true, // Set to false to show intro every time
}
```

**How it works:**
- First-time visitors see the full intro animation
- Returning visitors automatically skip to the portfolio (if `enableSkip: true`)
- To reset: Clear browser localStorage or set `enableSkip: false`

### Personal Information
```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  // ... more fields
}
```

### Projects
Add or modify projects in the `PROJECTS` array:
```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    // ... more fields
  }
]
```

### Skills
Update your skills by category:
```typescript
export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Python"],
  frontend: ["React", "Vue.js", "Next.js"],
  // ... more categories
}
```

### Experience & Education
Add your work experience and educational background in the respective arrays.

### Social Links
Update your social media profiles:
```typescript
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ... more links
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Building for Production

1. Build the project:
```bash
npm run build
```

2. The optimized files will be in the `dist` folder

3. Deploy the `dist` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your repository in Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy!

### GitHub Pages
```bash
npm run build
# Push the dist folder to gh-pages branch
```

## Customization

### Colors
Update theme colors in `src/constants/portfolio.ts`:
```typescript
export const THEME = {
  primaryColor: "#3B82F6",
  secondaryColor: "#8B5CF6",
  accentColor: "#10B981",
}
```

You can also modify Tailwind configuration in `tailwind.config.js`.

### Components
All components are in `src/components/`. Feel free to modify them to match your design preferences.

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Adding New Sections

1. Add your data to `src/constants/portfolio.ts`
2. Create a new component in `src/components/`
3. Import and use the data from constants
4. Add the component to `App.tsx`

Example:
```typescript
// In src/constants/portfolio.ts
export const NEW_SECTION = [
  { id: 1, title: "Item 1" }
]

// In src/components/NewSection.tsx
import { NEW_SECTION } from '../constants/portfolio'

export const NewSection = () => {
  return (
    <div>
      {NEW_SECTION.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}
```

## Tips for Best Results

1. **Images**: Place all images in the `public` folder and reference them with `/path-to-image.png`
2. **SEO**: Update the SEO constants and meta tags in `index.html`
3. **Performance**: Optimize images before uploading (use WebP format when possible)
4. **Accessibility**: Ensure all images have alt text and the site is keyboard navigable
5. **Mobile First**: Test on different screen sizes regularly

## Troubleshooting

### Development server won't start
- Make sure all dependencies are installed: `npm install`
- Check if port 5173 is available
- Try deleting `node_modules` and running `npm install` again

### Build fails
- Run `npm run lint` to check for errors
- Ensure all imports are correct
- Check TypeScript errors: `npx tsc --noEmit`

## Contributing

Feel free to fork this project and customize it for your own use!

## License

This project is open source and available under the MIT License.

## Support

If you have questions or need help, feel free to open an issue in the repository.

---

**Remember**: The main file you need to edit is `src/constants/portfolio.ts` - all your portfolio content is there!
