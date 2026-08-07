import React from 'react';
import type {ReactNode} from 'react';

export interface WhyItMattersProps {
  /** Optional heading override; defaults to "Why Does This Matter?" */
  title?: string;
  /** Optional short eyebrow above the heading, e.g. "BIG PICTURE" */
  eyebrow?: string;
  /** The explanation content */
  children: ReactNode;
}

/**
 * WhyItMatters — a reflective panel that connects the lesson to the
 * bigger picture: why should a young explorer care about this topic?
 */
export default function WhyItMatters({
  title = 'Why Does This Matter?',
  eyebrow,
  children,
}: WhyItMattersProps): React.JSX.Element {
  return (
    <section className="ag-whymatters" aria-label={title}>
      <div className="ag-whymatters__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8.2v4.2" />
          <circle cx="12" cy="16" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      </div>
      <div className="ag-whymatters__body">
        {eyebrow && <p className="ag-whymatters__eyebrow">{eyebrow}</p>}
        <h2 className="ag-whymatters__title">{title}</h2>
        <div className="ag-whymatters__content">{children}</div>
      </div>
    </section>
  );
}
