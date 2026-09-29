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
                    <li><code>getFile(name)</code> &ndash; Retrieve contents of a Pure module file.</li>
                    <li><code>getFilePath(name)</code> &ndash; Return full path to a Pure file.</li>
                </ul>

                <SectionHeader heading="Installing Pure with Composer" />

                <p>
                You can also install Pure with <a href="https://getcomposer.org/">Composer</a>.
                </p>

                <CodeBlock>$ composer require yahoo/purecss</CodeBlock>

                <SectionHeader heading="Generating Custom Responsive Grids" />

                <p>
                Pure was created to help developers build mobile-first responsive web projects. However, since CSS Media Queries cannot be over-written via CSS, you can use Pure's tooling to customize Pure's Responsive Grids for your project.
                </p>

                <p>
                The <code>purecss</code> npm package includes <code>generateGrids()</code>, the same generator Pure uses to build its own grid files. It has no dependencies and returns the CSS as a string.
                </p>

                <CodeBlock>$ npm install purecss --save-dev</CodeBlock>

                <CodeBlock>
                    {stripIndent`
                    import { generateGrids } from 'purecss';

                    const css = generateGrids({
                        mediaQueries: {
                            sm: 'screen and (min-width: 35.5em)', // 568px
                            md: 'screen and (min-width: 48em)',   // 768px
                            lg: 'screen and (min-width: 64em)',   // 1024px
                            xl: 'screen and (min-width: 80em)',   // 1280px
                            xxl: 'screen and (min-width: 120em)',  // 1920px
                            xxxl: 'screen and (min-width: 160em)', // 2560px
                            x4k: 'screen and (min-width: 240em)'  // 3840px
                        }
                    });

                    // This will log-out the grid CSS.
                    console.log(css);
                `}
                </CodeBlock>

                <p>
                To use your own unit sizes, pass them first. For example, <code>generateGrids([12], options)</code> creates a 12-column grid, including rules outside of any media query. Other options are <code>selectorPrefix</code> (default <code>.pure-u-</code>), <code>decimals</code> (default <code>4</code>), <code>includeReducedFractions</code>, <code>includeWholeNumbers</code> and <code>indent</code>.
                </p>

                <aside>
                    <p>
                        <code>generateGrids()</code> replaces the <a href="https://www.npmjs.org/package/rework-pure-grids">Pure Grids Rework Plugin</a>. It takes the same arguments as <code>pureGrids.units()</code> and produces the same CSS, so you can drop Rework: <code>rework(&#x27;&#x27;).use(pureGrids.units(units, options)).toString()</code> becomes <code>generateGrids(units, options)</code>.
                    </p>
                </aside>

                <SectionHeader heading="Mutating Selectors" />

                <p>
                All selectors defined in Pure's source code begin with the <code>.pure-</code> prefix. However, you may want to change this, or scope Pure to part of your page.
                </p>

                <p>
                To scope Pure's base styles, use the prebuilt <code>base-context.css</code>. It applies them only inside an element with the <code>pure</code> class.
                </p>

                <p>
                For anything else, a few lines of <a href="https://postcss.org/">PostCSS</a> will rewrite Pure's selectors:
                </p>

                <CodeBlock>$ npm install postcss --save-dev</CodeBlock>

                <CodeBlock>
                    {stripIndent`
                    import postcss from 'postcss';

                    const mutateSelectors = {
                        postcssPlugin: 'mutate-selectors',
                        Once(root) {
                            root.walkRules((rule) => {
                                // Skip keyframe steps such as \`from\` and \`50%\`.
                                if (rule.parent.type === 'atrule' && /keyframes$/.test(rule.parent.name)) {
                                    return;
                                }

                                rule.selectors = rule.selectors.map((selector) =>
                                    // Rename Pure's classes, then scope them under \`.foo\`.
                                    '.foo ' + selector.replace(/\\.pure-/g, '.bar-'),
                                );
                            });
                        },
                    };

                    const { css } = await postcss([mutateSelectors]).process(inputCSS, { from: undefined });

                    // This will log-out the resulting CSS.
                    console.log(css);
                `}
                </CodeBlock>
            </div>
        </Layout>
    );
}

export default Tools;
