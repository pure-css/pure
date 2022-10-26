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
                  You can add Pure to your page via the <b>free jsDelivr CDN</b>. Just add the following <code>&lt;link&gt;</code> element into your page's <code>&lt;head&gt;</code>, before your project's stylesheets.
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
                    {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@${pureVersion}/build/grids-responsive-min.css">`}
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
                            <tr>
                                <td className="highlight"><b><code>xxl</code></b></td>
                                <td className="mq-table-mq highlight"><code>@media screen and (min-width: 120em)</code></td>
                                <td>≥ <b>1920px</b></td>
                                <td><code>.pure-u-<b>xxl</b>-*</code></td>
                            </tr>
                            <tr>
                                <td className="highlight"><b><code>xxxl</code></b></td>
                                <td className="mq-table-mq highlight"><code>@media screen and (min-width: 160em)</code></td>
                                <td>≥ <b>2560px</b></td>
                                <td><code>.pure-u-<b>xxxl</b>-*</code></td>
                            </tr>
                            <tr>
                                <td className="highlight"><b><code>x4k</code></b></td>
                                <td className="mq-table-mq highlight"><code>@media screen and (min-width: 240em)</code></td>
                                <td>≥ <b>3840px</b></td>
                                <td><code>.pure-u-<b>x4k</b>-*</code></td>
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
        </Layout>
    );
}

export default Start;
