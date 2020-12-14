import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import SectionHeader from '../../../components/SectionHeader';
import CodeBlock from '../../../components/CodeBlock';
import { stripIndent } from 'common-tags';
import './styles.css';

const title = 'Get Started';
const description = 'Start your next web project with Pure.';

function Start() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const {
        customFields: {
            PURE_DOWNLOAD_SNIPPET,
            pureVersion
        }
    } = siteConfig;
    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content">
                <SectionHeader heading="Add Pure to Your Page" />

                <p>
                  You can add Pure to your page via the <b>free unpkg CDN</b>. Just add the following <code>&lt;link&gt;</code> element into your page's <code>&lt;head&gt;</code>, before your project's stylesheets.
                </p>
            </div>

            <CodeBlock full={true} wrap={true}>{PURE_DOWNLOAD_SNIPPET}</CodeBlock>

            <div className="content">
                <aside>
                    <p>
                      Alternatively, <a href="/customize/">check out other CDNs</a> that host Pure or you can install Pure via a <a href="/tools/">package manager</a>.
                    </p>
                </aside>

                <SectionHeader heading="Add the Viewport Meta Element" />

                <p>
                  The viewport <code>meta</code> element lets you control the the width and scale of the viewport on mobile browsers. Since you're building a responsive website, you want the width to be equal to the device's native width. Add this into your page's <code>&lt;head&gt;</code>.
                </p>
            </div>

            <CodeBlock full={true} wrap={true}>
                {'<meta name="viewport" content="width=device-width, initial-scale=1">'}
            </CodeBlock>

            <div className="content">
                <SectionHeader heading="Understand Pure Grids" />

                <p>
                  Pure's grid system is very simple. You create a row by using the <code>.pure-g</code> class, and create columns within that row by using the <code>pure-u-*</code> classes.
                </p>

                <p>
                  Here's a grid with three columns:
                </p>

                <CodeBlock wrap={true}>
                    {stripIndent`
                    <div class="pure-g">
                        <div class="pure-u-1-3"><p>Thirds</p></div>
                        <div class="pure-u-1-3"><p>Thirds</p></div>
                        <div class="pure-u-1-3"><p>Thirds</p></div>
                    </div>
                `}
                </CodeBlock>
            </div>

            <div className="grids-example">
                <div className="pure-g">
                    <div className="pure-u-1-3">
                        <p>Thirds</p>
                    </div>
                    <div className="pure-u-1-3">
                        <p>Thirds</p>
                    </div>
                    <div className="pure-u-1-3">
                        <p>Thirds</p>
                    </div>
                </div>
            </div>

            <div className="content">
                <SectionHeader heading="Responsive Grids" />

                <p>
                  Pure's grid system is also <b>mobile-first</b> and <b>responsive</b>, and you're able to customize the grid by specifying CSS Media Query breakpoints and grid classnames.
                    {/*If needed, you can <a href="#build-your-pure-starter-kit">customize Pure Grids below</a>, but let's start off with an example.*/}
                </p>

                <p>
                  You'll need to <em>also</em> include Pure's <code>grids-responsive.css</code> onto your page:
                </p>

                <CodeBlock wrap={true}>
                    {`<link rel="stylesheet" href="https://unpkg.com/purecss@${pureVersion}/build/grids-responsive-min.css">`}
                </CodeBlock>

                <p>
                  Here's the default responsive breakpoints included in <code>grids-responsive.css</code>:
                </p>

                <div className="table-responsive">
                    <table className="mq-table pure-table-bordered pure-table">
                        <thead>
                            <tr>
                                <th className="highlight">Key</th>
                                <th className="highlight">CSS Media Query</th>
                                <th>Applies</th>
                                <th>Classname</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="highlight"><i>None</i></td>
                                <td className="highlight"><i>None</i></td>
                                <td><i>Always</i></td>
                                <td><code>.pure-u-*</code></td>
                            </tr>
                            <tr>
                                <td className="highlight"><b><code>sm</code></b></td>
                                <td className="mq-table-mq highlight"><code>@media screen and (min-width: 35.5em)</code></td>
                                <td>≥ <b>568px</b></td>
                                <td><code>.pure-u-<b>sm</b>-*</code></td>
                            </tr>
                            <tr>
                                <td className="highlight"><b><code>md</code></b></td>
                                <td className="mq-table-mq highlight"><code>@media screen and (min-width: 48em)</code></td>
                                <td>≥ <b>768px</b></td>
                                <td><code>.pure-u-<b>md</b>-*</code></td>
                            </tr>
                            <tr>
                                <td className="highlight"><b><code>lg</code></b></td>
                                <td className="mq-table-mq highlight"><code>@media screen and (min-width: 64em)</code></td>
                                <td>≥ <b>1024px</b></td>
                                <td><code>.pure-u-<b>lg</b>-*</code></td>
                            </tr>
                            <tr>
                                <td className="highlight"><b><code>xl</code></b></td>
                                <td className="mq-table-mq highlight"><code>@media screen and (min-width: 80em)</code></td>
                                <td>≥ <b>1280px</b></td>
                                <td><code>.pure-u-<b>xl</b>-*</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                  Here's an example of what you'd be able to do. <i>Try resizing your screen to see how the grid responds.</i>
                </p>
            </div>
            <div className="grids-example">
                <div className="pure-g">
                    <div className="pure-u-1">.pure-u-1</div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                      .pure-u-1<br/>.pure-u-md-1-2<br/>.pure-u-lg-1-4
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                      .pure-u-1<br/>.pure-u-md-1-2<br/>.pure-u-lg-1-4
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                      .pure-u-1<br/>.pure-u-md-1-2<br/>.pure-u-lg-1-4
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                      .pure-u-1<br/>.pure-u-md-1-2<br/>.pure-u-lg-1-4
                    </div>
                    <div className="pure-u-1 pure-u-md-3-4">.pure-u-1<br/>.pure-u-md-3-4</div>
                    <div className="pure-u-1 pure-u-md-1-4">.pure-u-1<br/>.pure-u-md-1-4</div>
                </div>
            </div>
            {/*
          <div className="content">
              <aside>
                  <p>
                      <a href="/grids/#pure-responsive-grids">Learn More</a> about how to include and use Pure's Responsive Grids system, and how it compares to Basic Grids.
                  </p>
              </aside>
              <h2 id="build-your-pure-starter-kit" className="content-subhead">Build Your Pure Starter Kit<a href="#build-your-pure-starter-kit" className="content-link" title="Heading anchor"></a></h2>
              <p>
                  Now that you know how grids work, you might want to customize things to better suit your web project. You can define your own breakpoints by specifying a CSS Media Queries. You can also customize the number of columns that your layout needs.
              </p>
              <p>
                  We'll generate an <code>index.html</code> file, and if needed, a <code>grid.css</code> file that you can download and use as the starting-point for your project.
              </p>
              <div className="grid-input">
                  <ul className="grid-tabs pure-g">
                      <li className="grid-tab pure-u">
                          <a data-action="tab" className="grid-tab-link-selected grid-tab-link" href="#mqs">
                          Media Queries
                          </a>
                      </li>
                      <li className="grid-tab pure-u">
                          <a data-action="tab" className="grid-tab-link" href="#options">
                          Grid Options
                          </a>
                      </li>
                  </ul>
                  <div className="grid-content">
                      <form id="mqs" className="grid-panel-selected grid-panel pure-form-aligned pure-form">
                          <h3>Grids Media Queries</h3>
                          <p>
                              You can use Pure's default CSS Media Queries which will add <code>grids-responsive.css</code> to your Pure Starter Kit, or we can generate a mobile-first, responsive grid if you provide us with the breakpoints.
                          </p>
                          <p>
                              Pure's generated Responsive Grids is simple to use. It provides you with a specific CSS classname for each Media Query. For example, <code>pure-u-md-*</code> for devices with <code>width &gt;&#x3D; 768px</code>, and <code>pure-u-lg-*</code> for devices with <code>width &gt;&#x3D; 1024px</code>.
                          </p>
                          <p>
                              What Media Queries should your grid system respond to?
                          </p>
                          <table id="media-query-table" hidden>
                              <thead>
                                  <tr className="pure-g">
                                      <th className="pure-u-6-24">
                                          Grid Key <br/>
                                          <span className="media-query-table-example">
                                          <code>.pure-u-[key]-*</code>
                                          </span>
                                      </th>
                                      <th className="pure-u-15-24 pure-u-sm-16-24">
                                          Media Query <br/>
                                          <span className="media-query-table-example">
                                          <code>screen and (min-width: 48em)</code>
                                          </span>
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                              </tbody>
                          </table>
                          <div className="controls">
                              <button type="button" data-action="add-default-mq" className="pure-button pure-button-primary">
                                Use Default Media Queries
                              </button>
                              <button type="button" data-action="add-mq" className="pure-button">
                                Add Media Query
                              </button>
                          </div>
                      </form>
                      <form id="options" className="grid-panel pure-form-aligned pure-form">
                          <h3>Grid Options</h3>
                          <p>
                              Pure has a 5<sup>ths</sup> and 24<sup>ths</sup>-column grid system by default. You define an element's width using fractional classnames, e.g; <code>.pure-u-2-5</code> for <code>width: 40%</code>, or <code>.pure-u-12-24</code> for <code>width: 50%</code>. You can <a href="/grids/#grids-units-sizes">view all the grid units</a> that are available in the default grid.
                          </p>
                          <p>
                              You can customize the number of columns; the default grid is 24 columns. You can also change the Grids classname prefix; the default is <code>.pure-u-</code>.
                          </p>
                          <div>
                              <div className="cols-control pure-control-group">
                                  <label htmlFor="cols-input">Number of Columns</label>
                                  <input id="cols-input" data-content="cols-input"
                                      type="number" min="2" max="100" placeholder="24" />
                              </div>
                              <div className="prefix-control pure-control-group">
                                  <label htmlFor="prefix-input">Grid Prefix</label>
                                  <input id="prefix-input" data-content='prefix-input'
                                      type="text" maxLength="20" placeholder=".pure-u-"
                                      defaultValue="" />
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
              <div className="grid-download">
                  <p>
                      Your Pure Starter Kit will be generated below in real-time as you make your customizations. When you're ready, just download it!
                  </p>
              </div>
              <div className="grid-output-download">
                  <a download href="/start/download"
                      onClick="return Pure.trackDownload.call(this, 'start', 'default');"
                      className="download-link pure-button-primary pure-button">Download Your Starter Kit</a>
              </div>
              <p>
                  Here's what the downloaded zip file contains.
              </p>
              <div className="grid-output">
                  <div className="grid-output-tabs pure-g">
                      <div className="pure-u-1">
                          <ul className="grid-tabs pure-g">
                              <li className="grid-tab pure-u">
                                  <a data-action="tab" className="grid-tab-link-selected grid-tab-link" href="#html">
                                  index.html
                                  </a>
                              </li>
                              <li className="grid-tab pure-u">
                                  <a data-action="tab" className="grid-tab-link" href="#grid">
                                  grid.css
                                  </a>
                              </li>
                              <li className="grid-tab pure-u">
                                  <a data-action="tab" className="grid-tab-link" href="#grid-old-ie">
                                  grid-old-ie.css
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="grid-content">
                      <div id="html" className="grid-panel-selected grid-panel">
                          <pre className="code" data-language="html"><code>&lt;!doctype html&gt;
                              &lt;html&gt;
                              &lt;head&gt;
                                  &lt;meta charset&#x3D;&quot;utf-8&quot;&gt;
                                  &lt;meta name&#x3D;&quot;viewport&quot; content&#x3D;&quot;width&#x3D;device-width, initial-scale&#x3D;1.0&quot;&gt;

                                  &lt;title&gt;Your page title&lt;/title&gt;

                                  &lt;link rel&#x3D;&quot;stylesheet&quot; href&#x3D;&quot;https://unpkg.com/purecss@1.0.1/build/pure-min.css&quot;&gt;&lt;/head&gt;

                              &lt;body&gt;
                                  &lt;!--
                                  Your HTML goes here. Visit purecss.io/layouts/ for some sample HTML code.
                                  --&gt;
                              &lt;/body&gt;
                              &lt;/html&gt;</code></pre>
                      </div>
                      <div id="grid" className="grid-panel">
                          <div id="css" className="grid-code">
                              <p>
                                  You haven't specified any customization that require any additional CSS.
                              </p>
                          </div>
                      </div>
                      <div id="grid-old-ie" className="grid-panel">
                          <div id="css-old-ie" className="grid-code">
                              <p>
                                  You haven't specified any customization that requires IE-specific CSS.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <aside>
                  <p>
                      After downloading your Starter Kit, we recommend checking out <a href="/layouts/">our awesome layouts</a>. They're freely available to download. Use them to get started quickly with your next web project. Happy coding!
                  </p>
              </aside>
          </div>
          */}
        </Layout>
    );
}

export default Start;
