/**
 * Static data for the Planet Explorer and fact cards.
 * All values are deliberately approximate and broadly accurate —
 * moon counts and measurements keep improving as we learn more.
 */

export interface PlanetData {
  key: string;
  name: string;
  type: string;
  orderFromSun: number;
  diameter: string;
  yearLength: string;
  dayLength: string;
  moons: number;
  distanceCategory: string;
  temperature: string;
  notableFeature: string;
  funFact: string;
}

export const PLANETS: PlanetData[] = [
  {
    key: 'mercury',
    name: 'Mercury',
    type: 'Rocky Planet',
    orderFromSun: 1,
    diameter: '4,879 km',
    yearLength: '88 Earth days',
    dayLength: '59 Earth days',
    moons: 0,
    distanceCategory: 'Closest to the Sun',
    temperature: '−173 °C to 427 °C',
    notableFeature: 'The fastest year of any planet',
    funFact: 'A single Mercury day (sunrise to sunrise) lasts about 176 Earth days — two of its years!',
  },
  {
    key: 'venus',
    name: 'Venus',
    type: 'Rocky Planet',
    orderFromSun: 2,
    diameter: '12,104 km',
    yearLength: '225 Earth days',
    dayLength: '243 Earth days',
    moons: 0,
    distanceCategory: 'Earth\u2019s neighbor inward',
    temperature: 'About 465 °C',
    notableFeature: 'The hottest planet — a runaway greenhouse',
    funFact: 'Venus spins so slowly that one Venus day is longer than its whole year.',
  },
  {
    key: 'earth',
    name: 'Earth',
    type: 'Rocky Planet',
    orderFromSun: 3,
    diameter: '12,742 km',
    yearLength: '365.25 Earth days',
    dayLength: '24 hours',
    moons: 1,
    distanceCategory: 'The third world from the Sun',
    temperature: 'About 15 °C on average',
    notableFeature: 'The only world we know that supports life',
    funFact: 'About 71% of Earth\u2019s surface is covered in liquid water — the blue we see from space.',
  },
  {
    key: 'mars',
    name: 'Mars',
    type: 'Rocky Planet',
    orderFromSun: 4,
    diameter: '6,779 km',
    yearLength: '687 Earth days',
    dayLength: '24.6 hours',
    moons: 2,
    distanceCategory: 'The first world beyond Earth',
    temperature: 'About −60 °C on average',
    notableFeature: 'Home to the tallest volcano in the Solar System',
    funFact: 'Mars has seasons like Earth — but each season lasts about twice as long.',
  },
  {
    key: 'jupiter',
    name: 'Jupiter',
    type: 'Gas Giant',
    orderFromSun: 5,
    diameter: '139,820 km',
    yearLength: '11.9 Earth years',
    dayLength: 'Under 10 hours',
    moons: 95,
    distanceCategory: 'The first of the giant worlds',
    temperature: 'About −110 °C (cloud tops)',
    notableFeature: 'The largest planet — more massive than all others combined',
    funFact: 'The Great Red Spot is a storm larger than Earth that has raged for centuries.',
  },
  {
    key: 'saturn',
    name: 'Saturn',
    type: 'Gas Giant',
    orderFromSun: 6,
    diameter: '116,460 km',
    yearLength: '29.4 Earth years',
    dayLength: 'About 10.7 hours',
    moons: 146,
    distanceCategory: 'The sixth world from the Sun',
    temperature: 'About −140 °C (cloud tops)',
    notableFeature: 'The famous rings of ice and rock',
    funFact: 'Saturn is the least dense planet — it would float in a big enough ocean.',
  },
  {
    key: 'uranus',
    name: 'Uranus',
    type: 'Ice Giant',
    orderFromSun: 7,
    diameter: '50,724 km',
    yearLength: '84 Earth years',
    dayLength: 'About 17 hours',
    moons: 28,
    distanceCategory: 'The sideways world',
    temperature: 'About −195 °C',
    notableFeature: 'Rolls around the Sun on its side',
    funFact: 'Uranus was the first planet found with a telescope — spotted in 1781.',
  },
  {
    key: 'neptune',
    name: 'Neptune',
    type: 'Ice Giant',
    orderFromSun: 8,
    diameter: '49,244 km',
    yearLength: '165 Earth years',
    dayLength: 'About 16 hours',
    moons: 16,
    distanceCategory: 'The farthest planet',
    temperature: 'About −200 °C',
    notableFeature: 'The windiest world in the Solar System',
    funFact: 'Neptune was found by mathematics — astronomers calculated where it must be before a telescope ever saw it.',
  },
];
