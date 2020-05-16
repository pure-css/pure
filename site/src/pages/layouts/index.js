import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../../components/Header';
import SectionHeader from '../../../components/SectionHeader';

import './styles.css';

const title = 'Layouts';
const description = 'Quickstart your next web project with these example layouts.';
const layouts = [
    {
        type: 'blog',
        title: 'Blog',
        summary: 'A layout example that shows off a blog page with a list of posts.',
        modules: ['base', 'grids', 'buttons', 'menus']
    },
    {
        type: 'email',
        title: 'Email',
        summary: 'A layout example that shows off a responsive email layout.',
        modules: ['base', 'grids', 'buttons', 'menus']
    },
    {
        type: 'gallery',
        title: 'Photo Gallery',
        summary: 'A layout example that shows off a responsive photo gallery.',
        modules: ['base', 'grids', 'forms', 'buttons', 'menus']
    },
    {
        type: 'marketing',
        title: 'Landing Page',
        summary: 'A layout example that shows off a responsive product landing page.',
        modules: ['base', 'grids', 'forms', 'buttons', 'menus']
    },
    {
        type: 'pricing',
        title: 'Pricing Table',
        summary: 'A layout example that shows off a responsive pricing table.',
        modules: ['base', 'grids', 'buttons', 'menus']
    },
    {
        type: 'side-menu',
        title: 'Responsive Side Menu',
        summary: 'A layout example with a side menu that hides on mobile, just like the Pure website.',
        modules: ['base', 'grids', 'menus']
    },
    {
        type: 'tucked-menu-vertical',
        title: 'Responsive Horizontal-to-Vertical Menu',
        summary: 'A set of horizontal menus that switch to vertical and which hide at small window widths.',
        modules: ['base', 'grids', 'menus']
    },
    {
        type: 'tucked-menu',
        title: 'Responsive Horizontal-to-Scrollable Menu',
        summary: 'Showcases a horizontal menu that hides at small window widths, and which scrolls when revealed.',
        modules: ['base', 'menus']
    }
];

const renderLayouts = (layout, idx) => (
    <div key={idx} className="layout-item l-wrap pure-g">
        <div className="layout-item-screenshot content pure-u-1 u-sm-1-2">
            <a href={`/layouts/${layout.type}/`}>
                <img src={useBaseUrl(`img/layouts/${layout.type}@2x.jpg`)} className="pure-img-responsive" width="400" height="214"
                    alt={`Screenshot of ${layout.title} example layout`} />
            </a>
        </div>
        <div className="layout-item-content content pure-u-1 u-sm-1-2">
            <h3 className="layout-item-head">{layout.title}</h3>

            <p>{layout.summary}</p>

            <ul className="layout-item-modules pure-g">
                {layout.modules.map((m, idx) => (
                    <li key={idx} className={`layout-item-module layout-item-module-${m} pure-u`}>
                        <Link to={`/${m}`}>{m}</Link>
                    </li>
                ))}
            </ul>

            <p>
                <a href={`/layouts/${layout.type}/`}
                    className="pure-button pure-button-primary">View</a>
                <a href={`https://github.com/pure-css/pure/tree/master/site/static/layouts/${layout.type}`}
                    className="pure-button">Source</a>
            </p>
        </div>
    </div>
);

function Layouts() {
    const layoutMarkup = layouts.map(renderLayouts);
    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content">
                <SectionHeader heading="Common Layouts" />

                <p>
                    Pure was crafted with the goal that it can be used in every web project. To showcase this, we've made some common layouts that leverage Pure. These layouts are responsive and don't require JavaScript (except for
                    certain menu interactions).
                </p>

                <aside>
                    <p>
                        When viewing these layouts, view or copy the source to get a good understanding of what's happening. These layout examples are free to use in your own projects under the <a href="http://www.zlib.net/zlib_license.html">zLib license</a>.
                    </p>
                </aside>

                {layoutMarkup}
            </div>
        </Layout>
    );
}

export default Layouts;
