import React from 'react';
import type {ReactNode} from 'react';

/**
 * ExploreCard — a link card used on the homepage and topic pages.
 */
export default function ExploreCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description?: string;
  href: string;
  icon?: ReactNode;
}): React.JSX.Element {
  return (
    <a className="ag-explore-card" href={href}>
      {icon && <div className="ag-explore-card__icon" aria-hidden="true">{icon}</div>}
      <div className="ag-explore-card__body">
        <span className="ag-explore-card__title">{title}</span>
        {description && <span className="ag-explore-card__desc">{description}</span>}
      </div>
      <span className="ag-explore-card__arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
