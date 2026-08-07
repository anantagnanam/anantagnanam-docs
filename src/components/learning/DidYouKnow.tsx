import React from 'react';
import type {ReactNode} from 'react';

/**
 * DidYouKnow — a compact, eye-catching fact callout.
 */
export default function DidYouKnow({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className="ag-didyouknow" role="note">
      <div className="ag-didyouknow__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8 L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="15.5" r="1.3" fill="currentColor" />
        </svg>
      </div>
      <div className="ag-didyouknow__body">
        <div className="ag-didyouknow__label">Did You Know?</div>
        <div className="ag-didyouknow__text">{children}</div>
      </div>
    </div>
  );
}
