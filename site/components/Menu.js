import Link from '@docusaurus/Link';
import React from 'react';

function Menu(props) {
    return (
        <>
            <a href="#menu" id="menuLink" className="menu-link">
                <span></span>
            </a>
            
            <div id="menu">
                <div className="pure-menu">
                    <Link className="pure-menu-heading" to="/">Pure</Link>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <Link to="/start/" className="pure-menu-link">Get Started</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/layouts/" className="pure-menu-link">Layouts</Link>
                        </li>
                        <li className="pure-menu-item menu-item-divided">
                            <Link to="/base/" className="pure-menu-link">Base</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/grids/" className="pure-menu-link">Grids</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/forms/" className="pure-menu-link">Forms</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/buttons/" className="pure-menu-link">Buttons</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/tables/" className="pure-menu-link">Tables</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/menus/" className="pure-menu-link">Menus</Link>
                        </li>
                        <li className="pure-menu-item menu-item-divided">
                            <Link to="/tools/" className="pure-menu-link">Tools</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/customize/" className="pure-menu-link">Customize</Link>
                        </li>
                        <li className="pure-menu-item">
                            <Link to="/extend/" className="pure-menu-link">Extend</Link>
                        </li>
                        <li className="pure-menu-item">
                            <a href="http://blog.purecss.io/" className="pure-menu-link">Blog</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="https://github.com/pure-css/pure/releases/" className="pure-menu-link">Releases</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Menu;
