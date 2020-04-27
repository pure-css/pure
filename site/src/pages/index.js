import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '../../components/CodeBlock';
import { filePercent, fileSize } from '../../lib/utils';
import styles from './styles.css';

const renderModuleSize = (filesizes) => {
    const modules = ['base', 'grids', 'forms', 'buttons', 'tables', 'menus'];
    return modules.map((module, idx) => (
        <div key={idx} className={`size-chart-${module} pure-u`} style={{width: filePercent({ modules, module, filesizes })}}>
            <Link className="size-chart-item" to={`/${module}`}>
                <span className="size-chart-label">
                    <span className="size-chart-mod">{module}</span>
                    <span className="size-chart-size">{fileSize({ module, filesizes })}</span>
                </span>
            </Link>
        </div>
    ));
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {
      customFields: {
          moduleSizes,
          PURE_DOWNLOAD_SNIPPET,
          pureVersion,
      },
      organizationName,
      projectName,
  } = siteConfig;
  const renderSize = renderModuleSize(moduleSizes);
  return (
    <Layout description={siteConfig.tagline}>
      <div className="hero">
          <div className="hero-titles">
              <img className="logo" src={useBaseUrl('img/logo_pure@2x.png')} alt="Pure" />

              <h2 className="hero-tagline">A set of small, responsive CSS modules that you can use in every web project.</h2>
          </div>

          <div className="hero-cta">
              <CodeBlock full={true} wrap={true}>{PURE_DOWNLOAD_SNIPPET}</CodeBlock>

              <p>
                  <Link className="button-cta pure-button" to="/start/">Get Started</Link>
                  <a className="button-secondary pure-button" href={`https://github.com/${organizationName}/${projectName}/`}>View on GitHub</a>
              </p>
          </div>
      </div>
      <div className="marketing">
          <div className="size-chart pure-g">
              {renderSize}
          </div>

          <div className="content">
              <h3 className="marketing-header">CSS with a minimal footprint.</h3>

              <p>
                  Pure is ridiculously tiny. The entire set of modules clocks in at <b>{fileSize({ module: 'pure', filesizes: moduleSizes })}* minified and gzipped</b>. Crafted with mobile devices in mind, it was important to us to keep our file sizes small, and every line of CSS was carefully considered. If you decide to only use a subset of these modules, you'll save even more bytes.
              </p>

              <p style={{fontSize: 'smaller'}}>
                  * We can add correctly :) the numbers above are individual module sizes; when grouped together they compress (gzip) even more.
              </p>
          </div>
      </div>
      <div className="marketing l-wrap pure-g">
          <div className="content pure-u-1 u-sm-1-2 u-xl-1-3">
              <h3 className="marketing-header">Your CSS foundation.</h3>
              <p>
                  Pure builds on <a href="http://necolas.github.io/normalize.css/">Normalize.css</a> and provides layout and styling for native HTML elements, plus the most common UI components. It's what you need, without the cruft.
              </p>
          </div>

          <div className="content pure-u-1 u-sm-1-2 u-xl-1-3">
              <h3 className="marketing-header">Made with mobile in mind.</h3>

              <p>
                  Pure is responsive out of the box, so elements look great on all screen sizes.
              </p>
          </div>

          <div className="content pure-u-1 u-lg-3-4 u-xl-1-3">
              <h3 className="marketing-header">Stays out of your way.</h3>

              <p>
                  Pure has minimal styles and encourages you to write your application styles on top of it. It's designed to get out of your way and makes it easy to override styles.
              </p>
          </div>
      </div>
      <div className="marketing l-wrap pure-g">
          <div className="marketing-diagram content pure-u-1 u-sm-2-3 u-md-1-2">
              <Link to="/layouts">
                <img src={useBaseUrl('img/layout-icon.jpg')} className="pure-img-responsive" alt="Diagram of a sample layout." />
              </Link>
          </div>

          <div className="content pure-u-1 u-md-1-2">
              <h3 className="marketing-header">Create responsive layouts.</h3>
              <p>
                  By using <a href="/grids/">Grids</a>, <a href="/menus/">Menus</a>, and more, it's easy to create beautiful responsive layouts for all screen sizes. We've made it easy for you to get started. Take a look at a few different <a href="/layouts/">layouts</a> and start your next web project with a rock-solid foundation.
              </p>
              <p>
                  <Link to="/layouts/" className="pure-button">View Layouts</Link>
              </p>
          </div>
      </div>
      <div className="marketing marketing-customize l-wrap pure-g">
          <div className="content pure-u-1 u-md-1-2">
              <h3 className="marketing-header">Create your own look and feel.</h3>
              <p>
                  Unlike other frameworks, Pure's design is unopinionated, minimal and flat. We believe that it's much easier to add new CSS rules than to overwrite existing rules. By adding a few lines of CSS, you can customize Pure's appearance to work with your web project.
              </p>
              <p>
                  <Link to="/extend/" className="pure-button">Extend Pure</Link>
              </p>
          </div>
          <div className="sample-buttons content pure-u-1 u-md-1-2">
              <div className="pure-g">
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="pure-button">Default</button>
                  </span>
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="button-a pure-button">Blue</button>
                  </span>
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="button-b pure-button">Yellow</button>
                  </span>
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="button-c pure-button">Black</button>
                  </span>
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="button-d pure-button">Green</button>
                  </span>
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="button-e pure-button">Red</button>
                  </span>
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="button-f pure-button">Purple</button>
                  </span>
                  <span className="sample-button pure-u-1-2 u-sm-1-3">
                    <button className="button-g pure-button">Orange</button>
                  </span>
                  <span className="sample-button pure-u-1 u-sm-1-3">
                    <button className="button-h pure-button">Indigo</button>
                  </span>
              </div>
          </div>
      </div>
    </Layout>
  );
}

export default Home;
