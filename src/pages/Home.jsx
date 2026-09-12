import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { lessons } from '../data/curriculum';

const lessonColors = ['#0176D3', '#7C3AED', '#0F766E', '#D97706'];

function AnimatedNumber({ value, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const reduceMotion = useReducedMotion();
  const target = parseInt(value, 10);
  const [display, setDisplay] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    const duration = 800;
    const steps = 24;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      setDisplay(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value, reduceMotion, target]);

  return (
    <span ref={ref} className="highlight-box-val" style={{ '--stat-color': color }}>
      {isInView ? display : reduceMotion ? target : 0}
    </span>
  );
}

function LessonCard({ lesson, index, isFirst }) {
  const color = lessonColors[index];

  return (
    <Link
      to={`/lesson/${lesson.number}`}
      className={`lesson-card${isFirst ? ' lesson-card--featured' : ''}`}
      style={{ '--card-accent': color, '--card-accent-border': `${color}55` }}
    >
      <span className="lesson-card-accent" aria-hidden="true" />
      <span className="lesson-card-num">Lesson {lesson.number}</span>
      <h3>{lesson.title}</h3>
      <p className="lesson-card-subtitle">{lesson.subtitle}</p>
      <div className="lesson-card-footer">
        <div className="lesson-card-topics">
          <span className="lesson-card-topics-bar" aria-hidden="true">
            <span
              className="lesson-card-topics-bar-fill"
              style={{ width: `${Math.min((lesson.topics.length / 8) * 100, 100)}%`, background: color }}
            />
          </span>
          {lesson.topics.length} topics
        </div>
      </div>
    </Link>
  );
}

function FlowCanvas() {
  return (
    <svg className="flow-canvas" viewBox="0 0 420 320" role="img" aria-labelledby="flow-canvas-title">
      <title id="flow-canvas-title">A simple Flow: Start, Get Records, Decision, Update Records</title>
      <line className="flow-canvas-line" x1="90" y1="70" x2="210" y2="70" />
      <line className="flow-canvas-line" x1="250" y1="70" x2="330" y2="130" />
      <line className="flow-canvas-line" x1="330" y1="190" x2="210" y2="250" />
      <rect className="flow-canvas-node flow-canvas-node--start" x="24" y="46" width="88" height="48" rx="24" />
      <text className="flow-canvas-label" x="68" y="74" textAnchor="middle">Start</text>
      <rect className="flow-canvas-node" x="178" y="46" width="112" height="48" rx="8" />
      <text className="flow-canvas-label" x="234" y="74" textAnchor="middle">Get Records</text>
      <polygon className="flow-canvas-node flow-canvas-node--decision" points="330,130 368,160 330,190 292,160" />
      <text className="flow-canvas-label" x="330" y="164" textAnchor="middle">Decision</text>
      <rect className="flow-canvas-node flow-canvas-node--end" x="158" y="226" width="136" height="48" rx="8" />
      <text className="flow-canvas-label" x="226" y="254" textAnchor="middle">Update Records</text>
    </svg>
  );
}

const heroContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function Home() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="home-hero">
        <motion.div
          className="home-hero-content"
          variants={heroContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.div className="home-eyebrow" variants={heroChild}>
            <span className="home-eyebrow-dot" aria-hidden="true" />
            ADX301 · Dreamforce 2026
          </motion.div>
          <motion.h1 className="home-hero-title" variants={heroChild}>
            Admin Flow Builder<br />Study Guide
          </motion.h1>
          <motion.p className="home-hero-desc" variants={heroChild}>
            Deep technical explanations, annotated exercise walkthroughs, and exam-trap callouts — built from the official Trailblazer Bootcamp curriculum.
          </motion.p>
          <motion.div className="home-hero-cta" variants={heroChild}>
            <Link to="/lesson/0" className="home-cta-primary">
              Start Lesson 0
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/quick-ref" className="home-cta-secondary">Open Quick Reference</Link>
          </motion.div>
        </motion.div>
        <div className="home-hero-visual">
          <FlowCanvas />
        </div>
      </section>

      <section aria-labelledby="lessons-heading">
        <h2 id="lessons-heading" className="visually-hidden">Lessons</h2>
        <div
          ref={cardsRef}
          className="lesson-cards"
          style={{ opacity: reduceMotion || cardsInView ? 1 : 0 }}
        >
          {lessons.map((l, i) => (
            <LessonCard key={l.id} lesson={l} index={i} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <section className="guide-panel" aria-labelledby="guide-heading">
        <div className="guide-panel-head">
          <div className="guide-panel-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <div>
            <h2 id="guide-heading">How to Use This Guide</h2>
            <div className="guide-panel-kicker">Instructor reference · ADX301</div>
          </div>
        </div>
        <div className="guide-panel-cols">
          <div>
            <div className="guide-panel-col-label">For your preparation</div>
            <ul className="guide-panel-list">
              <li>Read each lesson as a student first — flag anything you would hesitate on live</li>
              <li>Use Exam Trap callouts to prep for common certification gotchas</li>
              <li>Work through the step-by-step walkthroughs in your practice org</li>
              <li>Every analogy here mirrors the official slide deck</li>
            </ul>
          </div>
          <div>
            <div className="guide-panel-col-label guide-panel-col-label--teal">For your students</div>
            <ul className="guide-panel-list guide-panel-list--teal">
              <li>Share the URL after each lesson as a take-home reference</li>
              <li>Use the knowledge check for end-of-lesson review</li>
              <li>Deep Dive callouts are for fast finishers who want more</li>
              <li>Content aligns with the official Activity Guide exercises</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        className="highlight-row"
        aria-label="Guide contents"
      >
        {[
          { val: '4', label: 'Lessons', color: 'var(--l0)' },
          { val: '24', label: 'Topics', color: 'var(--l1)' },
          { val: '60', label: 'Exercises', color: 'var(--l2)', suffix: '+' },
          { val: '3', label: 'Days at Dreamforce', color: 'var(--l3)' },
        ].map((item) => (
          <div key={item.label} className="highlight-box">
            <div className="highlight-box-val-row">
              {statsInView && <AnimatedNumber value={item.val} color={item.color} />}
              {item.suffix && (
                <span className="highlight-box-val highlight-box-suffix" style={{ '--stat-color': item.color }}>{item.suffix}</span>
              )}
            </div>
            <span className="highlight-box-label">{item.label}</span>
          </div>
        ))}
      </section>

      <section className="quick-ref-banner-wrap">
        <Link to="/quick-ref" className="quick-ref-banner">
          <div className="quick-ref-banner-inner">
            <div className="guide-panel-icon guide-panel-icon--teal" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div className="quick-ref-banner-copy">
              <div className="quick-ref-banner-title">Quick Reference Sheet</div>
              <div className="quick-ref-banner-desc">Elements, naming, DML, save order, and best practices</div>
            </div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </Link>
      </section>
    </>
  );
}
