import React from 'react';
import type {ReactNode} from 'react';

/**
 * ReflectionQuestion — invites the learner to pause and think before reading on.
 */
export default function ReflectionQuestion({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className="ag-reflection" role="note">
      <div className="ag-reflection__label">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M4 12 C4 6 9 4 12 4 C15 4 20 6 20 12 C20 18 15 20 12 20 L4 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="9.5" cy="12" r="1.3" fill="currentColor" />
          <circle cx="14.5" cy="12" r="1.3" fill="currentColor" />
        </svg>
        Pause and Reflect
      </div>
      <div className="ag-reflection__text">{children}</div>
    </div>
  );
}
