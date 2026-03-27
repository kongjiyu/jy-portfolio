export type ProjectSlug = 'learnbim' | 'remembry' | 'dotivra' | 'ifounder';

export type ProjectSummary = {
  id: string;
  slug: ProjectSlug;
  category: string;
  title: string;
  year: string;
  desc: string;
  tags: string[];
};

export type ProjectDetail = ProjectSummary & {
  intro: string;
  problem: string;
  solution: string;
  highlights: string[];
  stackNotes: string;
  repoUrl: string;
};

export const projectDetails: Record<ProjectSlug, ProjectDetail> = {
  learnbim: {
    id: '01',
    slug: 'learnbim',
    category: 'iOS_ACCESSIBILITY',
    title: 'LEARN_BIM',
    year: '2026',
    desc: 'Swift Student Challenge 2026 Winner. An interactive playground for learning Bahasa Isyarat Malaysia (BIM) using camera-based gesture recognition.',
    tags: ['SwiftUI', 'Vision', 'CoreML', 'AVFoundation'],
    intro:
      'LearnBIM is an educational mobile app that helps beginners learn Bahasa Isyarat Malaysia through guided practice and real-time visual feedback.',
    problem:
      'Most new learners struggle to practice sign language consistently because they do not get immediate feedback on hand shape, movement, and accuracy.',
    solution:
      'The app combines interactive lessons with on-device camera recognition so users can practice signs and instantly understand what to improve.',
    highlights: [
      'Step-by-step BIM lessons with progressive difficulty',
      'Camera-based gesture checking for instant feedback',
      'Accessible visual UI designed for clear, focused learning',
    ],
    stackNotes:
      'Built with SwiftUI and AVFoundation, with Apple Vision and CoreML powering gesture detection and recognition flows.',
    repoUrl: 'https://github.com/kongjiyu/LearnBIM',
  },
  remembry: {
    id: '02',
    slug: 'remembry',
    category: 'AI_NOTES',
    title: 'REMEMBRY',
    year: '2026',
    desc: 'A meeting memory and note-taking app that captures key points, action items, and follow-ups for better team continuity.',
    tags: ['TypeScript', 'React', 'AI', 'Productivity'],
    intro:
      'remembry is a smart meeting memory tool built to reduce context loss by turning conversations into structured notes and actions.',
    problem:
      'Teams lose time after meetings because key decisions and tasks are scattered across chats, docs, and memory.',
    solution:
      'remembry centralizes meeting outcomes into concise summaries, clear action items, and searchable history so teams can move faster.',
    highlights: [
      'Structured summaries for rapid post-meeting review',
      'Action tracking with ownership and next steps',
      'Searchable memory timeline for team continuity',
    ],
    stackNotes:
      'Developed with a TypeScript-first architecture, focused on reliable data modeling and a clean note consumption experience.',
    repoUrl: 'https://github.com/kongjiyu/remembry',
  },
  dotivra: {
    id: '03',
    slug: 'dotivra',
    category: 'AI_DOCS',
    title: 'DOTIVRA',
    year: '2025',
    desc: 'AI-powered documentation platform. 2nd Runner-Up at CodeNection 2025 Hackathon. Features rich-text editing and Mermaid diagram rendering.',
    tags: ['React', 'TypeScript', 'Firebase', 'TipTap'],
    intro:
      'Dotivra is a documentation workspace that combines rich writing and AI assistance so teams can capture and share technical knowledge faster.',
    problem:
      'Documentation often becomes outdated or fragmented across tools, making it hard for teams to find trusted and current information.',
    solution:
      'Dotivra brings writing, editing, and visual explanation into one workflow with AI support and diagram-ready content for clearer collaboration.',
    highlights: [
      'Rich-text editor for structured technical writing',
      'Integrated Mermaid rendering for visual documentation',
      'AI-assisted drafting to speed up document creation',
    ],
    stackNotes:
      'Built on React and TypeScript with a TipTap-based editor and Firebase-backed data services for a responsive authoring experience.',
    repoUrl: 'https://github.com/kongjiyu/dotivra',
  },
  ifounder: {
    id: '04',
    slug: 'ifounder',
    category: 'FOUNDERS_PLATFORM',
    title: 'IFOUNDER',
    year: '2026',
    desc: 'A React + TypeScript platform for founders to organize startup execution, priorities, and early-stage planning.',
    tags: ['React', 'TypeScript', 'Planning', 'Startup'],
    intro:
      'iFounder is a founder-focused web platform designed to help early teams align strategy, planning, and daily execution in one place.',
    problem:
      'Early-stage founders often manage planning across disconnected tools, which weakens visibility and slows decision-making.',
    solution:
      'iFounder provides one workspace for goals, priorities, and operational workflows so founders can stay aligned and execute consistently.',
    highlights: [
      'Founder-centric planning workflows and dashboards',
      'Clear prioritization for high-impact execution',
      'Simple interface that reduces operational friction',
    ],
    stackNotes:
      'Built with React and TypeScript for maintainability, with component-driven UI patterns to support iteration speed.',
    repoUrl: 'https://github.com/kongjiyu/iFounder',
  },
};

export const projects: ProjectSummary[] = Object.values(projectDetails);