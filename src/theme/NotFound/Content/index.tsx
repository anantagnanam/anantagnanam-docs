/**
 * NotFound/Content theme override.
 *
 * This is the sub-component rendered by:
 *  1. @theme/NotFound (full-page 404, from the `*` catch-all route — SSG 404.html)
 *  2. @theme/DocRoot when an unknown path lands inside the docs root route
 *     (routeBasePath: '/', so the docs route matches every URL at runtime)
 *
 * Keeping the content in this sub-module (mirroring theme-classic) ensures the
 * client-side SPA fallback shows the same custom experience as the static
 * 404.html, not the default "We could not find what you were looking for."
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

export default function NotFoundContent({
  className,
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className={styles.notFound}>
        <p className={styles.notFoundEyebrow}>✦ LOST IN THE COSMOS</p>
        <h1 className={styles.notFoundTitle}>
          Looks like this path drifted beyond our map of knowledge.
        </h1>
        <p className={styles.notFoundDesc}>
          The page you are looking for may have been moved, renamed, or is
          still waiting to be discovered. Even the best navigators take a
          wrong turn now and then.
        </p>
        <div className={styles.notFoundActions}>
          <Link className={styles.notFoundPrimary} to="/">
            Return Home
          </Link>
          <Link
            className={styles.notFoundGhost}
            to="/solar-system/journey-begins"
          >
            Explore the Solar System
          </Link>
        </div>
      </div>
    </main>
  );
}
