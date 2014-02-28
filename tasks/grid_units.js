'use strict';

var rework    = require('rework'),
    pureGrids = require('rework-pure-grids');

module.exports = function (grunt) {
    grunt.registerTask('grid_units', 'Generates grid units.', function (target) {
        var config = grunt.config.get(this.name),
            css    = rework('').use(pureGrids.units(config.units));

        grunt.file.write(config.dest, css.toString({indent: '    '}));
        grunt.log.writeln('File "' + config.dest + '" created.');
    });
};
