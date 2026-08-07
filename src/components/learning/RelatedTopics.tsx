import React from 'react';

export interface RelatedTopic {
  label: string;
  href: string;
  description?: string;
}

/**
 * RelatedTopics — a small grid of links to connected lessons.
 */
export default function RelatedTopics({
  items,
  title = 'Related Topics',
}: {
  items: RelatedTopic[];
  title?: string;
}): React.JSX.Element {
  return (
    <div className="ag-related">
      <h3 className="ag-related__title">{title}</h3>
      <div className="ag-related__grid">
        {items.map((item) => (
          <a className="ag-related__card" href={item.href} key={item.label}>
            <span className="ag-related__label">{item.label}</span>
            {item.description && (
              <span className="ag-related__desc">{item.description}</span>
            )}
            <span className="ag-related__arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
