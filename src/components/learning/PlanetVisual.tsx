import React from 'react';
import type {PlanetKey} from './journeyData';

/**
 * PlanetVisual — original, abstract SVG illustrations for each world.
 * No copyrighted art: simple gradients, rings, and surface patterns.
 * Rendered in a square viewBox and scalable via CSS width/height.
 */

interface VisualProps {
  planet: PlanetKey;
  /** Set by consumers; component fills the container */
  className?: string;
  labelledBy?: string;
}

function PlanetSurface({
  id,
  stops,
}: {
  id: string;
  stops: Array<[string, string]>;
}): React.JSX.Element {
  return (
    <radialGradient id={id} cx="35%" cy="30%" r="75%">
      {stops.map(([offset, color], i) => (
        <stop key={i} offset={offset} stopColor={color} />
      ))}
    </radialGradient>
  );
}

const CLOUD = 'rgba(255,255,255,0.16)';
const DARK = 'rgba(0,0,0,0.18)';

function SunArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="84" fill="url(#ag-sun-core)" />
      <circle cx="100" cy="100" r="84" fill="none" stroke="rgba(244,212,124,0.55)" strokeWidth="2" />
      {[
        [58, 66, 8],
        [140, 58, 11],
        [152, 128, 7],
        [62, 142, 9],
        [104, 40, 6],
        [40, 100, 6],
        [160, 96, 6],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="rgba(244,212,124,0.35)" />
      ))}
    </>
  );
}

function MercuryArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="62" fill="url(#ag-mercury)" />
      {[
        [78, 76, 9],
        [126, 92, 12],
        [96, 128, 8],
        [132, 130, 7],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={DARK} />
      ))}
      <circle cx="66" cy="120" r="5" fill="rgba(255,255,255,0.25)" />
    </>
  );
}

function VenusArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="70" fill="url(#ag-venus)" />
      <path d="M40 86 Q70 74 100 84 Q132 94 160 80" fill="none" stroke={CLOUD} strokeWidth="10" strokeLinecap="round" opacity="0.8" />
      <path d="M46 116 Q80 104 114 114 Q146 123 162 112" fill="none" stroke={CLOUD} strokeWidth="8" strokeLinecap="round" opacity="0.7" />
      <path d="M60 66 Q92 58 124 66" fill="none" stroke={CLOUD} strokeWidth="6" strokeLinecap="round" opacity="0.55" />
    </>
  );
}

function EarthArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="70" fill="url(#ag-earth-ocean)" />
      <path d="M78 42 Q84 62 76 84 Q68 102 80 122 Q90 140 78 156" fill="#3f8f52" opacity="0.92" />
      <path d="M112 40 Q120 58 132 66 Q144 76 140 94 Q134 108 120 104 Q106 100 110 84 Q112 66 112 40 Z" fill="#4c9a58" opacity="0.9" />
      <path d="M84 128 Q98 120 118 124 Q128 128 122 142 Q112 150 96 146 Q84 140 84 128 Z" fill="#4c9a58" opacity="0.85" />
      <path d="M52 96 Q66 88 84 92" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="7" strokeLinecap="round" opacity="0.8" />
      <path d="M118 150 Q134 146 148 152" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
    </>
  );
}

function MoonArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="64" fill="url(#ag-moon)" />
      {[
        [80, 74, 11],
        [122, 88, 14],
        [96, 122, 9],
        [132, 126, 8],
        [70, 116, 7],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={DARK} />
      ))}
      <circle cx="62" cy="92" r="5" fill="rgba(255,255,255,0.3)" />
      <circle cx="118" cy="70" r="4" fill="rgba(255,255,255,0.25)" />
    </>
  );
}

function MarsArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="68" fill="url(#ag-mars)" />
      <path d="M52 108 Q78 100 104 106 Q132 112 150 102" fill="none" stroke="#a34a2a" strokeWidth="12" strokeLinecap="round" opacity="0.85" />
      <circle cx="126" cy="76" r="14" fill="#b35c38" opacity="0.9" />
      <circle cx="78" cy="132" r="10" fill="#b35c38" opacity="0.8" />
      <ellipse cx="150" cy="126" rx="12" ry="6" fill="rgba(255,255,255,0.4)" />
      <circle cx="66" cy="66" r="5" fill="rgba(255,255,255,0.3)" />
    </>
  );
}

function JupiterArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="78" fill="url(#ag-jupiter)" />
      <path d="M34 78 Q100 66 166 78" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="7" strokeLinecap="round" />
      <path d="M28 98 Q100 88 172 98" fill="none" stroke="rgba(214,178,120,0.75)" strokeWidth="6" strokeLinecap="round" />
      <path d="M30 116 Q100 106 170 116" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="126" cy="126" rx="22" ry="13" fill="#c25a3a" opacity="0.9" />
      <ellipse cx="126" cy="124" rx="16" ry="7" fill="#e07a52" opacity="0.8" />
      <path d="M34 136 Q100 126 166 136" fill="none" stroke="rgba(214,178,120,0.6)" strokeWidth="6" strokeLinecap="round" />
    </>
  );
}

function SaturnArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="56" fill="url(#ag-saturn)" />
      <path d="M46 88 Q100 76 154 88" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="8" strokeLinecap="round" />
      <path d="M42 108 Q100 96 158 108" fill="none" stroke="rgba(238,214,168,0.8)" strokeWidth="7" strokeLinecap="round" />
      <path d="M52 126 Q100 116 148 126" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="100" cy="100" rx="92" ry="26" fill="none" stroke="#d8b878" strokeWidth="10" opacity="0.9" transform="rotate(-16 100 100)" />
      <ellipse cx="100" cy="100" rx="76" ry="20" fill="none" stroke="rgba(232,184,75,0.5)" strokeWidth="5" transform="rotate(-16 100 100)" />
    </>
  );
}

function UranusArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="66" fill="url(#ag-uranus)" />
      <path d="M56 72 Q100 62 144 72" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="7" strokeLinecap="round" />
      <path d="M50 116 Q100 106 150 116" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="100" cy="100" rx="26" ry="88" fill="none" stroke="rgba(214,236,240,0.7)" strokeWidth="8" transform="rotate(8 100 100)" />
    </>
  );
}

function NeptuneArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="66" fill="url(#ag-neptune)" />
      <path d="M48 88 Q100 76 152 88" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="8" strokeLinecap="round" />
      <path d="M42 114 Q100 102 158 114" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="120" cy="128" rx="16" ry="10" fill="#2b4a8f" opacity="0.85" />
      <circle cx="70" cy="70" r="4" fill="rgba(255,255,255,0.4)" />
    </>
  );
}

function BeyondArt(): React.JSX.Element {
  return (
    <>
      <circle cx="100" cy="100" r="54" fill="url(#ag-beyond)" />
      <circle cx="86" cy="88" r="12" fill="rgba(255,255,255,0.22)" />
      <circle cx="112" cy="118" r="9" fill="rgba(255,255,255,0.16)" />
      <circle cx="118" cy="82" r="5" fill="rgba(255,255,255,0.2)" />
      <circle cx="30" cy="36" r="2" fill="rgba(244,212,124,0.9)" />
      <circle cx="172" cy="52" r="2.4" fill="rgba(207,227,255,0.9)" />
      <circle cx="160" cy="160" r="2" fill="rgba(207,227,255,0.8)" />
      <circle cx="38" cy="150" r="1.6" fill="rgba(207,227,255,0.8)" />
    </>
  );
}

export default function PlanetVisual({
  planet,
  className,
  labelledBy,
}: VisualProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : `Abstract illustration of ${planet}`}
    >
      <defs>
        <PlanetSurface id="ag-sun-core" stops={[['0%', '#fff3c4'], ['45%', '#f4c95d'], ['100%', '#e59a2e']]} />
        <PlanetSurface id="ag-mercury" stops={[['0%', '#d9cbb6'], ['100%', '#9a8a74']]} />
        <PlanetSurface id="ag-venus" stops={[['0%', '#f7e7c4'], ['100%', '#d9b678']]} />
        <PlanetSurface id="ag-earth-ocean" stops={[['0%', '#6f9fd8'], ['100%', '#2e5f9e']]} />
        <PlanetSurface id="ag-moon" stops={[['0%', '#e5e0d4'], ['100%', '#a9a294']]} />
        <PlanetSurface id="ag-mars" stops={[['0%', '#e07a4e'], ['100%', '#a8402a']]} />
        <PlanetSurface id="ag-jupiter" stops={[['0%', '#f0d9ae'], ['100%', '#c1935f']]} />
        <PlanetSurface id="ag-saturn" stops={[['0%', '#f4e3c2'], ['100%', '#d3ae74']]} />
        <PlanetSurface id="ag-uranus" stops={[['0%', '#d6f0f2'], ['100%', '#8ecfd6']]} />
        <PlanetSurface id="ag-neptune" stops={[['0%', '#5a8fe0'], ['100%', '#2b4a9e']]} />
        <PlanetSurface id="ag-beyond" stops={[['0%', '#8fa3c9'], ['100%', '#46597e']]} />
      </defs>
      {planet === 'sun' && <SunArt />}
      {planet === 'mercury' && <MercuryArt />}
      {planet === 'venus' && <VenusArt />}
      {planet === 'earth' && <EarthArt />}
      {planet === 'moon' && <MoonArt />}
      {planet === 'mars' && <MarsArt />}
      {planet === 'jupiter' && <JupiterArt />}
      {planet === 'saturn' && <SaturnArt />}
      {planet === 'uranus' && <UranusArt />}
      {planet === 'neptune' && <NeptuneArt />}
      {planet === 'beyond' && <BeyondArt />}
    </svg>
  );
}
