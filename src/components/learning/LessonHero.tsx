import React from 'react';
import type {ReactNode} from 'react';
import {JOURNEY_STOPS, JOURNEY_TOTAL, getStopIndex} from './journeyData';
import PlanetVisual from './PlanetVisual';

export interface LessonHeroProps {
  /** The journey stop id, e.g. "solar-system/mars" */
  id: string;
  /** The lesson title; falls back to the journey stop label */
  title?: string;
  /** Optional short summary shown under the title */
  children?: ReactNode;
}

/**
 * LessonHero — the opening banner for every lesson. Shows the
 * journey position ("Stop 4 of 12 · Inner Solar System"), the
 * planet's abstract visual, and a warm welcome line.
 */
export default function LessonHero({id, title, children}: LessonHeroProps): React.JSX.Element {
  const index = getStopIndex(id);
  const stop = index >= 0 ? JOURNEY_STOPS[index] : undefined;
  const number = index >= 0 ? index + 1 : undefined;
  const heading = title ?? stop?.label ?? 'Lesson';

  return (
    <header className="ag-hero ag-lesson-hero">
      <div className="ag-lesson-hero__visual" aria-hidden="true">
        <PlanetVisual planet={stop?.planet ?? 'sun'} className="ag-lesson-hero__planet" />
      </div>
      <div className="ag-lesson-hero__text">
        {number && stop && (
          <p className="ag-lesson-hero__kicker">
            Stop {number} of {JOURNEY_TOTAL} · {stop.region}
          </p>
        )}
        <h1 className="ag-lesson-hero__title">{heading}</h1>
        {children && <div className="ag-lesson-hero__summary">{children}</div>}
      </div>
    </header>
  );
}
