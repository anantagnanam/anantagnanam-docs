import React from 'react';

/**
 * NextLesson — a big invitation card pointing to the next stop of the journey.
 */
export default function NextLesson({
  title,
  description,
  href,
  cta = 'Continue the Journey',
}: {
  title: string;
  description?: string;
  href: string;
  cta?: string;
}): React.JSX.Element {
  return (
    <a className="ag-nextlesson" href={href}>
      <span className="ag-nextlesson__kicker">Up next</span>
      <span className="ag-nextlesson__title">{title}</span>
      {description && <span className="ag-nextlesson__desc">{description}</span>}
      <span className="ag-nextlesson__cta">
        {cta} <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}
