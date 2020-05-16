import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import CodeBlock from '../../../components/CodeBlock';
import SectionHeader from '../../../components/SectionHeader';
import { stripIndent } from 'common-tags';

const title = 'Tools';
const description = 'Write, manipulate, and do more with CSS.';

function Tools() {
    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content">
                <SectionHeader heading="Installing Pure with npm" />

                <p>
                You can add Pure to your project through <a href="https://www.npmjs.com/">npm</a>. This is our recommended way to to integrate Pure into your project's build process and tool chain.
                </p>

                <CodeBlock>$ npm install purecss --save</CodeBlock>

                <p>
                    <code>require(&#x27;purecss&#x27;)</code> will load an object with the following methods:
                </p>

                <ul>
                    <li><code>getFile(name)</code></li>
                &ndash; Retrieve contents of a Pure module file.
                    <li><code>getFilePath(name)</code></li>
                &ndash; Return full path to a Pure file.
                </ul>

                <SectionHeader heading="Installing Pure with Composer" />

                <p>
                You can also install Pure with <a href="https://getcomposer.org/">Composer</a>.
                </p>

                <CodeBlock>$ composer require pure-css/purecss</CodeBlock>

                <SectionHeader heading="Extending Pure with Grunt" />

                <p>
                We've written several tools that help you extend Pure and integrate it with your project's CSS. These tools are available as <b><a href="http://gruntjs.com">Grunt</a></b> plugins that can easily be integrated into your existing <code>Gruntfile.js</code>.
                </p>

                <aside>
                    <p>
                    If you haven't used Grunt before, it's very easy to set up. Just head over to the <a href="http://gruntjs.com/getting-started">Getting Started</a> page to learn more.
                    </p>
                </aside>

                <SectionHeader heading="Extending Pure with Rework" />

                <p>
                We've taken a layered approach to developing Pure's tooling. Most of the tools are first built as <b><a href="https://github.com/reworkcss/rework">Rework</a></b> plugins. This allows you to compose Pure's Rework plugins together with other Rework plugins. It also allows the Grunt plugins to be written as <em>very thin</em> wrappers.
                </p>

                <SectionHeader heading="Generating Custom Responsive Grids" />

                <p>
                Pure was created to help developer's build mobile-first responsive web projects. However, since CSS Media Queries cannot be over-written via CSS, you can use Pure's tooling to customize Pure's Responsive Grids for your project.
                </p>

                <h3>Via Grunt</h3>

                <p>
                Install the <a href="https://www.npmjs.org/package/grunt-pure-grids">Pure Grids Grunt Plugin</a> through npm.
                </p>

                <CodeBlock>$ npm install grunt-pure-grids --save-dev</CodeBlock>

                <p>
                Next, add it to your <code>Gruntfile.js</code>.
                </p>

                <CodeBlock>grunt.loadNpmTasks(&#x27;grunt-pure-grids&#x27;);</CodeBlock>

                <p>
                Finally, add the necessary configuration through the <code>pure_grids</code> task. To see a full list of all configurable properties, check out the <a href="https://www.npmjs.org/package/grunt-pure-grids#readme">README documentation</a>.
                </p>

                <CodeBlock>
                    {stripIndent`
                    grunt.initConfig({
                        pure_grids: {
                            dest : "build/public/css/main-grid.css",
                            options: {
                                units: 12, // 12-column grid
                                mediaQueries: {
                                    sm: 'screen and (min-width: 35.5em)', // 568px
                                    md: 'screen and (min-width: 48em)',   // 768px
                                    lg: 'screen and (min-width: 64em)',   // 1024px
                                    xl: 'screen and (min-width: 80em)'    // 1280px
                                }
                            }
                        }
                    });
                `}
                </CodeBlock>

                <h3>Via Rework</h3>

                <p>
                If you're not using Grunt, you can also generate your custom responsive grids through using the <a href="https://www.npmjs.org/package/rework-pure-grids">Pure Grids Rework Plugin</a>. It has the same configuration options as the Grunt plugin &mdash; in fact, this is what powers the Grunt plugin.
                </p>

                <p>
                You can install the Rework plugin through npm.
                </p>

                <CodeBlock>$ npm install rework rework-pure-grids</CodeBlock>

                <p>
                And it can be used on it's own like this, or along side other Rework plugins you might be using.
                </p>

                <CodeBlock>
                    {stripIndent`
                    import rework from 'rework';
                    import pureGrids from 'rework-pure-grids';

                    const css = rework('').use(pureGrids.units({
                        mediaQueries: {
                            sm: 'screen and (min-width: 35.5em)', // 568px
                            md: 'screen and (min-width: 48em)',   // 768px
                            lg: 'screen and (min-width: 64em)',   // 1024px
                            xl: 'screen and (min-width: 80em)'    // 1280px
                        }
                    })).toString();

                    // This will log-out the grid CSS.
                    console.log(css);
                `}
                </CodeBlock>

                <SectionHeader heading="Mutating Selectors" />

                <p>
                All selectors defined in Pure's source code begin with the <code>.pure-</code> prefix. However, you may want to change this. To accomplish this task, you can use Pure's tooling to mutate CSS selectors.
                </p>

                <h3>Via Grunt</h3>

                <p>
                Install the <a href="https://www.npmjs.org/package/grunt-css-selectors">CSS Selectors Grunt Plugin</a> through npm.
                </p>

                <CodeBlock>$ npm install grunt-css-selectors --save-dev</CodeBlock>

                <p>
                Once it's installed, add the task to your <code>Gruntfile.js</code>
                </p>

                <CodeBlock>grunt.loadNpmTasks(&#x27;grunt-css-selectors&#x27;);</CodeBlock>

                <p>
                Finally, add the necessary configuration through the <code>css_selectors</code> task. Check out the <a href="https://www.npmjs.org/package/grunt-css-selectors#readme">README documentation</a> for more details.
                </p>

                <CodeBlock>
                    {stripIndent`
                    grunt.initConfig({
                        css_selectors: {
                            options: {
                                mutations: [
                                    {prefix: '.foo'}
                                ]
                            },
                            files: {
                                'dest/foo-prefixed.css': ['src/foo.css'],
                            }
                        }
                    });
                `}
                </CodeBlock>

                <h3>Via Rework</h3>

                <p>
                If you're not using Grunt, you can also mutate CSS selectors using the <a href="https://www.npmjs.org/package/rework-mutate-selectors">Mutate Selectors Rework Plugin</a>. It has a similar interface to the Grunt plugin &mdash; in fact, this is what powers the Grunt plugin.
                </p>

                <p>
                You can install the Rework plugin through npm.
                </p>

                <CodeBlock>$ npm install rework rework-mutate-selectors</CodeBlock>

                <p>
                And it can be used on it's own like this, or along side other Rework plugins you might be using.
                </p>

                <CodeBlock>
                    {stripIndent`
                    import rework from 'rework';
                    import selectors from 'rework-mutate-selectors';

                    const css = rework(inputCSS)
                        .use(selectors.prefix('.foo'))
                        .use(selectors.replace(/^\.pure/g, '.bar'))
                        .toString();

                    // This will log-out the resulting CSS.
                    console.log(css);
                `}
                </CodeBlock>

                <aside>
                    <p>
                    If you have questions or run into issues while these tools, please file them on their respective GitHub repositories.
                    </p>
                </aside>
            </div>
        </Layout>
    );
}

export default Tools;
