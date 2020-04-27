import React from 'react';
import Head from '@docusaurus/Head';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

// load common custom css
import '../../../build/pure-min.css';
import '../../../build/grids-responsive-min.css';
import '../../static/css/main-grid.css';
import '../../static/css/main.css';

function Layout(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {
    favicon,
    title: siteTitle,
    themeConfig: {image: defaultImage},
    url: siteUrl,
  } = siteConfig;
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    pageType,
    permalink,
    version,
  } = props;
  const metaTitle = title ? `${title} - ${siteTitle}` : siteTitle;

  const metaImage = image || defaultImage;
  let metaImageUrl = siteUrl + useBaseUrl(metaImage);
  if (!isInternalUrl(metaImage)) {
    metaImageUrl = metaImage;
  }

  const faviconUrl = useBaseUrl(favicon);

  return (
      <>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {metaTitle && <title>{metaTitle}</title>}
          {metaTitle && <meta property="og:title" content={metaTitle} />}
          {favicon && <link rel="shortcut icon" href={faviconUrl} />}
          {description && <meta name="description" content={description} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          {version && <meta name="docsearch:version" content={version} />}
          {keywords && keywords.length && (
            <meta name="keywords" content={keywords.join(',')} />
          )}
          {metaImage && <meta property="og:image" content={metaImageUrl} />}
          {metaImage && (
            <meta property="twitter:image" content={metaImageUrl} />
          )}
          {metaImage && (
            <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
          )}
          {permalink && (
            <meta property="og:url" content={siteUrl + permalink} />
          )}
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:200" />
        </Head>
        <div id="layout">
            <Menu />
            <div id="main" className={(title || 'home').toLowerCase()}>
                {children}
                <Footer siteConfig={siteConfig} />
            </div>
        </div>
      </>
  );
}

export default Layout;
