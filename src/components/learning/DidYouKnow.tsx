import React from 'react';
import type {ReactNode} from 'react';

export type FactVariant = 'didyouknow' | 'surprising' | 'scale' | 'history';

const LABELS: Record<FactVariant, string> = {
  didyouknow: 'Did You Know?',
  surprising: 'Surprising!',
  scale: 'A Matter of Scale',
  history: 'A Slice of History',
};

function FactIcon({variant}: {variant: FactVariant}): React.JSX.Element {
  switch (variant) {
    case 'surprising':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 L14.6 8.6 L20.7 9.4 L16.3 13.7 L17.4 19.8 L12 17 L6.6 19.8 L7.7 13.7 L3.3 9.4 L9.4 8.6 Z" />
          <circle cx="12" cy="11" r="0.9" fill="currentColor" stroke="none" />
          <path d="M12 13.5v3" />
        </svg>
      );
    case 'scale':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17 L9 7 L15 17 Z" />
          <path d="M6.5 17 H11.5" />
          <path d="M7 13 h4" />
          <path d="M16.5 17 L21 17" />
          <path d="M18.7 8.5 L21 11 L18.7 13.5" />
        </svg>
      );
    case 'history':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5 V12 L15 14" />
          <path d="M5.5 4 L8 6.5" />
          <path d="M3.5 8.5 H6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4.5 C8 4.5 5 7.5 5 11 C5 13.8 6.7 16.2 9.2 17.2 L8.5 20.5 H15.5 L14.8 17.2 C17.3 16.2 19 13.8 19 11 C19 7.5 16 4.5 12 4.5 Z" />
          <path d="M9.5 9 H14.5" />
          <path d="M9.5 12 H14.5" />
        </svg>
      );
  }
}

export interface DidYouKnowProps {
  /** Which kind of fact this is; changes the label and icon */
  variant?: FactVariant;
  /** Override the default label for this variant */
  label?: string;
  /** The fact content */
  children: ReactNode;
}

/**
 * DidYouKnow — a compact, eye-catching fact callout with four flavors:
 * didyouknow (default), surprising, scale, and history.
 */
export default function DidYouKnow({
  variant = 'didyouknow',
  label,
  children,
}: DidYouKnowProps): React.JSX.Element {
  const heading = label ?? LABELS[variant];
  return (
    <div className={`ag-didyouknow ag-didyouknow--${variant}`} role="note">
      <div className="ag-didyouknow__icon" aria-hidden="true">
        <FactIcon variant={variant} />
      </div>
      <div className="ag-didyouknow__body">
        <div className="ag-didyouknow__label">{heading}</div>
        <div className="ag-didyouknow__text">{children}</div>
      </div>
    </div>
  );
}
