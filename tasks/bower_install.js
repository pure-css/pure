'use strict';

module.exports = function (grunt) {
    grunt.registerTask('bower_install', 'Installs Bower dependencies.', function () {
        var bower = require('bower'),
            done  = this.async();

        bower.commands.install()
            .on('log', function (data) {
                if (data.id !== 'install') { return; }
                grunt.log.writeln('bower ' + data.id.cyan + ' ' + data.message);
            })
            .on('end', function (results) {
                if (!Object.keys(results).length) {
                    grunt.log.writeln('No bower packages to install.');
                }

                done();
            });
    });
};
