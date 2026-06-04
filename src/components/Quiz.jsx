import { useState } from 'react';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function QuizCard({ q, index }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className={`quiz-card${selected !== null ? ' answered' : ''}`}>
      <div className="quiz-question-num">Question {index + 1} of many</div>
      <div className="quiz-question">{q.question}</div>
      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (selected !== null) {
            if (i === q.correct) cls += ' correct';
            else if (i === selected && selected !== q.correct) cls += ' incorrect';
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => selected === null && setSelected(i)}
              disabled={selected !== null}
            >
              <span className="quiz-option-letter">{LETTERS[i]}</span>
              <span>{opt}</span>
              {selected !== null && i === q.correct && <span style={{ marginLeft: 'auto', fontSize: '1rem' }}>✓</span>}
              {selected !== null && i === selected && selected !== q.correct && <span style={{ marginLeft: 'auto', fontSize: '1rem', opacity: .7 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="quiz-explanation">
          <strong style={{ color: selected === q.correct ? '#34D399' : '#FCA5A5' }}>
            {selected === q.correct ? '✓ Correct!' : '✗ Not quite.'}
          </strong>{' '}
          {q.explanation}
        </div>
      )}
    </div>
  );
}

export default function Quiz({ questions, title = 'Knowledge Check' }) {
  const [key, setKey] = useState(0);

  return (
    <div className="quiz-section" key={key}>
      <div className="quiz-header">
        <div className="quiz-header-icon">🎯</div>
        <div>
          <h2>{title}</h2>
          <p>{questions.length} questions · Select an option to reveal the answer and explanation</p>
        </div>
      </div>
      {questions.map((q, i) => (
        <QuizCard key={`${key}-${q.id}`} q={q} index={i} />
      ))}
      <button className="quiz-reset-btn" onClick={() => setKey(k => k + 1)}>
        ↺ Reset all questions
      </button>
    </div>
  );
}
