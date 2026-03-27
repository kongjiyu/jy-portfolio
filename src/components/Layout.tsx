import type { FC, ReactNode } from 'react';
import Header from './Header';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <CustomCursor />
      <div className="grid-overlay" />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer border-top text-xs">
        <div className="container footer-content">
          <p>© 2026 KONG JI YU // DEVELOPED_WITH_PRECISION</p>
          <div className="footer-links">
            <a href="https://github.com/kongjiyu" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="https://www.linkedin.com/in/ji-yu-kong-249516279/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="mailto:kongjiyu0198@gmail.com">EMAIL</a>
          </div>
        </div>
      </footer>

      <style>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-content {
          flex-grow: 1;
        }
        .footer {
          padding: 40px 0;
          background-color: var(--bg-color);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .footer-content { flex-direction: column; gap: 24px; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
