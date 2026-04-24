# Personal Portfolio

A modern personal portfolio showcasing projects, experience, education, and hackathon achievements.

**Live Site**: https://jy-portfolio-six.vercel.app

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **3D Graphics**: Three.js / @react-three/fiber / @react-three/drei
- **Analytics**: Vercel Analytics

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── App.tsx           # Root component with routing
├── main.tsx          # Entry point
├── components/       # Reusable UI components
├── pages/            # Route-level pages
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Hackathons.tsx
└── data/             # Static data (projects, etc.)
```

## Features

- Responsive design with custom cursor
- Smooth page transitions
- 3D interactive elements
- SEO-optimized with dynamic meta tags