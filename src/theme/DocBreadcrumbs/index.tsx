/**
 * DocBreadcrumbs override — journey-aware breadcrumbs for lesson pages.
 *
 * When a page matches one of the Solar System journey stops, we render
 * breadcrumbs that mirror the learning journey (Solar System Journey →
 * Region → Lesson). Every other page falls back to the default Docusaurus
 * breadcrumbs.
 */
import React from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import {
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import DefaultDocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import {JOURNEY_STOPS} from '@site/src/components/learning/journeyData';

function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: {
  children: React.ReactNode;
  href?: string;
  isLast: boolean;
}): React.ReactNode {
  const className = isLast
    ? 'ag-breadcrumbs__current'
    : 'ag-breadcrumbs__link';
  if (isLast) {
    return <span className={className}>{children}</span>;
  }
  return href ? (
    <Link className={className} href={href}>
      <span>{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

function BreadcrumbsItem({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <li className="ag-breadcrumbs__item">{children}</li>;
}

function JourneyBreadcrumbs(): React.ReactNode | null {
  const {pathname} = useLocation();
  const stop = JOURNEY_STOPS.find((s) => s.href === pathname);
  if (!stop) {
    return null;
  }
  const homePageRoute = useHomePageRoute();
  const items: {href?: string; label: string}[] = [];
  if (homePageRoute) {
    items.push({href: '/', label: 'Home'});
  }
  items.push({href: '/solar-system/journey-begins', label: 'Solar System Journey'});
  items.push({label: stop.region});
  items.push({label: stop.label});
  return (
    <nav
      className={ThemeClassNames.docs.docBreadcrumbs}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}
    >
      <ul className="ag-breadcrumbs">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <li className="ag-breadcrumbs__sep" aria-hidden="true">
                  /
                </li>
              )}
              <BreadcrumbsItem>
                <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                  {item.label}
                </BreadcrumbsItemLink>
              </BreadcrumbsItem>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

export default function DocBreadcrumbs(): React.ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  if (!breadcrumbs) {
    return null;
  }
  const journey = JourneyBreadcrumbs();
  if (journey) {
    return journey;
  }
  return <DefaultDocBreadcrumbs />;
}
