const { moduleSizes, PURE_DOWNLOAD_SNIPPET } = require('./lib/pure');
const { version } = require('../package.json');

module.exports = {
    title: 'Pure',
    tagline: 'Pure is a ridiculously tiny CSS library you can use to start any web project.',
    url: 'https://pure-css.github.io',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'pure-css',
    projectName: 'pure-css.github.io',
    plugins: [
        '@docusaurus/plugin-content-pages',
        '@docusaurus/plugin-google-analytics',
    ],
    themes: ['@docusaurus/theme-classic'],
    themeConfig: {
        googleAnalytics: {
            trackingID: 'UA-41480445-1',
            anonymizeIP: true,
        },
    },
    customFields: {
        PURE_DOWNLOAD_SNIPPET,
        moduleSizes: moduleSizes(),
        pureVersion: version,
        repoName: 'pure',
    },
};
