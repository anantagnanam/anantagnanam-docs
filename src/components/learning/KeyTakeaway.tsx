import React from 'react';
import type {ReactNode} from 'react';

/**
 * KeyTakeaway — the most important idea to remember from the lesson.
 */
export default function KeyTakeaway({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className="ag-takeaway" role="note">
      <div className="ag-takeaway__label">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M6 3 L18 3 L18 21 L12 17 L6 21 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
        Key Takeaway
      </div>
      <div className="ag-takeaway__text">{children}</div>
    </div>
  );
}
