# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React 19 + TypeScript + Vite. It showcases projects, experience, education, and hackathons with 3D graphics (Three.js/react-three-fiber) and smooth page transitions.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## Architecture

- **Routing**: React Router v7 with route-based code splitting
- **Animation**: Framer Motion for page transitions via AnimatePresence
- **3D Graphics**: @react-three/fiber and @react-three/drei for Three.js integration
- **Styling**: Plain CSS with CSS variables (no Tailwind)
- **Analytics**: Vercel Analytics integration

### Directory Structure

```
src/
├── App.tsx           # Root component with routing and AnimatePresence
├── main.tsx          # Entry point with React.StrictMode and BrowserRouter
├── components/       # Reusable UI components (Layout, Header, Section, etc.)
├── pages/            # Route-level components (Home, Projects, Experience, etc.)
├── data/             # Static data files (projects.ts)
├── styles/           # Additional CSS files
└── sections/        # Section-specific styles
```

### Page Routes

- `/` - Home
- `/projects` - Projects listing
- `/projects/:slug` - Individual project detail
- `/experience` - Work experience
- `/education` - Education history
- `/hackathons` - Hackathon participation

### Key Patterns

- `AnimatePresence mode="wait"` ensures animations complete before new route mounts
- Layout wrapper provides consistent header/footer across all pages
- 3D canvas elements are typically self-contained within page components
- SEO component handles meta tags per-page