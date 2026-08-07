/**
 * The Solar System learning journey — the single source of truth for
 * lesson order, regions, and navigation.
 *
 * Kept as plain data so any component (progress, hero, navigation,
 * completion) stays in sync with the actual lessons.
 */

export type PlanetKey =
  | 'sun'
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'moon'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune'
  | 'beyond';

export interface JourneyStop {
  /** Doc id used for completion tracking (matches localStorage keys) */
  id: string;
  label: string;
  href: string;
  region: string;
  planet: PlanetKey;
}

/** Ordered journey: Start → Sun → inner worlds → outer worlds → beyond → activities */
export const JOURNEY_STOPS: JourneyStop[] = [
  {id: 'solar-system/journey-begins', label: 'The Journey Begins', href: '/solar-system/journey-begins', region: 'Start Here', planet: 'sun'},
  {id: 'solar-system/sun', label: 'Meet the Sun', href: '/solar-system/sun', region: 'Inner Solar System', planet: 'sun'},
  {id: 'solar-system/mercury', label: 'Mercury', href: '/solar-system/mercury', region: 'Inner Solar System', planet: 'mercury'},
  {id: 'solar-system/venus', label: 'Venus', href: '/solar-system/venus', region: 'Inner Solar System', planet: 'venus'},
  {id: 'solar-system/earth', label: 'Earth — Our Home', href: '/solar-system/earth', region: 'Inner Solar System', planet: 'earth'},
  {id: 'solar-system/moon', label: 'The Moon', href: '/solar-system/moon', region: 'Inner Solar System', planet: 'moon'},
  {id: 'solar-system/mars', label: 'Mars — The Red Planet', href: '/solar-system/mars', region: 'Inner Solar System', planet: 'mars'},
  {id: 'solar-system/jupiter', label: 'Jupiter — The Giant', href: '/solar-system/jupiter', region: 'Outer Solar System', planet: 'jupiter'},
  {id: 'solar-system/saturn', label: 'Saturn and Its Rings', href: '/solar-system/saturn', region: 'Outer Solar System', planet: 'saturn'},
  {id: 'solar-system/uranus', label: 'Uranus', href: '/solar-system/uranus', region: 'Outer Solar System', planet: 'uranus'},
  {id: 'solar-system/neptune', label: 'Neptune', href: '/solar-system/neptune', region: 'Outer Solar System', planet: 'neptune'},
  {id: 'solar-system/beyond-neptune', label: 'Beyond Neptune', href: '/solar-system/beyond-neptune', region: 'Beyond', planet: 'beyond'},
];

export const JOURNEY_TOTAL = JOURNEY_STOPS.length;

export function getStopIndex(id: string): number {
  return JOURNEY_STOPS.findIndex((stop) => stop.id === id);
}

export function getPrevStop(id: string): JourneyStop | undefined {
  const index = getStopIndex(id);
  return index > 0 ? JOURNEY_STOPS[index - 1] : undefined;
}

export function getNextStop(id: string): JourneyStop | undefined {
  const index = getStopIndex(id);
  return index >= 0 && index < JOURNEY_STOPS.length - 1
    ? JOURNEY_STOPS[index + 1]
    : undefined;
}
