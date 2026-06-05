import { useState } from 'react';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);

const ResetIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
  </svg>
);

function ScoreResult({ score, total, onReset }) {
  const pct = Math.round((score / total) * 100);
  const grade = pct >= 80 ? { label: 'Excellent!', color: '#059669', bg: 'rgba(5,150,105,.12)', border: '#34D399' }
    : pct >= 60 ? { label: 'Good job!', color: '#0369A1', bg: 'rgba(3,105,161,.10)', border: '#7DD3FC' }
    : { label: 'Keep studying!', color: '#D97706', bg: 'rgba(217,119,6,.10)', border: '#FCD34D' };

  return (
    <div className="quiz-result">
      <div className="quiz-result-icon" style={{ color: grade.color }}>
        <TrophyIcon />
      </div>
      <div className="quiz-result-score" style={{ color: grade.color }}>{score}/{total}</div>
      <div className="quiz-result-pct">{pct}% correct</div>
      <div className="quiz-result-label" style={{ background: grade.bg, border: `1px solid ${grade.border}`, color: grade.color }}>
        {grade.label}
      </div>
      <div className="quiz-result-dots">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="quiz-result-dot"
            title={`Q${i + 1}`}
            aria-label={`Question ${i + 1}`}
          />
        ))}
      </div>
      <button className="quiz-reset-btn" onClick={onReset}>
        <ResetIcon /> Try again
      </button>
    </div>
  );
}

export default function Quiz({ questions, title = 'Knowledge Check' }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [done, setDone] = useState(false);
  const [runKey, setRunKey] = useState(0);

  const answered = answers[current];
  const progress = answers.filter(a => a !== null).length;

  function handleSelect(i) {
    if (answered !== null) return;
    const next = [...answers];
    next[current] = i;
    setAnswers(next);
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
    } else {
      setDone(true);
    }
  }

  function handlePrev() {
    if (current > 0) setCurrent(c => c - 1);
  }

  function handleReset() {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setDone(false);
    setRunKey(k => k + 1);
  }

  const score = answers.filter((a, i) => a === questions[i].correct).length;
  const q = questions[current];

  return (
    <div className="quiz-section" key={runKey}>
      {/* Header */}
      <div className="quiz-header">
        <div className="quiz-header-left">
          <div className="quiz-header-badge">Knowledge Check</div>
          <h2 className="quiz-header-title">{title}</h2>
          <p className="quiz-header-sub">{questions.length} questions · tap an option to reveal the answer</p>
        </div>
        <div className="quiz-progress-ring" aria-label={`${progress} of ${questions.length} answered`}>
          <svg width="52" height="52" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="3"/>
            <circle
              cx="26" cy="26" r="22"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 22}`}
              strokeDashoffset={`${2 * Math.PI * 22 * (1 - progress / questions.length)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset .4s ease', transformOrigin: '26px 26px', transform: 'rotate(-90deg)' }}
            />
          </svg>
          <span className="quiz-progress-ring-text">{progress}/{questions.length}</span>
        </div>
      </div>

      {done ? (
        <ScoreResult score={score} total={questions.length} onReset={handleReset} />
      ) : (
        <>
          {/* Step dots */}
          <div className="quiz-steps" role="tablist" aria-label="Question progress">
            {questions.map((_, i) => {
              const isAnswered = answers[i] !== null;
              const isCorrect = answers[i] === questions[i].correct;
              const isCurrent = i === current;
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={isCurrent}
                  aria-label={`Question ${i + 1}${isAnswered ? (isCorrect ? ' correct' : ' incorrect') : ''}`}
                  className={`quiz-step${isCurrent ? ' current' : ''}${isAnswered ? (isCorrect ? ' correct' : ' incorrect') : ''}`}
                  onClick={() => setCurrent(i)}
                >
                  {isAnswered ? (isCorrect ? <CheckIcon /> : <XIcon />) : i + 1}
                </button>
              );
            })}
          </div>

          {/* Question card */}
          <div className="quiz-card" key={`q-${current}`}>
            <div className="quiz-question-num">Question {current + 1} of {questions.length}</div>
            <div className="quiz-question">{q.question}</div>

            <div className="quiz-options" role="group" aria-label="Answer choices">
              {q.options.map((opt, i) => {
                let cls = 'quiz-option';
                if (answered !== null) {
                  if (i === q.correct) cls += ' correct';
                  else if (i === answered) cls += ' incorrect';
                  else cls += ' dimmed';
                }
                return (
                  <button
                    key={i}
                    className={cls}
                    onClick={() => handleSelect(i)}
                    disabled={answered !== null}
                    aria-pressed={answered === i}
                  >
                    <span className="quiz-option-letter">{LETTERS[i]}</span>
                    <span className="quiz-option-text">{opt}</span>
                    {answered !== null && i === q.correct && (
                      <span className="quiz-option-icon correct-icon"><CheckIcon /></span>
                    )}
                    {answered !== null && i === answered && answered !== q.correct && (
                      <span className="quiz-option-icon incorrect-icon"><XIcon /></span>
                    )}
                  </button>
                );
              })}
            </div>

            {answered !== null && (
              <div className={`quiz-explanation${answered === q.correct ? ' correct' : ' incorrect'}`}>
                <span className="quiz-explanation-label">
                  {answered === q.correct ? '✓ Correct' : '✗ Not quite'}
                </span>
                {q.explanation}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="quiz-nav">
            <button
              className="quiz-nav-btn"
              onClick={handlePrev}
              disabled={current === 0}
              aria-label="Previous question"
            >
              ← Prev
            </button>
            <div className="quiz-nav-score">
              Score: <strong>{score}</strong>/{answers.filter(a => a !== null).length || '—'}
            </div>
            <button
              className={`quiz-nav-btn quiz-nav-btn--next${answered !== null ? ' quiz-nav-btn--ready' : ''}`}
              onClick={handleNext}
              disabled={answered === null}
              aria-label={current === questions.length - 1 ? 'Finish quiz' : 'Next question'}
            >
              {current === questions.length - 1 ? 'Finish →' : 'Next →'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
