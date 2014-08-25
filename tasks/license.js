'use strict';

module.exports = function (grunt) {
    grunt.registerMultiTask('license', 'Stamps license banners on files.', function () {
        var options = this.options({banner: ''}),
            banner  = grunt.template.process(options.banner),
            tally   = 0;

        this.files.forEach(function (filePair) {
            filePair.src.forEach(function (file) {
                grunt.file.write(file, banner + grunt.file.read(file));
                tally += 1;
            });
        });

        grunt.log.writeln('Stamped license on ' + String(tally).cyan + ' files.');
    });
};
