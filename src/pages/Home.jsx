import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { lessons } from '../data/curriculum';

const lessonColors = ['#0176D3', '#7C3AED', '#0F766E', '#D97706'];

// Animated counter component
function AnimatedNumber({ value, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const target = parseInt(value, 10);
    const duration = 1200;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setDisplay(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '2.4rem',
      fontWeight: 700,
      color,
      lineHeight: 1,
    }}>
      {isInView ? display : 0}
    </span>
  );
}

// Lesson card with mouse-tracking spotlight
function LessonCard({ lesson, index, isFirst }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const color = lessonColors[index];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 16,
        delay: index * 0.12,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      style={{
        gridColumn: isFirst ? '1 / -1' : 'auto',
        position: 'relative',
      }}
    >
      <Link
        to={`/lesson/${lesson.number}`}
        style={{
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 16,
          padding: isFirst ? '2.5rem 3rem' : '2rem 2rem',
          background: `linear-gradient(135deg, ${color}08 0%, ${color}03 100%)`,
          borderLeft: `4px solid ${color}`,
          border: `1px solid ${color}12`,
          borderLeftWidth: 4,
          borderLeftColor: color,
          textDecoration: 'none',
          color: 'inherit',
          transition: 'box-shadow 0.3s ease, background 0.3s ease',
          boxShadow: isHovered
            ? `0 20px 60px -12px ${color}20, 0 0 0 1px ${color}15`
            : '0 1px 3px rgba(0,0,0,0.04)',
          minHeight: isFirst ? 180 : 'auto',
        }}
      >
        {/* Mouse-tracking spotlight */}
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${color}12, transparent 60%)`,
              zIndex: 1,
            }}
          />
        )}

        {/* Watermark number */}
        <div style={{
          position: 'absolute',
          bottom: isFirst ? -10 : -15,
          right: isFirst ? 30 : 15,
          fontFamily: 'Sora, sans-serif',
          fontSize: isFirst ? '10rem' : '8rem',
          fontWeight: 800,
          color: color,
          opacity: isHovered ? 0.07 : 0.04,
          lineHeight: 1,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 0,
          userSelect: 'none',
        }}>
          {lesson.number}
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: color,
            marginBottom: 10,
          }}>
            Lesson {lesson.number}
          </div>

          <h3 style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            fontSize: isFirst ? '1.5rem' : '1.2rem',
            color: '#0f172a',
            margin: '0 0 6px 0',
            lineHeight: 1.3,
          }}>
            {lesson.title}
          </h3>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            color: '#64748b',
            margin: '0 0 16px 0',
            lineHeight: 1.5,
            maxWidth: isFirst ? 500 : 'none',
          }}>
            {lesson.subtitle}
          </p>

          {/* Topic count bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 60,
              height: 4,
              background: `${color}15`,
              borderRadius: 2,
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${Math.min((lesson.topics.length / 8) * 100, 100)}%`,
                height: '100%',
                background: color,
                borderRadius: 2,
                transition: 'width 0.5s ease',
              }} />
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              color: '#94a3b8',
              fontWeight: 500,
            }}>
              {lesson.topics.length} topics
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Hero stagger animation variants
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

