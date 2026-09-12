import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);

const ResetIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
  </svg>
);

function ScoreResult({ score, total, answers, questions, onReset }) {
  const pct = Math.round((score / total) * 100);
  const grade = pct >= 80
    ? { label: 'Excellent', tone: 'ok' }
    : pct >= 60
      ? { label: 'Good job', tone: 'blue' }
      : { label: 'Keep studying', tone: 'amber' };

  return (
    <div className={`quiz-result quiz-result--${grade.tone}`}>
      <div className="quiz-result-icon">
        <TrophyIcon />
      </div>
      <div className="quiz-result-score">{score}/{total}</div>
      <div className="quiz-result-pct">{pct}% correct</div>
      <div className="quiz-result-label">{grade.label}</div>
      <div className="quiz-result-dots" aria-label="Results by question">
        {Array.from({ length: total }).map((_, i) => {
          const correct = answers[i] === questions[i].correct;
          return (
            <div
              key={i}
              className={`quiz-result-dot${correct ? ' correct' : ' incorrect'}`}
              title={`Question ${i + 1}: ${correct ? 'correct' : 'incorrect'}`}
              aria-label={`Question ${i + 1}: ${correct ? 'correct' : 'incorrect'}`}
            />
          );
        })}
      </div>
      <button type="button" className="quiz-reset-btn" onClick={onReset}>
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
  const [direction, setDirection] = useState(1);

  const answered = answers[current];
  const score = answers.filter((a, i) => a === questions[i].correct).length;
  const q = questions[current];

  function handleSelect(i) {
    if (answered !== null) return;
    const next = [...answers];
    next[current] = i;
    setAnswers(next);
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setDirection(1);
      setCurrent(c => c + 1);
    } else {
      setDone(true);
    }
  }

  function handlePrev() {
    if (current > 0) {
      setDirection(-1);
      setCurrent(c => c - 1);
    }
  }

  function handleReset() {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setDone(false);
    setRunKey(k => k + 1);
    setDirection(1);
  }

  const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? 24 : -24, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -24 : 24, opacity: 0 }),
  };

  return (
    <section className="quiz-section" key={runKey} aria-labelledby="quiz-title">
      <header className="quiz-header">
        <h2 id="quiz-title" className="quiz-header-title">{title}</h2>
        <p className="quiz-header-sub">{questions.length} questions · choose an option to reveal the answer</p>
      </header>

      {done ? (
        <ScoreResult score={score} total={questions.length} answers={answers} questions={questions} onReset={handleReset} />
      ) : (
        <>
          <div className="quiz-steps" role="tablist" aria-label="Question progress">
            {questions.map((_, i) => {
              const isAnswered = answers[i] !== null;
              const isCorrect = answers[i] === questions[i].correct;
              const isCurrent = i === current;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-label={`Question ${i + 1}${isAnswered ? (isCorrect ? ', correct' : ', incorrect') : ''}`}
                  className={`quiz-step${isCurrent ? ' current' : ''}${isAnswered ? (isCorrect ? ' correct' : ' incorrect') : ''}`}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                >
                  {isAnswered ? (isCorrect ? <CheckIcon /> : <XIcon />) : i + 1}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              className="quiz-card"
              key={`q-${current}`}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
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
                      type="button"
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
                    {answered === q.correct ? 'Correct' : 'Not quite'}
                  </span>
                  {q.explanation}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="quiz-nav">
            <button
              type="button"
              className="quiz-nav-btn"
              onClick={handlePrev}
              disabled={current === 0}
            >
              Previous
            </button>
            <div className="quiz-nav-score">
              Score {score}/{questions.length}
            </div>
            <button
              type="button"
              className={`quiz-nav-btn quiz-nav-btn--next${answered !== null ? ' quiz-nav-btn--ready' : ''}`}
              onClick={handleNext}
              disabled={answered === null}
            >
              {current === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
