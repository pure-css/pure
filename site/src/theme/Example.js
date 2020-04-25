import React from 'react';
import Head from '@docusaurus/Head';

// load common custom css
import '../../../build/pure-min.css';
import '../../../build/grids-responsive-min.css';

function Layout(props) {
  const {
    children,
    description,
    title,
    type,
  } = props;
  return (
      <>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {title && <title>{title} - Layout Examples</title>}
          {description && <meta name="description" content={description} />}
        </Head>
        {children}
      </>
  );
}

export default Layout;
