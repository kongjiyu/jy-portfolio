import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Seo from '../components/Seo';

const Hackathons: FC = () => {
  const achievements = [
    { 
      id: '01', 
      title: 'Winner — Swift Student Challenge 2026', 
      event: 'Apple Globally', 
      date: '2026', 
      desc: 'Selected for LearnBIM, an accessibility-focused Swift Playground project. Recognized for innovation and meaningful social impact.',
      award: 'GLOBAL_WINNER',
      projectLink: '/projects'
    },
    { 
      id: '02', 
      title: '2nd Runner-Up', 
      event: 'CodeNection 2025 Hackathon (MMU Cyberjaya)', 
      date: '2025', 
      desc: 'Developed Dotivra, an AI-powered technical documentation platform using React and Firebase.',
      award: 'TOP_3',
      projectLink: '/projects'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Seo
        title="Hackathons"
        description="Hackathon and competition achievements of Kong Ji Yu, including Swift Student Challenge 2026 winner and CodeNection 2025 top 3 finish."
        path="/hackathons"
        keywords="hackathon, Swift Student Challenge 2026, CodeNection 2025, Kong Ji Yu"
      />
      <section className="page-header container">
        <h1 className="text-xs">// COMPETITION_HISTORY</h1>
        <p className="page-title">HACKATHON <br /> ARCHIVE.</p>
      </section>

      <Section id="wins" number="01" title="TRIUMPHS">
        <div className="experience-list">
          {achievements.map((win) => (
            <div key={win.id} className="exp-item border-bottom">
              <div className="exp-meta text-xs">
                <span style={{ color: '#4ade80' }}>{win.award}</span>
                <span className="exp-date">{win.date}</span>
              </div>
              <div className="exp-main">
                <h3 className="exp-title">{win.title}</h3>
                <p className="exp-org text-sm">{win.event}</p>
                <p className="exp-desc text-sm text-secondary">{win.desc}</p>
                <Link to={win.projectLink} className="text-xs mt-16 technical-link">
                  VIEW_TECHNICAL_SPECS →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .page-header { padding: 80px 24px; }
          .page-title { font-size: 4rem; line-height: 1; margin-top: 24px; text-transform: uppercase; }
          .exp-item { padding: 40px 0; display: flex; gap: 40px; }
          .exp-meta { width: 120px; flex-shrink: 0; display: flex; flex-direction: column; gap: 8px; color: var(--text-secondary); }
          .exp-main { flex-grow: 1; }
          .exp-title { font-size: 1.5rem; margin-bottom: 4px; text-transform: uppercase; }
          .exp-org { color: var(--text-secondary); margin-bottom: 16px; font-weight: 500; }
          .exp-desc { line-height: 1.6; }
          .technical-link { display: inline-block; margin-top: 16px; color: var(--text-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 4px; }
          @media (max-width: 768px) {
            .page-title { font-size: 2.5rem; }
            .exp-item { flex-direction: column; gap: 16px; }
            .exp-meta { width: 100%; flex-direction: row; justify-content: space-between; }
          }
        `}</style>
      </Section>
    </motion.div>
  );
};

export default Hackathons;
