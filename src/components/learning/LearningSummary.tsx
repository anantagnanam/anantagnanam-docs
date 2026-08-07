import React from 'react';

export interface LearningSummaryProps {
  /** Heading override; defaults to "What You Discovered" */
  title?: string;
  /** Short label above the heading */
  kicker?: string;
  /** The discoveries to celebrate, each rendered as a checkmark line */
  items: string[];
  /** Optional closing nudge, e.g. "Now try the quiz to put it all together." */
  footer?: string;
}

/**
 * LearningSummary — closes a lesson with a checklist of discoveries,
 * reinforcing what the explorer just learned.
 */
export default function LearningSummary({
  title = 'What You Discovered',
  kicker = 'Reflect',
  items,
  footer,
}: LearningSummaryProps): React.JSX.Element {
  return (
    <section className="ag-summary" aria-label={title}>
      {kicker && <p className="ag-summary__kicker">{kicker}</p>}
      <h2 className="ag-summary__title">{title}</h2>
      <ul className="ag-summary__list">
        {items.map((item, i) => (
          <li key={i} className="ag-summary__item">
            <span className="ag-summary__check" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 8.5 L6.2 12.2 L13.5 4" />
              </svg>
            </span>
            <span className="ag-summary__text">{item}</span>
          </li>
        ))}
      </ul>
      {footer && <p className="ag-summary__footer">{footer}</p>}
    </section>
  );
}
