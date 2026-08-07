import React from 'react';
import {useJourneyProgress} from './useJourneyProgress';

export interface MarkExploredProps {
  /** The journey stop id, e.g. "solar-system/mars" — matches journeyData */
  id: string;
  /** Button label override; defaults to "Mark as explored" */
  label?: string;
  /** Confirmation label when explored; defaults to "Explored!" */
  exploredLabel?: string;
}

/**
 * MarkExplored — a "Mark as explored" button that stores progress
 * in the browser. Local only: no accounts, no server, no tracking.
 */
export default function MarkExplored({
  id,
  label = 'Mark as explored',
  exploredLabel = 'Explored!',
}: MarkExploredProps): React.JSX.Element {
  const {isExplored, toggleExplored} = useJourneyProgress();
  const done = isExplored(id);

  return (
    <div className="ag-mark-explored">
      <button
        type="button"
        className={`ag-btn ag-btn--explored${done ? ' ag-btn--explored-done' : ''}`}
        aria-pressed={done}
        onClick={() => toggleExplored(id)}
      >
        <span className="ag-mark-explored__check" aria-hidden="true">
          {done ? (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 8.5 L6.2 12.2 L13.5 4" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3v10M3 8h10" />
            </svg>
          )}
        </span>
        <span className="ag-mark-explored__label">{done ? exploredLabel : label}</span>
      </button>
      <p className="ag-mark-explored__hint">
        {done
          ? 'Saved on this device. You can unmark it anytime.'
          : 'Progress is saved privately in your browser.'}
      </p>
    </div>
  );
}
