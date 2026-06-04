import { Link } from 'react-router-dom';
import { lessons } from '../data/curriculum';

const lessonColors = ['#0369A1', '#7C3AED', '#0F766E', '#D97706'];
const lessonBgs   = ['#EFF6FF', '#F5F3FF', '#F0FDFA', '#FFFBEB'];

export default function Home() {
  return (
    <>
      <div className="home-hero fade-up">
        <div className="home-hero-badge">🏕️ Trailblazer Bootcamp · Dreamforce 2026</div>
        <h1>Admin Flow Builder<br />Study Guide</h1>
        <p>Your complete visual reference for ADX301 — built from the official bootcamp curriculum. Every concept, analogy, and quiz question from the slides, in one place.</p>
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
            <span className="lesson-card-emoji">{l.emoji}</span>
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
          <div className="concept-card-icon">🎓</div>
          <div>
            <h3>How to Use This Guide</h3>
            <div className="concept-card-subtitle">Instructor Reference · ADX301</div>
          </div>
        </div>
        <div className="two-col">
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#0369A1', marginBottom: 8 }}>For your ramp-up</div>
            <ul>
              <li>Read each lesson top-to-bottom as a student first</li>
              <li>Flag sections where you'd hesitate on a live question</li>
              <li>Use quizzes to self-test — not just review the slides</li>
              <li>Every analogy here mirrors the official slide deck</li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#0F766E', marginBottom: 8 }}>For your students</div>
            <ul>
              <li>Share the URL after each lesson as a take-home reference</li>
              <li>Use quiz sections for end-of-lesson review activities</li>
              <li>Advanced checks at bottom of L2/L3 for fast finishers</li>
              <li>All content aligns 1:1 with the official Activity Guide</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="highlight-row fade-up fade-up-4">
        {[
          { val: '4', label: 'Lessons', color: '#0369A1' },
          { val: '22', label: 'Topics', color: '#7C3AED' },
          { val: '17', label: 'Quiz Questions', color: '#0F766E' },
          { val: '3', label: 'Days at Dreamforce', color: '#D97706' },
        ].map((item) => (
          <div className="highlight-box" key={item.label}>
            <div className="highlight-box-val" style={{ color: item.color }}>{item.val}</div>
            <div className="highlight-box-label">{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
