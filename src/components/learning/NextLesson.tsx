import React from 'react';

export interface NextLessonProps {
  /** Direction of the card */
  direction?: 'next' | 'prev';
  /** Kicker line; defaults to "Next Discovery" (next) or "Previous Stop" (prev) */
  kicker?: string;
  title: string;
  description?: string;
  href: string;
  cta?: string;
}

/**
 * NextLesson — a big invitation card pointing to the next (or previous)
 * stop of the journey.
 */
export default function NextLesson({
  direction = 'next',
  kicker,
  title,
  description,
  href,
  cta,
}: NextLessonProps): React.JSX.Element {
  const defaultKicker = direction === 'prev' ? 'Previous Stop' : 'Next Discovery';
  const defaultCta = direction === 'prev' ? 'Back to' : 'Continue the Journey';
  const arrow = direction === 'prev' ? '←' : '→';

  return (
    <a
      className={`ag-nextlesson ag-nextlesson--${direction}`}
      href={href}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <span className="ag-nextlesson__kicker">{kicker ?? defaultKicker}</span>
      <span className="ag-nextlesson__title">{title}</span>
      {description && <span className="ag-nextlesson__desc">{description}</span>}
      <span className="ag-nextlesson__cta">
        {direction === 'prev' && <span aria-hidden="true">{arrow} </span>}
        {cta ?? defaultCta}
        {direction === 'next' && <span aria-hidden="true"> {arrow}</span>}
      </span>
    </a>
  );
}
