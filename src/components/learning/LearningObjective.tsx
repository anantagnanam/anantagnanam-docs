import React from 'react';
import type {ReactNode} from 'react';

/**
 * LearningObjective — states what the learner will understand after the lesson.
 */
export default function LearningObjective({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className="ag-objective" role="note">
      <div className="ag-objective__label">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M12 2 L14.4 8.2 L21 9 L16 13.6 L17.5 20.2 L12 16.8 L6.5 20.2 L8 13.6 L3 9 L9.6 8.2 Z"
            fill="currentColor"
          />
        </svg>
        Learning Objective
      </div>
      <div className="ag-objective__text">{children}</div>
    </div>
  );
}
