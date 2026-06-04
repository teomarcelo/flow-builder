import { NavLink, useLocation } from 'react-router-dom';
import { lessons } from '../data/curriculum';

const lessonColors = {
  0: '#0369A1',
  1: '#7C3AED',
  2: '#0F766E',
  3: '#D97706',
};

const lessonAnchors = {
  0: ['what-is-flow', 'flow-types', 'flow-builder-ui', 'translating-requirements'],
  1: ['variables', 'data-types', 'record-collection', 'algorithms', 'control-structures', 'best-practices'],
  2: ['use-case-21', 'elements-resources', 'field-visibility', 'dml-data', 'faults', 'surfacing'],
  3: ['save-order', 'before-after-save', 'record-prior', 'flow-validation', 'formula-fields', 'subflows', 'scheduled-paths'],
};

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="app-shell">
      <nav className="top-nav">
        <NavLink to="/" className="top-nav-logo">
          <div className="top-nav-logo-icon">⛰</div>
          ADX301
          <span className="top-nav-logo-badge">Flow Builder</span>
        </NavLink>
        <div className="top-nav-links">
          <NavLink to="/" className={({ isActive }) => 'top-nav-link' + (isActive ? ' active' : '')}>
            Overview
          </NavLink>
          {lessons.map(l => (
            <NavLink
              key={l.id}
              to={`/lesson/${l.number}`}
              className={({ isActive }) => 'top-nav-link' + (isActive ? ' active' : '')}
            >
              {l.emoji} L{l.number}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="main-content">
        <aside className="sidebar">
          {lessons.map(l => {
            const isActive = location.pathname === `/lesson/${l.number}`;
            const anchors = lessonAnchors[l.number] || [];
            const color = lessonColors[l.number];
            return (
              <div key={l.id} className="sidebar-section">
                <NavLink
                  to={`/lesson/${l.number}`}
                  className={`sidebar-lesson-btn${isActive ? ' active' : ''}`}
                >
                  <span
                    className="sidebar-lesson-dot"
                    style={{ background: color }}
                  />
                  {l.emoji} L{l.number}: {l.title}
                </NavLink>
                {isActive && l.topics.map((t, i) => (
                  <a
                    key={t.id}
                    href={`#${anchors[i] || t.id}`}
                    className="sidebar-topic-link"
                  >
                    <span className="sidebar-dot" />
                    {t.title}
                  </a>
                ))}
              </div>
            );
          })}
        </aside>

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}
