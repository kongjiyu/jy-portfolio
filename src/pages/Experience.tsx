import type { FC } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import Seo from '../components/Seo';

const Experience: FC = () => {
  const experiences = [
    { 
      id: '01', 
      type: 'FOUNDER', 
      title: 'Founder & Project Consultant', 
      org: 'K&E Tech Innovations, Malaysia', 
      date: '2025 - PRESENT', 
      desc: 'Delivering custom web systems and WordPress landing pages. Managed freelance collaborators and integrated SEO/Analytics for client success.' 
    },
    { 
      id: '02', 
      type: 'CONSULTANT', 
      title: 'CRM Consultant', 
      org: 'Dr.Factory, Malaysia', 
      date: 'MAR 2025 - JUN 2025', 
      desc: 'Customized CRM workflows and managed complex data migrations. Trained end-users on best practices to improve operational continuity.' 
    },
    { 
      id: '03', 
      type: 'INTERN', 
      title: 'CRM & Cloud Intern', 
      org: 'Global Genesis, Malaysia', 
      date: 'SEP 2024 - JAN 2025', 
      desc: 'Configured Oracle Cloud infrastructure and proposed integrated CRM solutions. Supported pre-sales efforts contributing to successful software deals.' 
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
        title="Experience"
        description="Professional experience of Kong Ji Yu across founding, CRM consulting, cloud systems, and software project delivery."
        path="/experience"
        keywords="software engineering experience, CRM consultant, founder, cloud intern, Kong Ji Yu"
      />
      <section className="page-header container">
        <h1 className="text-xs">// PROFESSIONAL_TIMELINE</h1>
        <p className="page-title">WORK <br /> EXPERIENCE.</p>
      </section>

      <Section id="work" number="01" title="HISTORY">
        <div className="experience-list">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="exp-item border-bottom"
            >
              <div className="exp-meta text-xs">
                <span className="exp-type">{exp.type}</span>
                <span className="exp-date">{exp.date}</span>
              </div>
              <div className="exp-main">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-org text-sm">{exp.org}</p>
                <p className="exp-desc text-sm text-secondary">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`
          .page-header { padding: 80px 24px; }
          .page-title { font-size: 4rem; line-height: 1; margin-top: 24px; text-transform: uppercase; }
          .experience-list { display: flex; flex-direction: column; }
          .exp-item { padding: 40px 0; display: flex; gap: 40px; }
          .exp-meta { width: 120px; flex-shrink: 0; display: flex; flex-direction: column; gap: 8px; }
          .exp-type { color: var(--text-primary); font-weight: 600; opacity: 0.6; }
          .exp-main { flex-grow: 1; }
          .exp-title { font-size: 1.5rem; margin-bottom: 4px; text-transform: uppercase; }
          .exp-org { color: var(--text-secondary); margin-bottom: 16px; font-weight: 500; }
          .exp-desc { max-width: 600px; line-height: 1.6; }
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

export default Experience;
