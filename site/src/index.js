const path = require('path');
module.exports = function() {
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
