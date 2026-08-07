import React, {useState} from 'react';

export interface QuizProps {
  /** The question text */
  question: string;
  /** 3–4 answer options */
  options: string[];
  /** Index (0-based) of the correct option */
  correctIndex: number;
  /** Optional explanation shown after answering */
  explanation?: string;
  /** Optional heading shown above the question (e.g. "Quick Check 3") */
  title?: string;
  /** Optional aria-label for the whole quiz card */
  'aria-label'?: string;
}

/**
 * Quiz — a fully client-side, accessible multiple choice quiz.
 * No backend required: everything works in static HTML.
 */
export default function Quiz({
  question,
  options,
  correctIndex,
  explanation,
  title,
  'aria-label': ariaLabel,
}: QuizProps): React.JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const isValidOption = correctIndex >= 0 && correctIndex < options.length;

  const handleSubmit = () => {
    if (selected === null) {
      return;
    }
    setSubmitted(true);
    setAttempt((a) => a + 1);
  };

  const handleRetry = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const isCorrect = submitted && selected === correctIndex;
  const statusLabel = submitted
    ? isCorrect
      ? 'Correct!'
      : 'Not quite — try again or check the explanation.'
    : `Choose an answer, then press Check. Question ${attempt + 1}.`;

  return (
    <div
      className="ag-quiz"
      role="region"
      aria-label={ariaLabel ?? 'Quick knowledge check'}
    >
      <div className="ag-quiz__header">
        <span className="ag-quiz__badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              d="M12 3 L14.2 8.6 L20 9.2 L15.6 13 L17 18.8 L12 15.8 L7 18.8 L8.4 13 L4 9.2 L9.8 8.6 Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="ag-quiz__heading">{title ?? 'Quick Check'}</span>
      </div>

      <p className="ag-quiz__question">{question}</p>

      <div className="ag-quiz__options" role="group" aria-label="Answer options">
        {options.map((option, index) => {
          const isSelected = selected === index;
          const showCorrect = submitted && index === correctIndex;
          const showWrong = submitted && isSelected && index !== correctIndex;
          return (
            <button
              key={index}
              type="button"
              className={`ag-quiz__option${isSelected ? ' is-selected' : ''}${
                showCorrect ? ' is-correct' : ''
              }${showWrong ? ' is-wrong' : ''}`}
              aria-pressed={isSelected}
              disabled={submitted}
              onClick={() => setSelected(index)}
            >
              <span className="ag-quiz__letter" aria-hidden="true">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="ag-quiz__option-text">{option}</span>
              {showCorrect && (
                <span className="ag-quiz__mark" aria-hidden="true">
                  ✓
                </span>
              )}
              {showWrong && (
                <span className="ag-quiz__mark" aria-hidden="true">
                  ✗
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="ag-quiz__actions">
        {!submitted ? (
          <button
            type="button"
            className="ag-btn ag-btn--primary"
            disabled={selected === null}
            onClick={handleSubmit}
          >
            Check Answer
          </button>
        ) : (
          <button type="button" className="ag-btn ag-btn--ghost" onClick={handleRetry}>
            Try Again
          </button>
        )}
      </div>

      <div className="ag-quiz__feedback" aria-live="polite">
        {submitted ? (
          <>
            <div
              className={`ag-quiz__result ${
                isCorrect ? 'ag-quiz__result--correct' : 'ag-quiz__result--wrong'
              }`}
            >
              {isCorrect ? 'Correct — well done!' : `Not quite. ${isValidOption ? 'The correct answer is ' + String.fromCharCode(65 + correctIndex) + '.' : ''}`}
            </div>
            {explanation && <div className="ag-quiz__explanation">{explanation}</div>}
          </>
        ) : (
          <span className="ag-quiz__hint">{statusLabel}</span>
        )}
      </div>
    </div>
  );
}
