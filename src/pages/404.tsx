import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

/**
 * Custom 404 — "Looks like this path drifted beyond our map of knowledge."
 */
export default function NotFound(): React.JSX.Element {
  return (
    <Layout
      title="Page Not Found"
      description="This path drifted beyond our map of knowledge."
    >
      <main className="container margin-vert--xl">
        <div className={styles.notFound}>
          <p className={styles.notFoundEyebrow}>✦ LOST IN THE COSMOS</p>
          <h1 className={styles.notFoundTitle}>Looks like this path drifted beyond our map of knowledge.</h1>
          <p className={styles.notFoundDesc}>
            The page you are looking for may have been moved, renamed, or is still
            waiting to be discovered. Even the best navigators take a wrong turn now
            and then.
          </p>
          <div className={styles.notFoundActions}>
            <Link className={styles.notFoundPrimary} to="/">
              Return Home
            </Link>
            <Link className={styles.notFoundGhost} to="/solar-system/journey-begins">
              Explore the Solar System
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
