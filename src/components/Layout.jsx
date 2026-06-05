import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { lessons } from '../data/curriculum';

const lessonColors = { 0: '#0176D3', 1: '#7C3AED', 2: '#0F766E', 3: '#D97706' };
const lessonAnchors = {
  0: ['what-is-flow', 'flow-types', 'flow-builder-ui', 'translating-requirements'],
  1: ['variables', 'data-types', 'record-collection', 'algorithms', 'control-structures', 'best-practices'],
  2: ['use-case-21', 'elements-resources', 'field-visibility', 'dml-data', 'faults', 'surfacing'],
  3: ['save-order', 'before-after-save', 'record-prior', 'flow-validation', 'formula-fields', 'subflows', 'scheduled-paths'],
};

const IconFlow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/>
    <path d="M7 6h10M12 8v8"/>
  </svg>
);

const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const IconX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const IconHome = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <div className="app-shell">
      {/* ── Top Nav ── */}
      <nav className={`top-nav${scrolled ? ' top-nav--scrolled' : ''}`}>
        <NavLink to="/" className="top-nav-logo" aria-label="ADX301 Home">
          <div className="top-nav-logo-icon" aria-hidden="true"><IconFlow /></div>
          <span className="top-nav-logo-text">ADX301</span>
          <span className="top-nav-logo-badge">Flow Builder</span>
        </NavLink>

        {/* Desktop nav links */}
        <div className="top-nav-links" role="navigation" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => 'top-nav-link' + (isActive ? ' active' : '')}>
            <IconHome />
            Overview
          </NavLink>
          {lessons.map(l => (
            <NavLink
              key={l.id}
              to={`/lesson/${l.number}`}
              className={({ isActive }) => 'top-nav-link' + (isActive ? ' active' : '')}
            >
              L{l.number}: {l.title.split(' ').slice(0, 2).join(' ')}
            </NavLink>
          ))}
          <NavLink to="/quick-ref" className={({ isActive }) => 'top-nav-link' + (isActive ? ' active' : '')}>
            Quick Ref
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <IconX /> : <IconMenu />}
        </button>
      </nav>

      {/* ── Mobile Drawer Overlay ── */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}

      {/* ── Mobile Drawer ── */}
      <div className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`} role="navigation" aria-label="Mobile navigation">
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-logo">
            <div className="top-nav-logo-icon" aria-hidden="true"><IconFlow /></div>
            <span>ADX301 Flow Builder</span>
          </div>
        </div>
        <div className="mobile-drawer-links">
          <NavLink to="/" className={({ isActive }) => 'mobile-nav-link' + (isActive ? ' active' : '')}>
            <IconHome /> Overview
          </NavLink>
          {lessons.map(l => (
            <div key={l.id} className="mobile-nav-group">
              <NavLink
                to={`/lesson/${l.number}`}
                className={({ isActive }) => 'mobile-nav-link' + (isActive ? ' active' : '')}
                style={({ isActive }) => isActive ? { borderLeftColor: lessonColors[l.number] } : {}}
              >
                <span className="mobile-nav-dot" style={{ background: lessonColors[l.number] }} />
                <span>L{l.number}: {l.title}</span>
                <span className="mobile-nav-badge">{l.topics.length}</span>
              </NavLink>
            </div>
          ))}
          <NavLink to="/quick-ref" className={({ isActive }) => 'mobile-nav-link' + (isActive ? ' active' : '')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Quick Reference
          </NavLink>
        </div>
      </div>

      <div className="main-content">
        {/* ── Desktop Sidebar ── */}
        <aside className="sidebar" aria-label="Lesson navigation">
          <div className="sidebar-home">
            <NavLink to="/" className={({ isActive }) => `sidebar-home-link${isActive ? ' active' : ''}`}>
              <IconHome />
              Overview
            </NavLink>
          </div>
          <div className="sidebar-divider" />
          {lessons.map(l => {
            const isActive = location.pathname === `/lesson/${l.number}`;
            const anchors = lessonAnchors[l.number] || [];
            const color = lessonColors[l.number];
            return (
              <div key={l.id} className="sidebar-section">
                <NavLink
                  to={`/lesson/${l.number}`}
                  className={`sidebar-lesson-btn${isActive ? ' active' : ''}`}
                  style={isActive ? { borderLeftColor: color, color: '#F8FAFC' } : {}}
                >
                  <span className="sidebar-lesson-dot" style={{ background: color }} />
                  <span className="sidebar-lesson-label">
                    <span className="sidebar-lesson-num">L{l.number}</span>
                    {l.title}
                  </span>
                  {isActive && <IconChevron />}
                </NavLink>
                {isActive && (
                  <div className="sidebar-topics">
                    {l.topics.map((t, i) => (
                      <a
                        key={t.id}
                        href={`#${anchors[i] || t.id}`}
                        className="sidebar-topic-link"
                      >
                        <span className="sidebar-topic-num">{i + 1}</span>
                        {t.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="sidebar-divider" />
          <NavLink to="/quick-ref" className={({ isActive }) => `sidebar-lesson-btn${isActive ? ' active' : ''}`}>
            <span className="sidebar-lesson-dot" style={{ background: '#64748B' }} />
            <span className="sidebar-lesson-label">
              <span className="sidebar-lesson-num">✦</span>
              Quick Reference
            </span>
          </NavLink>
        </aside>

        <main className="page-content" id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
