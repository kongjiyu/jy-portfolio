import type { FC } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const Education: FC = () => {
  const education = [
    { 
      id: '01', 
      degree: 'Bachelor of Software Engineering (Honours)', 
      school: 'Tunku Abdul Rahman University of Management and Technology (TAR UMT)', 
      date: 'JUN 2025 - PRESENT', 
      details: 'Current CGPA: 3.96 / 4.00. Focus on advanced software architecture and AI systems.' 
    },
    { 
      id: '02', 
      degree: 'Diploma in Computer Science', 
      school: 'Tunku Abdul Rahman University of Management and Technology (TAR UMT)', 
      date: 'JUN 2023 - MAY 2025', 
      details: 'Graduated with CGPA: 3.96 / 4.00. Foundation in algorithmic thinking and systems design.' 
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="page-header container">
        <h1 className="text-xs">// ACADEMIC_RECORD</h1>
        <p className="page-title">LEARNING <br /> FOUNDATION.</p>
      </section>

      <Section id="education" number="01" title="ACADEMICS">
        <div className="experience-list">
          {education.map((edu) => (
            <div key={edu.id} className="exp-item border-bottom">
              <div className="exp-meta text-xs">
                <span>TAR_UMT</span>
                <span className="exp-date">{edu.date}</span>
              </div>
              <div className="exp-main">
                <h3 className="exp-title">{edu.degree}</h3>
                <p className="exp-org text-sm">{edu.school}</p>
                <p className="exp-desc text-sm text-secondary">{edu.details}</p>
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

export default Education;
