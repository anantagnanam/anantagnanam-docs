import React from 'react';

export interface LessonLink {
  label: string;
  href: string;
}

/**
 * LessonNavigation — previous / next cards at the foot of a lesson.
 */
export default function LessonNavigation({
  prev,
  next,
}: {
  prev?: LessonLink | null;
  next?: LessonLink | null;
}): React.JSX.Element {
  return (
    <nav className="ag-lesson-nav" aria-label="Lesson navigation">
      {prev ? (
        <a className="ag-lesson-nav__card ag-lesson-nav__card--prev" href={prev.href}>
          <span className="ag-lesson-nav__direction">← Previous</span>
          <span className="ag-lesson-nav__label">{prev.label}</span>
        </a>
      ) : (
        <span />
      )}
      {next ? (
        <a className="ag-lesson-nav__card ag-lesson-nav__card--next" href={next.href}>
          <span className="ag-lesson-nav__direction">Next →</span>
          <span className="ag-lesson-nav__label">{next.label}</span>
        </a>
      ) : (
        <span />
      )}
    </nav>
  );
}
