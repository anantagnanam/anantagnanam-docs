import React from 'react';
import type {ReactNode} from 'react';

export type CalloutType = 'info' | 'tip' | 'note' | 'warning';

const CALL_OUT_ICONS: Record<CalloutType, React.JSX.Element> = {
  info: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11 L12 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1.4" fill="currentColor" />
    </svg>
  ),
  tip: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M12 3 A6.5 6.5 0 0 0 8.5 15.4 L8.5 17 A1.5 1.5 0 0 0 10 18.5 L14 18.5 A1.5 1.5 0 0 0 15.5 17 L15.5 15.4 A6.5 6.5 0 0 0 12 3 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10.5 21 L13.5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  note: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M4 19.5 L4 5.5 A1.5 1.5 0 0 1 5.5 4 L16 4 L20 8 L20 19.5 A1.5 1.5 0 0 1 18.5 21 L5.5 21 A1.5 1.5 0 0 1 4 19.5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M16 4 L16 8 L20 8" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M12 3 L21 20 L3 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 9 L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.3" fill="currentColor" />
    </svg>
  ),
};

const CALL_OUT_TITLES: Record<CalloutType, string> = {
  info: 'Good to Know',
  tip: 'Tip',
  note: 'Note',
  warning: 'Remember',
};

/**
 * Callout — a generic content callout with a type and optional custom title.
 */
export default function Callout({
  type = 'note',
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className={`ag-callout ag-callout--${type}`} role="note">
      <div className="ag-callout__icon" aria-hidden="true">
        {CALL_OUT_ICONS[type]}
      </div>
      <div className="ag-callout__body">
        <div className="ag-callout__title">{title ?? CALL_OUT_TITLES[type]}</div>
        <div className="ag-callout__text">{children}</div>
      </div>
    </div>
  );
}
