const path = require('path');
module.exports = function(context, options) {
  return {
    name: 'pure-theme',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getClientModules() {
      return [];
    },

  };
};
