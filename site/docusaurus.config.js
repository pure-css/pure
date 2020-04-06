const { version } = require('../package.json');

module.exports = {
  title: 'Pure',
  tagline: 'Pure is a ridiculously tiny CSS library you can use to start any web project.',
  url: 'https://purecss.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pure-css',
  projectName: 'pure',
  plugins: ['@docusaurus/plugin-content-pages'],
  customFields: {
    pureVersion: version,
  },
};
