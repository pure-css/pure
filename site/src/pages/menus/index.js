import Link from '@docusaurus/Link';
import React, { useEffect } from 'react';
import Layout from '../../theme/Layout';
import Header from '../../../components/Header';
import Example from '../../../components/Example';
import SectionHeader from '../../../components/SectionHeader';
import { handleClick } from '../../../lib/utils';

const title = 'Menus';
const description = 'Simple CSS for menus.';
let menuLoaded = false;

function Menus() {
    
    // load external menu js dynamically
    useEffect(() => {
        if (!menuLoaded) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '/js/menus.js';
            document.head.appendChild(script);
            menuLoaded = true;
        }
    });

    return (
        <Layout description={description} title={title}>
            <Header description={description} title={title} />

            <div className="content" onClick={handleClick}>
                <SectionHeader heading="Vertical Menu" />

                <p>
                    Menus are vertical by default. Minimal default styling and low-specificity selectors make them easy to customize. By default, menu items take up 100% of the width of their container, so you may want to limit the menu width or set the menu to display:inline-block.
                </p>

                <Example>
                    <style dangerouslySetInnerHTML={{ __html: `
                        .custom-restricted-width {
                            /* To limit the menu width to the content of the menu: */
                            display: inline-block;
                            /* Or set the width explicitly: */
                            /* width: 10em; */
                        }
                    `}} />
                    <div className="pure-menu custom-restricted-width">
                        <span className="pure-menu-heading">Yahoo Sites</span>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Flickr</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Messenger</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
                            <li className="pure-menu-heading">More Sites</li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Games</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">News</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">OMG!</a></li>
                        </ul>
                    </div>
                </Example>

                <SectionHeader heading="Horizontal Menu" />

                <p>
                    To create a horizontal menu, add the <code>pure-menu-horizontal</code> class name.
                </p>

                <Example>
                    <div className="pure-menu pure-menu-horizontal">
                        <a href="#" className="pure-menu-heading pure-menu-link">BRAND</a>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">News</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
                        </ul>
                    </div>
                </Example>

                <SectionHeader heading="Selected and Disabled Items" />

                <p>
                    Mark a selected list element by adding the <code>pure-menu-selected</code> class to the list element. To mark a link as disabled, add the class name <code>pure-menu-disabled</code> to the list element. Disabled items appear faded and do not inherit hover styles.
                </p>

                <Example>
                    <div className="pure-menu pure-menu-horizontal">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Selected</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Normal</a></li>
                            <li className="pure-menu-item pure-menu-disabled"><a href="#" className="pure-menu-link">Disabled</a></li>
                        </ul>
                    </div>
                </Example>

                <SectionHeader heading="Dropdowns" />

                <p>
                    We recommend enabling submenus via JavaScript to enable accessibility. To help get you started, <a href="/js/menus.js">an example script</a> written in vanilla JS provides ARIA support, limited submenu arrow-key navigation, and the ability to dismiss menus with an outside event or the ESC key. But you may wish to go further by adding edge detection, comprehensive arrow-key navigation, and polyfills for compatibility with old browsers.
                </p>

                <p>
                    Even with JavaScript in place, you still might want to display submenus on hover. Just add <code>pure-menu-allow-hover</code> to the <code>pure-menu-has-children</code> list item. This can be nice for desktop users and provides a fallback for users with no JavaScript.
                </p>

                <Example>
                    <div className="pure-menu pure-menu-horizontal">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                            <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                                <a href="#" id="menuLink1" className="pure-menu-link">Contact</a>
                                <ul className="pure-menu-children">
                                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Email</a></li>
                                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Twitter</a></li>
                                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tumblr Blog</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Example>

                <SectionHeader heading="Vertical Menu with Submenus" />

                <p>
                    The same construct used to create dropdowns works in vertical menus as well. You may nest submenus, but keep in mind that complex menus can present usability challenges on small screens.
                </p>

                <Example>
                    <div className="pure-menu custom-restricted-width">
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Flickr</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Messenger</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
                            <li className="pure-menu-item pure-menu-has-children">
                                <a href="#" id="menuLink1" className="pure-menu-link">More</a>
                                <ul className="pure-menu-children">
                                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autos</a></li>
                                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Flickr</a></li>
                                    <li className="pure-menu-item pure-menu-has-children">
                                        <a href="#" id="menuLink1" className="pure-menu-link">Even More</a>
                                        <ul className="pure-menu-children">
                                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Foo</a></li>
                                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Bar</a></li>
                                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Baz</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Example>

                <SectionHeader heading="Scrollable Horizontal Menu" />

                <p>
                    To create a scrollable horizontal menu, add the <code>pure-menu-scrollable</code> class name. When there isn't enough room, the menu items can be scrolled or flicked. Dropdown menus are not supported. If you would like momentum-based scrolling we recommend using a JS library like <a href="https://github.com/ilyashubin/scrollbooster">scrollbooster</a> to add such effects. 
                </p>

                <Example>
                    <div className="pure-menu pure-menu-horizontal pure-menu-scrollable">
                        <a href="#" className="pure-menu-link pure-menu-heading">Yahoo</a>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Flickr</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Messenger</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autos</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Beauty</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Movies</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Small Business</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Cricket</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tech</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">World</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">News</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Support</a></li>
                        </ul>
                    </div>
                </Example>

                <SectionHeader heading="Scrollable Vertical Menu" />

                <p>
                    To create a scrollable vertical menu, limit the height of your menu, and then add the <code>pure-menu-scrollable</code> class name. The menu items can be scrolled or flicked. Submenus are not supported.
                </p>

                <Example>
                    <style dangerouslySetInnerHTML={{ __html: `
                        /* Customization to limit height of the menu */
                        .custom-restricted {
                            height: 160px;
                            width: 150px;
                            border: 1px solid gray;
                            border-radius: 4px;
                        }
                    `}} />
                    <div className="pure-menu pure-menu-scrollable custom-restricted">
                        <a href="#" className="pure-menu-link pure-menu-heading">Yahoo</a>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Flickr</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Messenger</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sports</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Finance</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autos</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Beauty</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Movies</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Small Business</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Cricket</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tech</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">World</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">News</a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Support</a></li>
                        </ul>
                    </div>
                </Example>

                <SectionHeader heading="Responsive Menus That Hide" />

                <p>
                    Check out our <Link to="/layouts/">Layout Examples</Link> to see how you can use Pure as a foundation for more complex menus, such as:
                </p>

                <Example>
                    <ul>
                        <li><a href="/layouts/side-menu/">Responsive Vertical Menu</a>, which
                            collapses behind a hamburger,
                            similar to the menu on this Pure website.
                        </li>
                        <li><a href="/layouts/tucked-menu/">Responsive Horizontal-Scrollable Menu</a>,
                            which tucks out of the way on small screens.
                        </li>
                        <li><a href="/layouts/tucked-menu-vertical/">Responsive Horizontal-to-Vertical Menu</a>,
                            which slides out of view.
                        </li>
                    </ul>
                </Example>
            </div>
        </Layout>
    );
}

export default Menus;