// Card grid stagger variants
const cardGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Geometric flow composition for hero
function FlowGeometric() {
  const shapes = [
    { w: 120, h: 80, color: lessonColors[0], rotate: -8, x: 20, y: 30, delay: 0 },
    { w: 100, h: 100, color: lessonColors[1], rotate: 12, x: 80, y: 10, delay: 0.2 },
    { w: 140, h: 60, color: lessonColors[2], rotate: -4, x: 50, y: 90, delay: 0.4 },
    { w: 80, h: 120, color: lessonColors[3], rotate: 6, x: 130, y: 50, delay: 0.6 },
    { w: 90, h: 90, color: lessonColors[0], rotate: 20, x: 160, y: 120, delay: 0.3 },
    { w: 110, h: 50, color: lessonColors[2], rotate: -15, x: 10, y: 140, delay: 0.5 },
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: 320,
    }}>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, rotate: s.rotate - 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: s.rotate,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: s.delay + 0.3 },
            scale: { duration: 0.6, delay: s.delay + 0.3, type: 'spring' },
            rotate: { duration: 0.6, delay: s.delay + 0.3 },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: s.delay },
          }}
          style={{
            position: 'absolute',
            width: s.w,
            height: s.h,
            left: s.x,
            top: s.y,
            borderRadius: 20,
            background: `linear-gradient(135deg, ${s.color}18, ${s.color}08)`,
            border: `1.5px solid ${s.color}25`,
            backdropFilter: 'blur(1px)',
          }}
        />
      ))}
      {/* Connection lines (decorative) */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.15 }}>
        <motion.path
          d="M80 70 Q150 40 200 90 T280 130"
          stroke={lessonColors[0]}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
        />
        <motion.path
          d="M60 150 Q120 120 180 160 T300 140"
          stroke={lessonColors[2]}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.3, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
      {/* ─── HERO SECTION ─── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'center',
        minHeight: '70vh',
        paddingTop: '4rem',
        paddingBottom: '3rem',
      }}>
        {/* Left — text content */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 560 }}
        >
          {/* Eyebrow pill */}
          <motion.div variants={heroChild} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            borderRadius: 100,
            background: '#f0fdf9',
            border: '1px solid #ccfbf1',
            marginBottom: 24,
          }}>
            <span style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#14b8a6',
              display: 'inline-block',
              animation: 'pulse-dot 2s infinite',
            }} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: '#0f766e',
              letterSpacing: '0.02em',
            }}>
              ADX301 · Dreamforce 2026
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={heroChild} style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            lineHeight: 1.1,
            margin: '0 0 20px 0',
            background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 40%, #475569 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Admin Flow Builder<br />Study Guide
          </motion.h1>

          {/* Description */}
          <motion.p variants={heroChild} style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: '#475569',
            margin: '0 0 32px 0',
            maxWidth: 460,
          }}>
            Deep technical explanations, annotated exercise walkthroughs, and exam-trap callouts — built from the official Trailblazer Bootcamp curriculum.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={heroChild} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/lesson/0" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 12,
                background: 'linear-gradient(135deg, #0176D3, #0b4f9e)',
                color: '#fff',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px -4px rgba(1,118,211,0.4)',
                transition: 'box-shadow 0.2s ease',
              }}>
                Start Learning
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/quick-ref" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 12,
                background: 'transparent',
                color: '#334155',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '0.92rem',
                textDecoration: 'none',
                border: '1.5px solid #e2e8f0',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}>
                Quick Reference
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right — geometric composition */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <FlowGeometric />
        </motion.div>
      </section>

      {/* ─── LESSON CARDS ─── */}
      <section style={{ marginBottom: '4rem' }}>
        <motion.div
          ref={cardsRef}
          variants={cardGridVariants}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
          }}
        >
          {lessons.map((l, i) => (
            <LessonCard key={l.id} lesson={l} index={i} isFirst={i === 0} />
          ))}
        </motion.div>
      </section>

      {/* ─── CONCEPT CARD: How to Use This Guide ─── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.1 }}
        style={{
          marginBottom: '4rem',
          padding: '2.5rem 3rem',
          background: '#f8fafc',
          borderRadius: 16,
          borderLeft: '4px solid #0176D3',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: '#eff6ff',
            border: '1px solid #dbeafe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0176D3',
            flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <div>
            <h3 style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              fontSize: '1.15rem',
              color: '#0f172a',
              margin: 0,
            }}>How to Use This Guide</h3>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              color: '#94a3b8',
              marginTop: 2,
            }}>Instructor Reference · ADX301</div>
          </div>
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
        }}>
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#0176D3',
              marginBottom: 12,
            }}>For your preparation</div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
              {[
                'Read each lesson as a student first — flag anything you\'d hesitate on live',
                'Use ExamTrap callouts to prep for common certification gotchas',
                'Work through the StepList walkthroughs in your practice org',
                'Every analogy here mirrors the official slide deck exactly',
              ].map((item, i) => (
                <li key={i} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  color: '#475569',
                  lineHeight: 1.5,
                  paddingLeft: 16,
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: 7,
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#0176D3',
                    opacity: 0.5,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#0F766E',
              marginBottom: 12,
            }}>For your students</div>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
              {[
                'Share the URL after each lesson as a take-home reference',
                'Use the quiz section for end-of-lesson review activities',
                'Deep Dive callouts are for fast finishers who want more',
                'Content aligns 1:1 with the official Activity Guide exercises',
              ].map((item, i) => (
                <li key={i} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  color: '#475569',
                  lineHeight: 1.5,
                  paddingLeft: 16,
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: 7,
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#0F766E',
                    opacity: 0.5,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ─── STATS ROW ─── */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ type: 'spring', stiffness: 70, damping: 18, delay: 0.15 }}
        style={{
          marginBottom: '4rem',
          padding: '2rem 0',
          background: '#fafbfc',
          borderRadius: 16,
          border: '1px solid #f1f5f9',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          position: 'relative',
        }}
      >
        {[
          { val: '4', label: 'Lessons', color: '#0176D3', suffix: '' },
          { val: '24', label: 'Topics', color: '#7C3AED', suffix: '' },
          { val: '60', label: 'Exercises', color: '#0F766E', suffix: '+' },
          { val: '3', label: 'Days at Dreamforce', color: '#D97706', suffix: '' },
        ].map((item, i) => (
          <div key={item.label} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            padding: '0.75rem 1rem',
            borderRight: i < 3 ? '1px solid #f1f5f9' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              {statsInView && <AnimatedNumber value={item.val} color={item.color} />}
              {item.suffix && (
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: item.color,
                  marginLeft: 2,
                }}>
                  {item.suffix}
                </span>
              )}
            </div>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 500,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </motion.section>

      {/* ─── QUICK REFERENCE BANNER ─── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
        style={{ marginBottom: '3rem' }}
      >
        <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
          <Link to="/quick-ref" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 2rem',
            borderRadius: 14,
            background: '#f0fdfa',
            border: '1px solid #ccfbf1',
            borderLeft: '4px solid #14b8a6',
            textDecoration: 'none',
            transition: 'box-shadow 0.2s ease',
            boxShadow: '0 2px 8px -2px rgba(20,184,166,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 42,
                height: 42,
                background: 'rgba(20,184,166,0.12)',
                border: '1px solid rgba(20,184,166,0.2)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0d9488',
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <div>
                <div style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#0f172a',
                  marginBottom: 3,
                }}>Complete Quick Reference Sheet</div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.84rem',
                  color: '#64748b',
                  lineHeight: 1.4,
                }}>All elements, naming conventions, DML operations, Save Order of Execution, and best practices</div>
              </div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </Link>
        </motion.div>
      </motion.section>

      {/* Keyframe animation for pulsing dot */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
