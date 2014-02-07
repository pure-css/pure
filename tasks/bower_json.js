'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('bower_json', 'Modifies bower.json file.', function (target) {
        var values = this.data.values;

        Object.keys(values).forEach(function (key) {
            grunt.config.set('bower.' + key, values[key]);
            grunt.log.writeln('Updated Bower ' +
                    String(key).cyan + ': ' + String(values[key]).cyan);
        });

        grunt.file.write(path.join(this.data.dest, 'bower.json'),
                JSON.stringify(grunt.config('bower'), null, '  '));
    });
};
