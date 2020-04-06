import React from 'react';

function Menu(props) {
    return (
        <>
            <a href="#menu" id="menuLink" className="menu-link">
                <span></span>
            </a>
            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="/">Pure</a>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item">
                            <a href="/start/" className="pure-menu-link">Get Started</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/layouts/" className="pure-menu-link">Layouts</a>
                        </li>
                        <li className="pure-menu-item menu-item-divided">
                            <a href="/base/" className="pure-menu-link">Base</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/grids/" className="pure-menu-link">Grids</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/forms/" className="pure-menu-link">Forms</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/buttons/" className="pure-menu-link">Buttons</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/tables/" className="pure-menu-link">Tables</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/menus/" className="pure-menu-link">Menus</a>
                        </li>
                        <li className="pure-menu-item menu-item-divided">
                            <a href="/tools/" className="pure-menu-link">Tools</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/customize/" className="pure-menu-link">Customize</a>
                        </li>
                        <li className="pure-menu-item">
                            <a href="/extend/" className="pure-menu-link">Extend</a>
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
