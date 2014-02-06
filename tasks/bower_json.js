'use strict';

module.exports = function (grunt) {
    grunt.registerTask('bower_json', 'Modifies bower.json "main".', function () {
        grunt.config('bower.main', 'pure.css');
        grunt.file.write('build/bower.json', JSON.stringify(grunt.config('bower'),null,'  '));
    });
};
