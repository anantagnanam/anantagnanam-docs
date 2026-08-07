import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import {JOURNEY_STOPS, JOURNEY_TOTAL} from './journeyData';
import {useJourneyProgress} from './useJourneyProgress';

export interface JourneyProgressProps {
  /** Optional aria label; defaults to "Journey progress" */
  label?: string;
  /** Show a "Reset progress" link (stored locally, clears this device) */
  showReset?: boolean;
}

/**
 * JourneyProgress — a trail of dots showing how much of the journey
 * has been explored. Syncs live across components via localStorage
 * events, and stays hydration-safe (renders 0 until mounted).
 */
export default function JourneyProgress({
  label = 'Journey progress',
  showReset = true,
}: JourneyProgressProps): React.JSX.Element {
  const {explored, ready, resetProgress} = useJourneyProgress();
  const [confirmReset, setConfirmReset] = useState(false);

  const exploredSet = new Set(explored);
  const count = ready ? JOURNEY_STOPS.filter((stop) => exploredSet.has(stop.id)).length : 0;
  const percent = ready ? Math.round((count / JOURNEY_TOTAL) * 100) : 0;

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      window.setTimeout(() => setConfirmReset(false), 4000);
      return;
    }
    resetProgress();
    setConfirmReset(false);
  };

  return (
    <div className="ag-journey" aria-label={label}>
      <div className="ag-journey__head">
        <p className="ag-journey__label">{label}</p>
        <p className="ag-journey__count" aria-live="polite">
          {count} of {JOURNEY_TOTAL} stops explored · {percent}%
        </p>
      </div>
      <ol className="ag-journey__trail">
        {JOURNEY_STOPS.map((stop, i) => {
          const done = ready && exploredSet.has(stop.id);
          return (
            <li key={stop.id} className="ag-journey__stop">
              <Link
                to={stop.href}
                className={`ag-journey__dot${done ? ' ag-journey__dot--done' : ''}`}
                aria-label={`${stop.label}${done ? ' (explored)' : ''}`}
                title={stop.label}
              >
                {i + 1}
              </Link>
            </li>
          );
        })}
      </ol>
      {showReset && (
        <button
          type="button"
          className="ag-journey__reset"
          onClick={handleReset}
          aria-label={confirmReset ? 'Confirm reset progress' : 'Reset progress'}
        >
          {confirmReset ? 'Click again to confirm reset' : 'Reset progress (this device only)'}
        </button>
      )}
    </div>
  );
}
