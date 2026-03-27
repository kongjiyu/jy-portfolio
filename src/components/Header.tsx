import { useState, useEffect, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const Header: FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header border-bottom">
      <div className="container header-content">
        <div className="logo-group">
          <Terminal size={18} />
          <NavLink to="/" className="logo-text">KONGJY.SYS</NavLink>
        </div>
        
        <nav className="main-nav">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>HOME</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>PROJECTS</NavLink>
          <NavLink to="/experience" className={({isActive}) => isActive ? 'active' : ''}>EXPERIENCE</NavLink>
          <NavLink to="/hackathons" className={({isActive}) => isActive ? 'active' : ''}>HACKATHONS</NavLink>
          <NavLink to="/education" className={({isActive}) => isActive ? 'active' : ''}>EDUCATION</NavLink>
        </nav>

        <div className="header-meta text-xs">
          <span className="location">GMT+8 / MALAYSIA</span>
          <span className="time">{time}</span>
        </div>
      </div>

      <style>{`
        .header {
          height: 64px;
          display: flex;
          align-items: center;
          background-color: var(--bg-color);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          font-family: monospace;
          letter-spacing: 0.1em;
        }
        .main-nav {
          display: flex;
          gap: 24px;
        }
        .main-nav a {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .main-nav a.active {
          color: var(--text-primary);
        }
        .header-meta {
          display: flex;
          gap: 24px;
          color: var(--text-secondary);
        }
        @media (max-width: 1024px) {
          .header-meta, .main-nav { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
