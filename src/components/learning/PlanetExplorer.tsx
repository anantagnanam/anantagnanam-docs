import React, {useState} from 'react';
import {PLANETS} from './planetData';
import PlanetVisual from './PlanetVisual';
import type {PlanetKey} from './journeyData';

/**
 * PlanetExplorer — an interactive control panel that lets learners
 * flip through all eight planets without leaving the page.
 *
 * Desktop: a grid of planet buttons with a detail panel.
 * Mobile: a horizontally scrollable strip of buttons.
 * Accessibility: buttons use aria-pressed, the detail panel is an
 * aria-live region so screen readers announce the change.
 */

const ORDINALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];

export default function PlanetExplorer(): React.JSX.Element {
  const [activeKey, setActiveKey] = useState<PlanetKey>('earth');
  const active = PLANETS.find((p) => p.key === activeKey) ?? PLANETS[2];

  const handleSelect = (key: string) => {
    setActiveKey(key as PlanetKey);
  };

  return (
    <div className="ag-explorer">
      <div className="ag-explorer__selector" role="group" aria-label="Choose a planet to explore">
        {PLANETS.map((planet) => {
          const isActive = planet.key === activeKey;
          return (
            <button
              key={planet.key}
              type="button"
              className={`ag-explorer__tab${isActive ? ' ag-explorer__tab--active' : ''}`}
              aria-pressed={isActive}
              onClick={() => handleSelect(planet.key)}
            >
              <PlanetVisual planet={planet.key as PlanetKey} className="ag-explorer__thumb" />
              <span className="ag-explorer__tab-name">{planet.name}</span>
            </button>
          );
        })}
      </div>

      <div className="ag-explorer__panel" aria-live="polite" aria-atomic="true">
        <div className="ag-explorer__visual" aria-hidden="true">
          <PlanetVisual planet={active.key as PlanetKey} className="ag-explorer__planet" />
        </div>
        <div className="ag-explorer__info">
          <p className="ag-explorer__eyebrow">
            {ORDINALS[active.orderFromSun - 1] ?? `${active.orderFromSun}th`} planet from the Sun
          </p>
          <h3 className="ag-explorer__name">{active.name}</h3>
          <p className="ag-explorer__type">{active.type}</p>
          <dl className="ag-explorer__facts">
            <div className="ag-explorer__fact">
              <dt>Diameter</dt>
              <dd>{active.diameter}</dd>
            </div>
            <div className="ag-explorer__fact">
              <dt>Year length</dt>
              <dd>{active.yearLength}</dd>
            </div>
            <div className="ag-explorer__fact">
              <dt>Day length</dt>
              <dd>{active.dayLength}</dd>
            </div>
            <div className="ag-explorer__fact">
              <dt>Moons</dt>
              <dd>{active.moons}</dd>
            </div>
            <div className="ag-explorer__fact">
              <dt>Temperature</dt>
              <dd>{active.temperature}</dd>
            </div>
          </dl>
          <p className="ag-explorer__feature">
            <span className="ag-explorer__feature-label">Notable:</span> {active.notableFeature}
          </p>
          <p className="ag-explorer__fun">{active.funFact}</p>
        </div>
      </div>
    </div>
  );
}
