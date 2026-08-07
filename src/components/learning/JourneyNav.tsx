import React from 'react';
import NextLesson from './NextLesson';
import {getPrevStop, getNextStop} from './journeyData';

export interface JourneyNavProps {
  /** The current journey stop id, e.g. "solar-system/mars" */
  id: string;
}

/**
 * JourneyNav — automatic previous/next cards at the foot of a lesson.
 * Reads the order straight from journeyData, so the navigation can
 * never drift out of sync with the real journey.
 */
export default function JourneyNav({id}: JourneyNavProps): React.JSX.Element {
  const prev = getPrevStop(id);
  const next = getNextStop(id);

  return (
    <nav className="ag-journey-nav" aria-label="Lesson navigation">
      {prev && (
        <NextLesson
          direction="prev"
          title={prev.label}
          href={prev.href}
          description={`Region: ${prev.region}`}
        />
      )}
      {next && (
        <NextLesson
          direction="next"
          title={next.label}
          href={next.href}
          description={`Region: ${next.region}`}
        />
      )}
    </nav>
  );
}
