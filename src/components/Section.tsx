import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  borderTop?: boolean;
}

const Section: FC<SectionProps> = ({ id, number, title, children, borderTop = true }) => {
  return (
    <section id={id} className={`section ${borderTop ? 'border-top' : ''}`}>
      <div className="container section-container">
        <div className="section-header border-right">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-number text-xs"
          >
            {number}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="section-title text-xs"
          >
            {title}
          </motion.h2>
        </div>
        <div className="section-content">
          {children}
        </div>
      </div>

      <style>{`
        .section-container {
          display: flex;
          min-height: 200px;
        }
        .section-header {
          width: 180px;
          padding: 40px 0;
          flex-shrink: 0;
        }
        .section-number {
          margin-bottom: 8px;
          color: var(--text-secondary);
        }
        .section-title {
          color: var(--text-primary);
          font-weight: 500;
        }
        .section-content {
          flex-grow: 1;
          padding: 40px 0 40px 40px;
        }
        @media (max-width: 768px) {
          .section-container { flex-direction: column; }
          .section-header { 
            width: 100%; 
            border-right: none; 
            border-bottom: 1px solid var(--border-color);
            padding: 24px 0;
          }
          .section-content { padding: 24px 0; }
        }
      `}</style>
    </section>
  );
};

export default Section;
