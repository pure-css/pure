'use strict';

module.exports = function (grunt) {
    grunt.registerTask('suppress', 'Suppresses noisy logs', function () {
        var allowed = ['success', 'fail', 'warn', 'error'];

        grunt.util.hooker.hook(grunt.log, {
            passName: true,

            pre: function (name) {
                if (allowed.indexOf(name) === -1) {
                    grunt.log.muted = true;
                }
            },

            post: function () {
                grunt.log.muted = false;
            }
        });
    });
};
