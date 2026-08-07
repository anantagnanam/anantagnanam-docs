import React, {useState} from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  /** Short explanation shown after answering */
  explanation?: string;
}

export interface QuizRunnerProps {
  /** One sentence intro shown before the first question */
  intro?: string;
  /** The quiz questions */
  questions: QuizQuestion[];
  /** Heading override; defaults to "Solar System Quiz" */
  title?: string;
}

interface Rank {
  title: string;
  blurb: string;
}

function rankFor(score: number, total: number): Rank {
  const ratio = total > 0 ? score / total : 0;
  if (ratio === 1) {
    return {
      title: 'Cosmic Explorer',
      blurb: 'Perfect! You know our solar system like a seasoned space traveler.',
    };
  }
  if (ratio >= 0.7) {
    return {
      title: 'Planet Pathfinder',
      blurb: 'Strong journey! A little more stargazing and you will reach the top rank.',
    };
  }
  if (ratio >= 0.4) {
    return {
      title: 'Curious Voyager',
      blurb: 'Good start — every great explorer begins with curiosity. Try again to go further!',
    };
  }
  return {
    title: 'Every explorer starts somewhere — try again!',
    blurb: 'No wrong turns, only new paths. Revisit the lessons and take another shot.',
  };
}

/**
 * QuizRunner — a self-contained quiz with instant feedback and ranks.
 * No backend: results are computed locally and shown immediately.
 */
export default function QuizRunner({
  intro,
  questions,
  title = 'Solar System Quiz',
}: QuizRunnerProps): React.JSX.Element {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const question = questions[current];
  const answered = selected !== null;
  const total = questions.length;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    if (index === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < total) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAttempts((a) => a + 1);
  };

  if (finished) {
    const rank = rankFor(score, total);
    return (
      <div className="ag-quiz ag-quiz--done">
        <div className="ag-quiz__result" role="status">
          <p className="ag-quiz__result-score" aria-live="polite">
            {score} of {total} correct
          </p>
          <h3 className="ag-quiz__rank">{rank.title}</h3>
          <p className="ag-quiz__rank-blurb">{rank.blurb}</p>
          {attempts > 0 && (
            <p className="ag-quiz__attempts">Attempts this session: {attempts + 1}</p>
          )}
        </div>
        <div className="ag-quiz__actions">
          <button type="button" className="ag-btn ag-btn--primary" onClick={handleRestart}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  const progress = total > 0 ? Math.round(((current + (answered ? 1 : 0)) / total) * 100) : 0;

  return (
    <div className="ag-quiz">
      <h3 className="ag-quiz__title">{title}</h3>
      {intro && <p className="ag-quiz__intro">{intro}</p>}

      <div className="ag-quiz__progress" aria-hidden="true">
        <div className="ag-quiz__progress-bar" style={{width: `${progress}%`}} />
      </div>
      <p className="ag-quiz__counter">
        Question {current + 1} of {total}
      </p>

      <fieldset className="ag-quiz__fieldset" disabled={answered}>
        <legend className="ag-quiz__question">{question.question}</legend>
        <div className="ag-quiz__options">
          {question.options.map((option, i) => {
            let state = '';
            if (answered) {
              if (i === question.correctIndex) state = ' ag-quiz__option--correct';
              else if (i === selected) state = ' ag-quiz__option--wrong';
            }
            return (
              <label key={i} className={`ag-quiz__option${state}`}>
                <input
                  type="radio"
                  name={`quiz-q${current}`}
                  value={i}
                  checked={selected === i}
                  onChange={() => handleSelect(i)}
                />
                <span className="ag-quiz__option-letter" aria-hidden="true">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="ag-quiz__option-text">{option}</span>
                {answered && i === question.correctIndex && (
                  <span className="ag-quiz__mark" aria-hidden="true">✓</span>
                )}
                {answered && i === selected && i !== question.correctIndex && (
                  <span className="ag-quiz__mark ag-quiz__mark--x" aria-hidden="true">✕</span>
                )}
              </label>
            );
          })}
        </div>
      </fieldset>

      {answered && (
        <div className="ag-quiz__feedback" role="status">
          <p className="ag-quiz__feedback-heading">
            {selected === question.correctIndex ? 'Correct!' : 'Not quite.'}
          </p>
          {question.explanation && <p className="ag-quiz__feedback-text">{question.explanation}</p>}
          <button type="button" className="ag-btn ag-btn--primary" onClick={handleNext}>
            {current + 1 < total ? 'Next question' : 'See my result'}
          </button>
        </div>
      )}
    </div>
  );
}
