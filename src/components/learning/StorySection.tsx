import React from 'react';
import type {ReactNode} from 'react';

/**
 * StorySection — a narrative block that sets the scene.
 * Wrap a short piece of storytelling prose in one of these.
 */
export default function StorySection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className="ag-story">
      {title && <div className="ag-story__title">{title}</div>}
      <div className="ag-story__text">{children}</div>
    </div>
  );
}
