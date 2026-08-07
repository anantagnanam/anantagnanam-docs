import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * The learning journey sidebar.
 *
 * With `routeBasePath: '/'`, doc ids map directly to clean URLs:
 *   solar-system/mars   →  /solar-system/mars
 *   activities/quiz     →  /activities/quiz
 *   demo/how-mdx-works  →  /demo/how-mdx-works
 */
const sidebars: SidebarsConfig = {
  learningSidebar: [
    {
      type: 'category',
      label: 'The Journey',
      collapsed: false,
      items: ['solar-system/journey-begins'],
    },
    {
      type: 'category',
      label: 'Explore the Solar System',
      collapsed: false,
      items: [
        'solar-system/sun',
        'solar-system/mercury',
        'solar-system/venus',
        'solar-system/earth',
        'solar-system/moon',
        'solar-system/mars',
        'solar-system/jupiter',
        'solar-system/saturn',
        'solar-system/uranus',
        'solar-system/neptune',
        'solar-system/beyond-neptune',
      ],
    },
    {
      type: 'category',
      label: 'Activities',
      collapsed: false,
      items: [
        'activities/quiz',
        'activities/did-you-know',
        'activities/compare-planets',
      ],
    },
    {
      type: 'category',
      label: 'How This Demo Works',
      collapsed: false,
      items: [
        'demo/how-mdx-works',
        'demo/content-authoring',
        'demo/github-pages',
      ],
    },
  ],
};

export default sidebars;
