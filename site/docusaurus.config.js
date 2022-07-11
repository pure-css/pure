const { moduleSizes, PURE_DOWNLOAD_SNIPPET } = require('./lib/pure');
const { version } = require('../package.json');

module.exports = {
    title: 'Pure',
    tagline: 'Pure is a ridiculously tiny CSS library you can use to start any web project.',
    url: 'https://pure-css.github.io',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'pure-css',
    plugins: [
        [
            '@docusaurus/plugin-content-pages',
            {
                path: 'src/pages',
            },
        ],
        [
            '@docusaurus/plugin-google-analytics',
            {
                trackingID: 'UA-41480445-1',
                anonymizeIP: true,
            },
        ],
    ],
    projectName: 'pure-css.github.io',
    scripts: [
        {
            src: 'https://kit.fontawesome.com/f7f35653b1.js',
            defer: true,
        }
    ],
    themes: ['@docusaurus/theme-classic'],
    trailingSlash: true,
    customFields: {
        PURE_DOWNLOAD_SNIPPET,
        moduleSizes: moduleSizes(),
        pureVersion: version,
        repoName: 'pure',
    },
};
