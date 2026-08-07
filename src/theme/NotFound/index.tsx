/**
 * NotFound theme override — full-page 404.
 *
 * Rendered by the `*` catch-all route at SSG time to produce the static
 * build/404.html. At runtime, unknown paths land in the docs root route
 * (routeBasePath: '/') and are rendered by @theme/DocRoot via
 * @theme/NotFound/Content — so the shared custom content lives there.
 */
import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

export default function NotFound(): React.JSX.Element {
  return (
    <>
      <PageMetadata title="Page Not Found" />
      <Layout description="This path drifted beyond our map of knowledge.">
        <NotFoundContent />
      </Layout>
    </>
  );
}
