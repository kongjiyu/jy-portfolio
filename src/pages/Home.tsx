import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import TheCore from '../components/TheCore';
import Seo from '../components/Seo';

const Home: FC = () => {
  const recentLogs = [
    { id: 'LOG_01', date: '2026.03.27', event: 'APPLE_SWIFT_CHALLENGE_WINNER', status: 'VERIFIED' },
    { id: 'LOG_02', date: '2025.06.01', event: 'START_BACHELOR_SOFTWARE_ENG', status: 'CGPA_3.96' },
    { id: 'LOG_03', date: '2025.03.15', event: 'FOUNDED_KE_TECH_INNOVATIONS', status: 'ACTIVE' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Seo
        title="Home"
        description="Portfolio of Kong Ji Yu, Apple Swift Student Challenge 2026 Winner and Software Engineering student building iOS and full-stack projects."
        path="/"
        keywords="Kong Ji Yu, software engineer, iOS developer, SwiftUI, React, TypeScript, portfolio"
      />
      <section className="hero container">
        <div className="hero-split">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-content"
          >
            <span className="text-xs greeting">// HELLO_WORLD</span>
            <h1 className="hero-title">
              KONG JI YU <br />
              SOFTWARE <br />
              ENGINEER.
            </h1>
            <div className="technical-metrics mt-24 mb-32">
              <div className="metric">
                <span className="text-xs opacity-50">CGPA</span>
                <span className="text-sm font-bold">3.96 / 4.0</span>
              </div>
              <div className="metric">
                <span className="text-xs opacity-50">AWARDS</span>
                <span className="text-sm font-bold">SWIFT_WINNER '26</span>
              </div>
              <div className="metric">
                <span className="text-xs opacity-50">SECTORS</span>
                <span className="text-sm font-bold">iOS / FULL_STACK</span>
              </div>
            </div>
            <p className="hero-subtitle text-sm">
              Apple Swift Student Challenge 2026 Winner. Software Engineering student at TAR UMT. 
              Specializing in iOS development and high-fidelity full-stack systems.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero-visual"
          >
            <TheCore />
          </motion.div>
        </div>
        
        <style>{`
          .hero { padding: 120px 24px; min-height: 80vh; display: flex; align-items: center; }
          .hero-split { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; width: 100%; }
          .greeting { display: block; margin-bottom: 24px; color: var(--text-secondary); }
          .hero-title { font-size: clamp(3rem, 8vw, 6rem); line-height: 1; margin-bottom: 32px; text-transform: uppercase; }
          .hero-subtitle { max-width: 480px; color: var(--text-secondary); }
          .technical-metrics { display: flex; gap: 40px; }
          .metric { display: flex; flex-direction: column; gap: 4px; }
          @media (max-width: 1024px) {
            .hero-split { grid-template-columns: 1fr; }
            .hero-visual { order: -1; height: 300px; }
            .technical-metrics { gap: 20px; }
          }
        `}</style>
      </section>

      <Section id="profile" number="01" title="CORE_PROFILE">
        <div className="profile-grid">
          <div className="profile-bio">
            <p className="text-sm">
              I am an aspiring iOS and full-stack developer with a passion for combining technology 
              with education and inclusivity. My recent work includes LearnBIM, an accessibility-focused 
              Swift Playground for learning Bahasa Isyarat Malaysia (BIM).
            </p>
            <div className="technical-stack text-xs mt-32">
              <span className="stack-label">PRIMARY_SKILLS:</span>
              <div className="skills-tags">
                <span>SWIFT</span><span>SWIFTUI</span><span>REACT</span><span>TYPESCRIPT</span><span>FIREBASE</span><span>CORE_ML</span><span>DOCKER</span>
              </div>
            </div>
          </div>
          <div className="recent-activity border-left pl-40">
            <h4 className="text-xs mb-24 opacity-50">// STATUS_REPORTS</h4>
            {recentLogs.map((log) => (
              <div key={log.id} className="log-item text-xs mb-16">
                <span className="log-date">{log.date}</span>
                <span className="log-event">{log.event}</span>
                <span className="log-status">{log.status}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .profile-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; }
          .mt-32 { margin-top: 32px; }
          .mt-24 { margin-top: 24px; }
          .mb-32 { margin-bottom: 32px; }
          .mb-24 { margin-bottom: 24px; }
          .mb-16 { margin-bottom: 16px; }
          .pl-40 { padding-left: 40px; }
          .stack-label { display: block; margin-bottom: 12px; color: var(--text-secondary); }
          .skills-tags { display: flex; flex-wrap: wrap; gap: 8px; }
          .skills-tags span { padding: 4px 10px; border: 1px solid var(--border-color); background: var(--bg-secondary); }
          .log-item { display: grid; grid-template-columns: 80px 1fr 100px; gap: 12px; font-family: monospace; }
          .log-date { color: var(--text-secondary); }
          .log-status { text-align: right; color: #4ade80; }
          @media (max-width: 768px) {
            .profile-grid { grid-template-columns: 1fr; }
            .recent-activity { border-left: none; border-top: 1px solid var(--border-color); padding: 40px 0 0 0; }
          }
        `}</style>
      </Section>

      <Section id="spotlight" number="02" title="FEATURED_SPOTLIGHT">
        <div className="spotlight-card border-top border-right border-bottom border-left p-40">
          <div className="spotlight-content">
            <span className="text-xs" style={{ color: '#4ade80' }}>// AWARD_WINNING_PROJECT</span>
            <h3 className="text-2xl mt-8 mb-16">LEARNBIM — ACCESSIBILITY FOR ALL</h3>
            <p className="text-sm text-secondary mb-24">
              A Swift Student Challenge winner submission focused on breaking language barriers. 
              Built with SwiftUI, Vision, and Core ML to help users learn Bahasa Isyarat Malaysia through interactive camera feedback.
            </p>
            <Link to="/projects" className="text-xs technical-link">
              EXPLORE_FULL_ARCHIVE →
            </Link>
          </div>
        </div>
        <style>{`
          .p-40 { padding: 40px; }
          .text-2xl { font-size: 1.5rem; font-weight: 600; text-transform: uppercase; }
          .mt-8 { margin-top: 8px; }
          .spotlight-card { background: var(--bg-secondary); transition: border-color 0.3s ease; }
          .spotlight-card:hover { border-color: var(--text-primary); }
          .technical-link { display: inline-block; color: var(--text-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 4px; }
        `}</style>
      </Section>

      <Section id="focus" number="03" title="TECHNICAL_FOCUS">
        <div className="services-grid">
          <div className="service-card border-right border-bottom p-32">
            <h3 className="text-sm mb-16">01 / iOS_DEVELOPMENT</h3>
            <p className="text-xs text-secondary">SwiftUI specialist focusing on Vision, Core ML, and accessibility-first design.</p>
          </div>
          <div className="service-card border-bottom p-32">
            <h3 className="text-sm mb-16">02 / FULL_STACK_SYSTEMS</h3>
            <p className="text-xs text-secondary">Building scalable web applications using React, TypeScript, and Firebase serverless architecture.</p>
          </div>
          <div className="service-card border-right p-32">
            <h3 className="text-sm mb-16">03 / CRM_CONSULTATION</h3>
            <p className="text-xs text-secondary">Expertise in CRM workflows, data migration, and cloud-integrated solutions.</p>
          </div>
          <div className="service-card p-32">
            <h3 className="text-sm mb-16">04 / DIGITAL_SOLUTIONS</h3>
            <p className="text-xs text-secondary">Delivering optimized landing pages and custom web systems through K&E Tech Innovations.</p>
          </div>
        </div>
        <style>{`
          .services-grid { display: grid; grid-template-columns: 1fr 1fr; border-left: 1px solid var(--border-color); border-top: 1px solid var(--border-color); }
          .p-32 { padding: 32px; }
          @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr; } }
        `}</style>
      </Section>
    </motion.div>
  );
};

export default Home;
