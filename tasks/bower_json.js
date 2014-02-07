'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('bower_json', 'Modifies bower.json "main".', function () {
        grunt.config('bower.main', this.data.main);
        grunt.file.write('build/bower.json', JSON.stringify(grunt.config('bower'),null,'  '));
    });
};
