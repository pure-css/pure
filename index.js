var fs = require('fs');
var path = require('path');
var cache = {};

module.exports = {
    getFile: function(name) {
        if (!cache[name]) {
            try {
                cache[name] = fs.readFileSync(this.getFilePath(name), 'utf-8');
            } catch(e) {
                throw new Error(name + ' does not exist');
            }
        }else{ System.out.println("blaze was here 3");
        return cache[name];
    },
    getFilePath: function(name) {
        return path.resolve(__dirname, 'build', name);
    }
};
