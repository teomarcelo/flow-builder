import { Link } from 'react-router-dom';
import { lessons } from '../data/curriculum';

const lessonColors = ['#0176D3', '#7C3AED', '#0F766E', '#D97706'];

const LessonIcons = [
  // L0 — Course Overview
  <svg key="l0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>,
  // L1 — Variables
  <svg key="l1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/>
    <line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="14" x2="22" y2="14"/>
    <line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="14" x2="4" y2="14"/>
  </svg>,
  // L2 — Screen Flows
  <svg key="l2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>,
  // L3 — Record Flows
  <svg key="l3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
];

export default function Home() {
  return (
    <>
      <div className="home-hero fade-up">
        <div className="home-hero-badge">ADX301 · Trailblazer Bootcamp · Dreamforce 2026</div>
        <h1>Admin Flow Builder<br />Study Guide</h1>
        <p>Your complete visual reference for ADX301 — the most in-depth training material for Salesforce Flow Builder. Deep technical explanations, visual diagrams, annotated exercise walkthroughs, and exam trap callouts. Built from the official bootcamp curriculum.</p>
      </div>

      <div className="lesson-cards">
        {lessons.map((l, i) => (
          <Link
            key={l.id}
            to={`/lesson/${l.number}`}
            className="lesson-card fade-up"
            style={{ animationDelay: `${i * 0.07 + 0.05}s` }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: lessonColors[i], borderRadius: '16px 16px 0 0'
            }} />
            <div className="lesson-card-num">Lesson {l.number}</div>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: lessonColors[i] + '14',
              border: `1px solid ${lessonColors[i]}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: lessonColors[i], marginBottom: 12
            }}>
              {LessonIcons[i]}
            </div>
            <h3>{l.title}</h3>
            <p>{l.subtitle}</p>
            <div className="lesson-card-topics">
              {l.topics.length} topics
            </div>
          </Link>
        ))}
      </div>

      <div className="concept-card fade-up fade-up-3">
        <div className="concept-card-header">
          <div className="concept-card-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <div>
            <h3>How to Use This Guide</h3>
            <div className="concept-card-subtitle">Instructor Reference · ADX301</div>
          </div>
        </div>
        <div className="two-col">
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#0369A1', marginBottom: 8 }}>For your preparation</div>
            <ul>
              <li>Read each lesson as a student first — flag anything you'd hesitate on live</li>
              <li>Use ExamTrap callouts to prep for common certification gotchas</li>
              <li>Work through the StepList walkthroughs in your practice org</li>
              <li>Every analogy here mirrors the official slide deck exactly</li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#0F766E', marginBottom: 8 }}>For your students</div>
            <ul>
              <li>Share the URL after each lesson as a take-home reference</li>
              <li>Use the quiz section for end-of-lesson review activities</li>
              <li>Deep Dive callouts are for fast finishers who want more</li>
              <li>Content aligns 1:1 with the official Activity Guide exercises</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="highlight-row fade-up fade-up-4">
        {[
          { val: '4', label: 'Lessons', color: '#0176D3' },
          { val: '24', label: 'Topics', color: '#7C3AED' },
          { val: '21', label: 'Quiz Questions', color: '#0F766E' },
          { val: '3', label: 'Days at Dreamforce', color: '#D97706' },
        ].map((item) => (
          <div className="highlight-box" key={item.label}>
            <div className="highlight-box-val" style={{ color: item.color }}>{item.val}</div>
            <div className="highlight-box-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="fade-up fade-up-5" style={{ marginBottom: 32 }}>
        <Link to="/quick-ref" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: '#0D1421', color: '#F8FAFC', borderRadius: 16,
          padding: '20px 28px', textDecoration: 'none', border: '1px solid rgba(255,255,255,.07)',
          boxShadow: '0 4px 20px rgba(0,0,0,.15)',
          transition: 'all .2s ease',
          gap: 16,
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#1E293B'}
        onMouseLeave={e => e.currentTarget.style.background = '#0D1421'}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, background: 'rgba(20,184,166,.15)', border: '1px solid rgba(20,184,166,.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#14B8A6', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.12em', color: '#14B8A6', marginBottom: 3 }}>Quick Reference</div>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '1.05rem' }}>Complete Reference Sheet</div>
              <div style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.45)', marginTop: 2 }}>All elements, naming conventions, DML operations, Save Order of Execution, and best practices</div>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </>
  );
}
