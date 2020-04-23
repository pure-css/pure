import Link from '@docusaurus/Link';
import classnames from 'classnames';
import React from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import CodeBlock from '../../../components/CodeBlock';
import SectionHeader from '../../../components/SectionHeader';

const title = 'Base';
const description = 'Leveraging Normalize.css, an HTML5-ready alternative to CSS resets.';

function Base() {
  return (
    <Layout description={description} title={title}>
        <Header description={description} title={title} />

        <div className="content">
            <SectionHeader heading="The Foundation" />

            <p>
                All modules in Pure build on top of <a href="https://necolas.github.io/normalize.css/">Normalize.css</a>. It's our foundational layer to maintain some degree of cross-browser consistency. You can pull in Normalize.css by adding this <code>&lt;link&gt;</code> element on your page:
            </p>

            <CodeBlock wrap={true}>
                {`<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/base-min.css">`}
            </CodeBlock>

            <h3>A bit about Normalize.css</h3>

            <p>
                <a href="https://necolas.github.io/normalize.css/">Normalize.css</a> is an open-source project by <a href="http://twitter.com/necolas">Nicolas Gallagher</a> and <a href="http://twitter.com/jon_neal">Jonathan Neal</a>. <a href="http://nicolasgallagher.com/about-normalize-css/">In their own words</a>:
            </p>

            <blockquote className="content-quote">
                Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements. It’s a modern, HTML5-ready, alternative to the traditional CSS reset."
            </blockquote>

            <p>
                Normalize.css comes with <a href="https://github.com/necolas/normalize.css/wiki">great documentation</a> and a <a href="http://nicolasgallagher.com/about-normalize-css/">thorough guide</a> explaining how it differs from a traditional reset.
            </p>

            <SectionHeader heading="Extras" />

            <p>
                In addition to Normalize.css rules, Pure's Base module contains some common styles that are used by most websites.
            </p>

            <h3>Hiding Elements</h3>

            <p>
                Add the <code>hidden</code> attribute to an HTML element to hide it from the screen via <code>display: none !important;</code>. Alternatively, for compatibility with old IE, you may use the CSS classname <code>.hidden</code>.
            </p>

            <CodeBlock wrap={true}>
                {`<input type="text" name="_csrf" hidden>`}
            </CodeBlock>

            <h3>Responsive Images</h3>

            <p>
                Add the <code>.pure-img</code> class name to an <code>&lt;img&gt;</code> element to make it scale with the viewport. This is handy when building responsive websites.
            </p>

            <CodeBlock wrap={true}>
                {`<img class="pure-img" src="...">`}
            </CodeBlock>

            <SectionHeader heading="Moving beyong Normalize" />

            <p>
                Normalize.css is a great starting place for your project, but some HTML elements such as forms, tables, and menus require more styling than what's provided by Normalize.
            </p>

            <p>
                We made a more opinionated look and feel for these elements, while keeping them minimal enough so that you can customize them for your site or app's needs. Check out our CSS for <Link to="/forms">Forms</Link>, <Link to="/tables">Tables</Link>, and <Link to="/menus">Menus</Link>.
            </p>
        </div>
    </Layout>
  );
}

export default Base;
