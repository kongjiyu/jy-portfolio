import type { FC } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { projectDetails, type ProjectSlug } from '../data/projects';
import Seo from '../components/Seo';

const isProjectSlug = (value: string | undefined): value is ProjectSlug => {
  if (!value) {
    return false;
  }

  return value in projectDetails;
};

const ProjectDetail: FC = () => {
  const { slug } = useParams();
  const location = useLocation();
  const enteredFromProjects = Boolean(
    (location.state as { fromProjects?: boolean } | null)?.fromProjects,
  );

  if (!isProjectSlug(slug)) {
    return <Navigate to="/projects" replace />;
  }

  const project = projectDetails[slug];

  return (
    <motion.div
      initial={{ opacity: 0, x: enteredFromProjects ? 36 : 0, y: enteredFromProjects ? 0 : 20, filter: 'blur(8px)' }}
      animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -24, filter: 'blur(6px)' }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <Seo
        title={project.title.replaceAll('_', ' ')}
        description={project.intro}
        path={`/projects/${project.slug}`}
        keywords={`${project.title.replaceAll('_', ' ')}, ${project.tags.join(', ')}, Kong Ji Yu portfolio`}
      />
      <section className="page-header container">
        <p className="text-xs">// SOFTWARE_BRIEF</p>
        <h1 className="page-title">{project.title}</h1>
        <p className="project-subtitle text-secondary">
          {project.category} • {project.year}
        </p>
      </section>

      <Section id="project-overview" number="01" title="OVERVIEW">
        <div className="detail-grid">
          <article className="detail-card border-top border-right border-bottom border-left">
            <h2 className="detail-heading">PROJECT_INTRO</h2>
            <p className="detail-body text-secondary">{project.intro}</p>
          </article>

          <article className="detail-card border-top border-right border-bottom">
            <h2 className="detail-heading">PROBLEM</h2>
            <p className="detail-body text-secondary">{project.problem}</p>
          </article>

          <article className="detail-card border-right border-bottom border-left">
            <h2 className="detail-heading">SOLUTION</h2>
            <p className="detail-body text-secondary">{project.solution}</p>
          </article>

          <article className="detail-card border-right border-bottom">
            <h2 className="detail-heading">TECH_STACK</h2>
            <p className="detail-body text-secondary">{project.stackNotes}</p>
            <div className="project-tags text-xs">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section id="project-highlights" number="02" title="HIGHLIGHTS">
        <div className="highlights border-top border-right border-bottom border-left">
          {project.highlights.map((item, index) => (
            <div key={item} className="highlight-item border-bottom">
              <span className="text-xs">{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="detail-actions">
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="action-link">
            OPEN_REPOSITORY ↗
          </a>
          <Link to="/projects" state={{ fromProjectDetail: true }} className="action-link">
            ← BACK_TO_PROJECTS
          </Link>
        </div>
      </Section>

      <style>{`
        .page-header { padding: 80px 24px 56px; }
        .page-title { font-size: clamp(2.2rem, 8vw, 4.6rem); line-height: 1; margin-top: 16px; text-transform: uppercase; }
        .project-subtitle { margin-top: 16px; letter-spacing: 0.04em; }
        .detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .detail-card { padding: 28px; min-height: 220px; display: flex; flex-direction: column; gap: 16px; }
        .detail-heading { font-size: 0.9rem; letter-spacing: 0.08em; }
        .detail-body { line-height: 1.7; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
        .project-tags span { padding: 2px 8px; border: 1px solid var(--border-color); color: var(--text-secondary); }
        .highlights { display: grid; }
        .highlight-item { display: grid; grid-template-columns: 72px 1fr; gap: 12px; align-items: start; padding: 18px 24px; }
        .highlight-item:last-child { border-bottom: none; }
        .detail-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 24px; }
        .action-link { border: 1px solid var(--border-color); padding: 10px 14px; text-decoration: none; color: inherit; font-size: 0.78rem; letter-spacing: 0.06em; }
        .action-link:hover { border-color: var(--text-primary); }
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr; }
          .detail-card { min-height: auto; }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectDetail;