import React from 'react';
import type {ReactNode} from 'react';

export interface FactGridItem {
  /** Short label, e.g. "Speed of light" */
  title: string;
  /** One line of text */
  text: string;
  /** Optional emoji or icon node */
  icon?: ReactNode;
}

/**
 * FactGrid — a responsive grid of compact fact cards.
 */
export default function FactGrid({
  items,
}: {
  items: FactGridItem[];
}): React.JSX.Element {
  return (
    <div className="ag-factgrid">
      {items.map((item) => (
        <div className="ag-factgrid__card" key={item.title}>
          {item.icon && <div className="ag-factgrid__icon" aria-hidden="true">{item.icon}</div>}
          <div className="ag-factgrid__title">{item.title}</div>
          <p className="ag-factgrid__text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
