var fs = require('fs');
var path = require('path');
var generateGrids = require('./lib/grids.js');
var cache = {};

module.exports = {
    generateGrids: generateGrids,
    getFile: function(name) {
        if (!cache[name]) {
            try {
                cache[name] = fs.readFileSync(this.getFilePath(name), 'utf-8');
            } catch(e) {
                throw new Error(name + ' does not exist', e);
            }
        }
        return cache[name];
    },
    getFilePath: function(name) {
        return path.resolve(__dirname, 'build', name);
    }
};
