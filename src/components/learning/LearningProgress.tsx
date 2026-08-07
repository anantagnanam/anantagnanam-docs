import React from 'react';

export interface ProgressItem {
  label: string;
  href?: string;
}

/**
 * LearningProgress — shows where the learner is in the journey.
 */
export default function LearningProgress({
  items,
  currentIndex,
}: {
  /** Ordered list of lesson names */
  items: ProgressItem[];
  /** Index of the lesson the learner is currently on */
  currentIndex: number;
}): React.JSX.Element {
  const current = items[currentIndex];
  return (
    <div className="ag-progress" role="group" aria-label="Learning progress">
      <div className="ag-progress__summary">
        <span className="ag-progress__count">
          Lesson {currentIndex + 1} of {items.length}
        </span>
        {current && <span className="ag-progress__current">{current.label}</span>}
      </div>
      <ol className="ag-progress__track" aria-label="Journey stops">
        {items.map((item, index) => {
          const state =
            index < currentIndex
              ? 'done'
              : index === currentIndex
                ? 'current'
                : 'upcoming';
          const content = (
            <span className={`ag-progress__dot ag-progress__dot--${state}`}>
              {state === 'done' ? '✓' : index + 1}
            </span>
          );
          return (
            <li className="ag-progress__stop" key={`${item.label}-${index}`}>
              {item.href && state !== 'current' ? (
                <a
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="ag-progress__link"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
