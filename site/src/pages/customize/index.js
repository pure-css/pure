import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import CodeBlock from '../../../components/CodeBlock';
import SectionHeader from '../../../components/SectionHeader';
import { fileSize } from '../../../lib/utils';

const title = 'Customize';
const description = 'Choose the modules that you need.';

function Customize() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const {
        customFields: {
            moduleSizes: filesizes,
            pureVersion,
        },
    } = siteConfig;
    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content">
                <SectionHeader heading="Rollups" />

                <p>
                    Rollups consist of all the modules in Pure. There are two rollups available - a regular (responsive) one, and a non-responsive one. Choose that one that's right for your project.
                </p>

                <div className="table-responsive">
                    <table className="pure-table pure-table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>URL</th>
                                <th>Size (gzip)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Responsive Rollup</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/pure-min.css</td>
                                <td>{fileSize({ module: 'pure', filesizes })}</td>
                            </tr>
                            <tr>
                                <td>Non-Responsive Rollup</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/pure-nr-min.css</td>
                                <td>{fileSize({ module: 'pure-nr', filesizes })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <aside>                
                    <p>
                        You will need to include the grid stylesheets separately as they are not included in the rollup. The non-responsive rollup does not include media queries, thus making it easier for you to override styles in the base library. Additionally, you can also create a <Link to="/grids/#pure-responsive-grids">custom grid</Link> that better suits your projects needs.
                    </p>
                </aside>

                <h3>Alternate CDNs</h3>

                <p>
                    The main host for Pure is the unpkg CDN where Pure is available over HTTPS. The following table lists alternate CDNs where Pure is hosted.
                </p>

                <div className="table-responsive">
                    <table className="pure-table pure-table-bordered">
                        <thead>
                            <tr>
                                <th>CDN</th>
                                <th>URL</th>
                                <th>HTTPS</th>
                                <th>Combo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="http://cdnjs.com/">cdnjs</a></td>
                                <td>{`//cdnjs.cloudflare.com/ajax/libs/pure/${pureVersion}/build/pure-min.css`}</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td><a href="https://www.keycdn.com/">KeyCDN</a></td>
                                <td>{`//opensource.keycdn.com/pure/${pureVersion}/pure-min.css`}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td><a href="http://www.osscdn.com/">OSS MaxCDN</a></td>
                                <td>{`//oss.maxcdn.com/libs/pure/${pureVersion}/pure-min.css`}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td><a href="http://rawgit.com/">RawGit</a></td>
                                <td>{`//cdn.rawgit.com/pure-css/pure-release/v${pureVersion}/pure-min.css`}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td><a href="http://www.staticfile.org/">Staticfile</a></td>
                                <td>{`//cdn.staticfile.org/pure/${pureVersion}/pure-min.css`}</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    <b>Note:</b> If the latest version of Pure is not yet on one of the alternate CDNs, please contact them to update to the latest version of Pure: <b>{pureVersion}.</b>
                </p>

                <SectionHeader heading="Individual Modules" />

                <p>
                    You can also pull in the following modules individually.
                </p>

                <div className="table-responsive">
                    <table className="pure-table pure-table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Base</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/base-min.css</td>
                            </tr>
                            <tr>
                                <td>Buttons</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/buttons-min.css</td>
                            </tr>
                            <tr>
                                <td>Forms (Responsive)</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/forms-min.css</td>
                            </tr>
                            <tr>
                                <td>Forms (Non-Responsive)</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/forms-nr-min.css</td>
                            </tr>
                            <tr>
                                <td>Grids (Base)</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/grids-min.css</td>
                            </tr>
                            <tr>
                                <td>Grids (Responsive)</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/grids-responsive-min.css</td>
                            </tr>
                            <tr>
                                <td>Menus (Responsive)</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/menus-min.css</td>
                            </tr>
                            <tr>
                                <td>Tables</td>
                                <td>https://unpkg.com/purecss@{pureVersion}/build/tables-min.css</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <SectionHeader heading="Combo Handling" />

                <p>
                    jsDelivr is a CDN that supports combo handling. Here's an example of a combo URL that includes the same CSS <a href="/base/">Base</a>, <a href="/grids/">Grids</a>, and <a href="/forms/">Forms</a> as above.
                </p>

                <CodeBlock>
                    {`<link rel="stylesheet" href="//cdn.jsdelivr.net/combine/npm/purecss@${pureVersion}/build/base-min.css,npm/purecss@${pureVersion}/build/grids-min.css,npm/purecss@${pureVersion}/build/forms-min.css" />`}
                </CodeBlock>

                <p>
                    See the <a href="https://github.com/jsdelivr/jsdelivr#combine-multiple-files">jsDelivr combo handler documentation</a> to learn more about its features.
                </p>

                <SectionHeader heading="Using Pure with Google AMP" />

                <p>
                    Google's <a href="https://www.ampproject.org/">Accelerated Mobile Pages</a> (AMP) allow web pages to get pre-rendered on Google at the cost of restrictions on JS and <a href="https://www.ampproject.org/docs/guides/responsive/style_pages#disallowed-styles">CSS</a>, such as completely inlining all styles rather than using stylesheets in external files such as those hosted at the CDNs mentioned above.
                </p>

                <p>
                    Furthermore, AMP disallows some CSS functionality. In Pure, the only bit currently used disallowed by AMP is '!important', currently used in the definition of the '.hidden' helper class. Removing this modifier should suffice to render Pure usable with AMP.
                </p>

                <SectionHeader heading="Contribute on GitHub" />

                <p>
                    Pure is an open-source project under the BSD License. We welcome issues, pull requests, and feedback. Check out our <a href="https://github.com/pure-css/pure">repo on GitHub</a>.
                </p>
            </div>
        </Layout>
    );
}

export default Customize;
