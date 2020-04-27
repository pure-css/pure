import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Footer({ siteConfig }) {
    const { customFields, organizationName, projectName } = siteConfig;
    return (
        <div className="footer">
            <div className="legal pure-g">
                <div className="pure-u-1 u-sm-1-2">
                    <p className="legal-license">
                        This site is built with ❤️ using Pure v{customFields.pureVersion}<br />
                        All code on this site is licensed under the <a href={`https://github.com/${organizationName}/${projectName}/blob/master/LICENSE`}>Yahoo BSD License</a> unless otherwise stated.
                    </p>
                </div>
                <div className="pure-u-1 u-sm-1-2">
                    <ul className="legal-links">
                        <li><a href={`https://github.com/${organizationName}/${projectName}/`}>GitHub Project</a></li>
                        <li><a href="https://hackerone.com/yahoo/">Security Contact Info</a></li>
                    </ul>
                    <p className="legal-copyright">
                        &copy; 2014 - Present Yahoo! Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
