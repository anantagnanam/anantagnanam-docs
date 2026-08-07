import React from 'react';
import type {ReactNode} from 'react';
import PlanetVisual from './PlanetVisual';
import type {PlanetKey} from './journeyData';

export interface PlanetFactCardProps {
  /** Planet name, e.g. "Mars" */
  name: string;
  /** Type of world, e.g. "Rocky Planet" or "Gas Giant" */
  type: string;
  /** Position counting from the Sun (1 = closest) */
  orderFromSun: number;
  /** Number of known moons (approximate is fine) */
  moons: number;
  /** How long one orbit around the Sun takes */
  yearLength: string;
  /** One interesting fact */
  funFact: string;
  /** Optional approximate diameter, e.g. "6,779 km" */
  diameter?: string;
  /** Optional temperature, e.g. "About −60 °C on average" */
  temperature?: string;
  /** Optional planet key to render the abstract visual instead of an icon */
  planet?: PlanetKey;
  /** Optional custom icon (emoji or SVG node) shown in the header */
  icon?: ReactNode;
}

const ORDINALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth'];

/**
 * PlanetFactCard — a polished card summarizing key facts about a world.
 * Content is fully driven by props, so it can be reused for any planet.
 */
export default function PlanetFactCard({
  name,
  type,
  orderFromSun,
  moons,
  yearLength,
  funFact,
  diameter,
  temperature,
  planet,
  icon,
}: PlanetFactCardProps): React.JSX.Element {
  const ordinal = ORDINALS[orderFromSun - 1] ?? `${orderFromSun}th`;

  return (
    <div className="ag-planet-card">
      <div className="ag-planet-card__header">
        {planet && (
          <div className="ag-planet-card__visual" aria-hidden="true">
            <PlanetVisual planet={planet} className="ag-planet-card__art" />
          </div>
        )}
        <div className="ag-planet-card__title">
          <span className="ag-planet-card__name">{name}</span>
          <span className="ag-planet-card__type">{type}</span>
        </div>
        {icon && <div className="ag-planet-card__icon">{icon}</div>}
      </div>
      <dl className="ag-planet-card__facts">
        <div className="ag-planet-card__fact">
          <dt>Order from Sun</dt>
          <dd>
            {ordinal} of the eight planets
          </dd>
        </div>
        {diameter && (
          <div className="ag-planet-card__fact">
            <dt>Approximate diameter</dt>
            <dd>{diameter}</dd>
          </div>
        )}
        <div className="ag-planet-card__fact">
          <dt>Known moons</dt>
          <dd>{moons}</dd>
        </div>
        <div className="ag-planet-card__fact">
          <dt>Year length</dt>
          <dd>{yearLength}</dd>
        </div>
        {temperature && (
          <div className="ag-planet-card__fact">
            <dt>Temperature</dt>
            <dd>{temperature}</dd>
          </div>
        )}
      </dl>
      <div className="ag-planet-card__fun">
        <span className="ag-planet-card__fun-label">Fun fact</span>
        <p className="ag-planet-card__fun-text">{funFact}</p>
      </div>
    </div>
  );
}
