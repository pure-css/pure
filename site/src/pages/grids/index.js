import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import CodeBlock from '../../../components/CodeBlock';
import SectionHeader from '../../../components/SectionHeader';
import { stripIndent } from 'common-tags';

import './styles.css';

const title = 'Grids';
const description = 'Fully customizable and responsive CSS grids.';

function Grids() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const {
        customFields: {
            pureVersion
        }
    } = siteConfig;
    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content">
                <SectionHeader heading="Introduction to Pure Grids" />

                <p>Pure Grids are easy to work with, and very powerful. There are a few simple concepts to keep in mind:</p>

                <dl>
                    <dt>Grid classes vs. unit classes</dt>
                    <dd>
                        Pure Grids consist of two types of classes: the grid class (<code>pure-g</code>) and unit classes (<code>pure-u</code> or <code>pure-u-*</code>)
                    </dd>
                    <dt>The widths of the units are fractions</dt>
                    <dd>
                        Units have various class names that represent their widths. For example, <code>pure-u-1-2</code> has a width of 50%, whereas <code>pure-u-1-5</code> would have a width of 20%.
                    </dd>
                    <dt>All child elements of a grid must be units</dt>
                    <dd>
                        Child elements contained within an element with a <code>pure-g</code> classname <em>must</em> be a grid unit with a <code>pure-u</code> or <code>pure-u-*</code> classname.
                    </dd>
                    <dt>Content goes inside grid units</dt>
                    <dd>
                        All content which is visible to people needs to be contained inside a grid unit. This ensures that the content will be rendered properly.
                    </dd>
                </dl>

                <aside>
                    <p>When setting a <code>font-family</code> in your project, be sure to check out the section on <Link to="#using-grids-with-your-font-family">using Grids with your font-family</Link>.</p>
                </aside>

                <p>
                    Let's start with a simple example. Here's a grid with three columns:
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

                <SectionHeader heading="Grids Units Sizes" />

                <p>
                    Pure ships with both a <b>5ths</b> and <b>24ths</b> based grid. Depicted below are the available units that can be appended to the <b><code>pure-u-*</code></b> classname where <code>*</code> is one of the unit fractions listed below. For example the unit classname for 50% width is: <code>pure-u-1-2</code>.
                </p>

                <h3>5ths-Based Units</h3>

                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-5</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-5"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">2-5</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-2-5"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">3-5</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-3-5"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">4-5</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-4-5"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-1</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-1"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">5-5</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-5-5"></div>
                        </div>
                    </div>
                </div>

                <h3>24ths-Based Units</h3>

                <div className="grids-unit pure-g">
                    <div className="grids-unit-width pure-u">1-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-12</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-12"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">2-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-2-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">3-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-3-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-8</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-8"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">4-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-4-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-6</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-6"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">5-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-5-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-4</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-4"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">6-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-6-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">7-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-7-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-3</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-3"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">8-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-8-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">3-8</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-3-8"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">9-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-9-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">5-12</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-5-12"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">10-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-10-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">11-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-11-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-2</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-2"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">12-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-12-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">13-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-13-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">7-12</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-7-12"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">14-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-14-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">5-8</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-5-8"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">15-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-15-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">2-3</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-2-3"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">16-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-16-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">17-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-17-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">3-4</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-3-4"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">18-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-18-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">19-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-19-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">5-6</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-5-6"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">20-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-20-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">7-8</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-7-8"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">21-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-21-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">11-12</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-11-12"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">22-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-22-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">23-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-23-24"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit  pure-g">
                    <div className="grids-unit-width pure-u">1-1</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-1-1"></div>
                        </div>
                    </div>
                </div>
                <div className="grids-unit grids-unit-not-reduced pure-g">
                    <div className="grids-unit-width pure-u">24-24</div>
                    <div className="grids-unit-details pure-u-1">
                        <div className="pure-g">
                            <div className="grids-unit-bar pure-u-24-24"></div>
                        </div>
                    </div>
                </div>

                <h3>Custom Unit Sizes</h3>

                <p>
                    We are working on building tools to allow people to customize Pure Grids. The first low-level tools, the <b><a href="https://github.com/ericf/rework-pure-grids">Pure Grids Rework Plugin</a></b>, is available to use today&mdash;we use this tool to generate Pure's built-in unit sizes.
                </p>

                <SectionHeader heading="Pure Responsive Grids" />

                <p>
                    Pure has a mobile-first responsive grid system that can be used declaratively through CSS class names. It's a robust and flexible grid  that builds on top of the default grid.
                </p>

                <h3>Including on Your Page</h3>

                <p>
                    Since media queries cannot be over-written, we <u>do not</u> include the grid system as part of <code>pure.css</code>. You'll have to pull it in as a separate CSS file. You can do this by adding the following <code>&lt;link&gt;</code> tag to your page.
                </p>

                <CodeBlock>
                    {`<link rel="stylesheet" href="https://unpkg.com/purecss@${pureVersion}/build/grids-responsive-min.css" />`}
                </CodeBlock>

                <h3>Pure's Regular Grid vs. Responsive Grid</h3>

                <p>
                    The best way to understand the difference between Pure's regular grid and a responsive grid is through an example.The snippet below shows how regular Pure Grids are written. These grids are unresponsive. They'll always be <code>width: 33.33%</code>, irrespective of the width of the screen.
                </p>

                <CodeBlock wrap={true}>
                    {stripIndent`
                        <div class="pure-g">
                            <div class="pure-u-1-3"> ... </div>
                            <div class="pure-u-1-3"> ... </div>
                            <div class="pure-u-1-3"> ... </div>
                        </div>
                    `}
                </CodeBlock>

                <p>
                    Next, let's look at a responsive grid. Elements within this grid will be <code>width: 100%</code> on small screens, but will shrink to become <code>width: 33.33%</code> on medium-sized screens and above.
                </p>

                <CodeBlock wrap={true}>
                    {stripIndent`
                        <div class="pure-g">
                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>
                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>
                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>
                        </div>
                    `}
                </CodeBlock>

                <h3>Default Media Queries</h3>

                <p>
                    When using Responsive Grids, you can control how the grid behaves at specific breakpoints by adding class names. Pure's default responsive grids comes with the following class names and media query breakpoints.
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

                {/*
                <aside>
                    <p>
                        If you want to customize these media query breakpoints, head over to the <Link to="/start/#build-your-pure-starter-kit">Get Started</Link> page and generate your own custom grid.
                    </p>
                </aside>
                */}

                <h3>Using Relative Units for Widths</h3>

                <p>
                    You may have noticed that we use <code>em</code> for our default CSS Media Query widths instead of <code>px</code>. This was a conscious decision since it allows the Media Queries to respond appropriately when people zoom the webpage. Check out <a href="http://bradfrostweb.com/blog/post/7-habits-of-highly-effective-media-queries/#relative">this article by Brad Frost</a> for some background information on using relative units within Media Queries.
                </p>

                <p>
                    If you do want to use units other than <code>em</code>, you can always modify the default Media Queries on the <a href="/start/#build-your-pure-starter-kit">Get Started</a> page. Converting from <code>em</code> to <code>px</code> is pretty simple:
                </p>

                <CodeBlock wrap={true}>
                    {'1em == 16px *'}
                </CodeBlock>

                <p>
                    <small>
                    * The <code>em</code> to <code>px</code> conversion is based on the browser's default font size, which is generally <code>16px</code>, but can be overridden by a user in their browser settings.
                    </small>
                </p>

                <h3>An Example of Pure Responsive Grids</h3>

                <p>
                    The example below leverages Pure's Responsive Grid to create a row with four columns. The columns stack on small screens, take up <code>width: 50%</code> on medium-sized screens, and <code>width: 25%</code> on large screens.
                </p>

                <p>
                    This is done by adding the <code>.pure-u-1</code> class for small screens, <code>.pure-u-md-1-2</code> for medium-sized screens, and <code>.pure-u-lg-1-4</code> for large screens. <em>Resize the page to see the grid respond to the screen size.</em>
                </p>
            </div>

            <div className="grids-example">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="l-box">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="l-box">
                            <h3>Dolor Sit Amet</h3>
                            <p>
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="l-box">
                            <h3>Proident laborum</h3>
                            <p>
                                In culpa qui officia deserunt mollit anim id est laborum. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <div className="l-box">
                            <h3>Praesent consectetur</h3>
                            <p>
                                Integer vitae lectus accumsan, egestas dui eget, ullamcorper urn. In feugiat tortor at turpis rhoncus tincidunt. Duis sed porttitor ante, eget venenatis lectus.
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <img className="pure-img" src="https://s3.amazonaws.com/ooomf-com-files/wjNV6gWuQkqeuH8txHc9_sylwiabartyzel_unsplash_tatry_03.jpg" alt="By Sylwia Bartyzel from unsplash.com"  />
                    </div>
                    <div className="pure-u-2-5">
                        <div className="l-box">
                            <h3>Two-Fifth Column</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum dui turpis.
                            </p>
                        </div>
                    </div>
                    <div className="pure-u-3-5">
                        <div className="l-box">
                            <h3>Three-Fifth Column</h3>
                            <p>
                                Quisque ac magna eget est porta varius ut eget quam. Curabitur tincidunt gravida nisl.
                            </p>
                            <p>
                                Fusce accumsan, sem vitae tempus tempor, nulla lectus interdum felis, eget molestie urna mauris vel elit. Curabitur vel ipsum nulla.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <SectionHeader heading="Grids on Mobile" />

                <p>
                    Pure's default grid system is mobile-first. If you want to have a grid on small screens, just use the <code>pure-u-*</code> classnames on your elements.
                </p>
            </div>

            <div className="grids-example">
                <div className="pure-g">
                    <div className="pure-u-1-3">
                        <div className="l-box">
                            <h3>Thirds</h3>
                            <p>This cell will be 1/3 width all the time.</p>
                        </div>
                    </div>
                    <div className="pure-u-1-3">
                        <div className="l-box">
                            <h3>Thirds</h3>
                            <p>This cell will be 1/3 width all the time.</p>
                        </div>
                    </div>
                    <div className="pure-u-1-3">
                        <div className="l-box">
                            <h3>Thirds</h3>
                            <p>This cell will be 1/3 width all the time.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <SectionHeader heading="Responsive Images" />

                <p>
                    When using Responsive Grids, you'll want your images to be fluid as well so they grow and shrink with the content, while maintaining the correct ratio. To do this, just add the <code>.pure-img</code> class on them. Check out the example below.
                </p>
            </div>

            <div className="grids-example">
                <div className="pure-g">
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg" alt="Peyto Lake" />
                    </div>
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg" alt="Train" />
                    </div>
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg" alt="T-Shirt Store" />
                    </div>
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg" alt="Mountain" />
                    </div>
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm8.staticflickr.com/7478/16185861115_4ed6353a97.jpg" alt="Miami" />
                    </div>
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm3.staticflickr.com/4068/4666556755_091acf3253.jpg" alt="BCE Place, Toronto" />
                    </div>
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm6.staticflickr.com/7313/13136053333_f04b335933.jpg" alt="Banff" />
                    </div>
                    <div className="pure-u-1-4 pure-u-lg-1-8">
                        <img className="pure-img" src="http://farm3.staticflickr.com/7628/16754137141_27dcaabd24.jpg" alt="Boston North Point Park" />
                    </div>
                </div>
            </div>

            <div className="content">
                <SectionHeader heading="Applying Padding and Borders to Grid Units" />

                <p>
                    To add borders and padding to Pure Grids, you have two options. The first option is to nest a <code>&lt;div&gt;</code> inside each Grid unit and style the child container:
                </p>

                <CodeBlock wrap={true}>
                    {stripIndent`
                        <style>
                            .l-box {
                                padding: 1em;
                            }
                        </style>

                        ...

                        <div class="pure-g">
                            <div class="pure-u-1-2">
                                <div class="l-box"> ... </div>
                            </div>
                            <div class="pure-u-1-2">
                                <div class="l-box"> ... </div>
                            </div>
                        </div>
                    `}
                </CodeBlock>

                <p>
                    The second option is to add borders and padding directly to a grid unit. This would ordinarily risk breaking the layout, but you can easily avoid this problem by augmenting the behavior of the grid itself with a <code>box-sizing: border-box</code> rule:
                </p>

                <CodeBlock wrap={true}>
                    {stripIndent`
                        <style>
                            .pure-g > div {
                                box-sizing: border-box;
                            }
                            .l-box {
                                padding: 1em;
                            }
                        </style>

                        ...

                        <div class="pure-g">
                            <div class="pure-u-1-2 l-box"> ... </div>
                            <div class="pure-u-1-2 l-box"> ... </div>
                        </div>
                    `}
                </CodeBlock>

                <p>
                    Using <code>box-sizing: border-box</code> keeps your markup cleaner, but has one minor drawback. Setting this property on all grid units makes it harder to override or unset the value later on. As an unopinionated library, Pure lets <code>box-sizing</code> remain at the default value of <code>content-box</code> and leaves the choice up to you.
                </p>

                <SectionHeader heading="Using Grids with Your Font-Family" />

                <p>
                    Pure Grids use a specific font stack to ensure the greatest OS/browser compatibility, and by default grid units will have <code>font-family: sans-serif;</code> applied — this is the default font stack Pure's Base (Normalize.css) applies to <code>&lt;html&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;textarea&gt;</code> elements. Fortunately, it's quite easy to make sure your project's font stack applies to all content when using Pure. Instead of applying your <code>font-family</code> to only the <code>&lt;body&gt;</code> element, apply it like this:
                </p>

                <CodeBlock wrap={true}>
                    {stripIndent`
                        <style>
                        /*
                        When setting the primary font stack, apply it to the Pure grid units along
                        with "html", "button", "input", "select", and "textarea". Pure Grids use
                        specific font stacks to ensure the greatest OS/browser compatibility.
                        */
                        html, button, input, select, textarea,
                        .pure-g [class *= "pure-u"] {
                            /* Set your content font stack here: */
                            font-family: Georgia, Times, "Times New Roman", serif;
                        }
                        </style>
                    `}
                </CodeBlock>

                <SectionHeader heading="Want to just use Grids?" />

                <p>
                    Grids is part of the Pure CSS file. However, if you just want Grids and not the other modules, you can pull it down separately. Just include these <code>&lt;link&gt;</code> elements in your <code>&lt;head&gt;</code>.
                </p>

                <CodeBlock>
                    {stripIndent`
                        <link rel="stylesheet" href="https://unpkg.com/purecss@${pureVersion}/build/base-min.css">
                        <link rel="stylesheet" href="https://unpkg.com/purecss@${pureVersion}/build/grids-min.css">
                        <link rel="stylesheet" href="https://unpkg.com/purecss@${pureVersion}/build/grids-responsive-min.css">
                    `}
                </CodeBlock>

                {/*
                <aside>
                    <p>
                        Optionally, you can head over to the <a href="/start/#build-your-pure-starter-kit">Get Started</a> page to make your very own grid with custom media query breakpoints and column sizes. Download the CSS and HTML file when you're done and get started quickly!
                    </p>
                </aside>
                */}
            </div>
        </Layout>
    );
}

export default Grids;
