import type { FC } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Section from '../components/Section';
import { projects, type ProjectSummary } from '../data/projects';
import Seo from '../components/Seo';

const ProjectCard: FC<{ p: ProjectSummary; i: number }> = ({ p, i }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <Link to={`/projects/${p.slug}`} state={{ fromProjects: true }} className="project-link">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05 }}
        viewport={{ once: true }}
        className="project-item border-top border-right"
      >
        <div style={{ transform: 'translateZ(50px)' }} className="project-item-content">
          <div className="project-item-meta text-xs">
            <span>{p.category}</span>
            <span>{p.year}</span>
          </div>
          <h3 className="project-item-title">{p.title}</h3>
          <p className="project-item-desc text-sm text-secondary">{p.desc}</p>
          <div className="project-tags text-xs">
            {p.tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-item-footer text-xs">
            <span>VIEW_DETAILS →</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects: FC = () => {
  const location = useLocation();
  const cameFromDetail = Boolean(
    (location.state as { fromProjectDetail?: boolean } | null)?.fromProjectDetail,
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: cameFromDetail ? -32 : 0, y: cameFromDetail ? 0 : 18, filter: 'blur(6px)' }}
      animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <Seo
        title="Projects"
        description="Project portfolio of Kong Ji Yu featuring LearnBIM, remembry, Dotivra, and iFounder with technical summaries and outcomes."
        path="/projects"
        keywords="portfolio projects, LearnBIM, remembry, Dotivra, iFounder, React, SwiftUI"
      />
      <section className="page-header container">
        <h1 className="text-xs">// TECHNICAL_ARCHIVE</h1>
        <p className="page-title">SELECTED <br /> BUILDS.</p>
      </section>

      <Section id="grid" number="01" title="REPOSITORY">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} />
          ))}
        </div>
        <style>{`
          .page-header { padding: 80px 24px; }
          .page-title { font-size: 4rem; line-height: 1; margin-top: 24px; text-transform: uppercase; }
          .project-link { text-decoration: none; color: inherit; }
          .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); border-left: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); perspective: 1000px; }
          .project-item { padding: 32px; display: flex; flex-direction: column; gap: 24px; transition: border-color 0.3s ease; cursor: pointer; min-height: 360px; background: var(--bg-color); }
          .project-item:hover { border-color: var(--text-primary); z-index: 10; }
          .project-item-content { display: flex; flex-direction: column; gap: 20px; height: 100%; }
          .project-item-meta { display: flex; justify-content: space-between; color: var(--text-secondary); }
          .project-item-title { font-size: 1.25rem; text-transform: uppercase; }
          .project-item-desc { flex-grow: 1; line-height: 1.6; }
          .project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
          .project-tags span { padding: 2px 8px; border: 1px solid var(--border-color); color: var(--text-secondary); }
          .project-item-footer { color: var(--text-primary); font-weight: 600; padding-top: 12px; }
          @media (max-width: 768px) { .page-title { font-size: 2.5rem; } .projects-grid { grid-template-columns: 1fr; } }
        `}</style>
      </Section>
    </motion.div>
  );
};

export default Projects;
