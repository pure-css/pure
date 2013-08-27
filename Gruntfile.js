var path = require('path');

module.exports = function (grunt) {

// -- Config -------------------------------------------------------------------

grunt.initConfig({

    pkg  : grunt.file.readJSON('package.json'),
    bower: grunt.file.readJSON('bower.json'),

    // -- Clean Config ---------------------------------------------------------

    clean: {
        build    : ['build/'],
        build_res: ['build/*-r.css'],
        release  : ['release/<%= pkg.version %>/']
    },

    // -- Copy Config ----------------------------------------------------------

    copy: {
        build: {
            expand : true,
            flatten: true,
            dest   : 'build/',

            src: [
                'bower_components/normalize-css/normalize.css',
                'src/**/css/*.css'
            ],

            rename: function (dest, src) {
                // normalize -> base
                if (src === 'normalize.css') {
                    src = 'base.css';
                }

                return path.join(dest, src);
            }
        }
    },

    // -- Concat Config --------------------------------------------------------

    concat: {
        build: {
            files: [
                {'build/buttons.css': [
                    'build/buttons-core.css',
                    'build/buttons.css'
                ]},

                {'build/forms-nr.css': [
                    'build/forms.css'
                ]},

                {'build/forms.css': [
                    'build/forms-nr.css',
                    'build/forms-r.css'
                ]},

                {'build/grids-nr.css': [
                    'build/grids-core.css',
                    'build/grids-units.css'
                ]},

                {'build/grids.css': [
                    'build/grids-nr.css',
                    'build/grids-r.css'
                ]},

                {'build/menus-nr.css': [
                    'build/menus-core.css',
                    'build/menus.css',
                    'build/menus-paginator.css'
                ]},

                {'build/menus.css': [
                    'build/menus-nr.css',
                    'build/menus-r.css'
                ]},

                // Rollups

                {'build/<%= pkg.name %>.css': [
                    'build/base.css',
                    'build/buttons.css',
                    'build/forms.css',
                    'build/grids.css',
                    'build/menus.css',
                    'build/tables.css'
                ]},

                {'build/<%= pkg.name %>-nr.css': [
                    'build/base.css',
                    'build/buttons.css',
                    'build/forms-nr.css',
                    'build/grids-nr.css',
                    'build/menus-nr.css',
                    'build/tables.css'
                ]}
            ]
        }
    },

    // -- CSSLint Config -------------------------------------------------------

    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },

        src: {
            src: 'src/**/css/*.css'
        }
    },

    // -- CSSMin Config --------------------------------------------------------

    cssmin: {
        options: {
            // report: 'gzip'
        },

        files: {
            expand: true,
            src   : 'build/*.css',
            ext   : '-min.css'
        }
    },

    // -- Compress Config ------------------------------------------------------

    compress: {
        release: {
            options: {
                archive: 'release/<%= pkg.version %>/<%= pkg.name %>-<%= pkg.version %>.zip'
            },

            expand : true,
            flatten: true,
            dest   : '<%= pkg.name %>/<%= pkg.version %>/',

            src: [
                '{bower.json,LICENSE.md,README.md,HISTORY.md}',
                'build/*.css'
            ]
        }
    },

    // -- License Config -------------------------------------------------------

    license: {
        normalize: {
            options: {
                banner: [
                    '/*!',
                    'normalize.css v<%= bower.devDependencies["normalize-css"] %> | MIT License | git.io/normalize',
                    'Copyright (c) Nicolas Gallagher and Jonathan Neal',
                    '*/\n'
                ].join('\n')
            },

            expand: true,
            cwd   : 'build/',
            src   : ['base*.css', '<%= pkg.name %>*.css']
        },

        yahoo: {
            options: {
                banner: [
                    '/*!',
                    'Pure v<%= pkg.version %>',
                    'Copyright 2013 Yahoo! Inc. All rights reserved.',
                    'Licensed under the BSD License.',
                    'https://github.com/yui/pure/blob/master/LICENSE.md',
                    '*/\n'
                ].join('\n')
            },

            expand: true,
            src   : ['build/*.css']
        }
    },

    // -- Contextualize Config -------------------------------------------------

    contextualize: {
        normalize: {
            src : 'bower_components/normalize-css/normalize.css',
            dest: 'build/base-context.css',

            options: {
                prefix: '.pure'
            }
        }
    },

    // -- Watch/Observe Config -------------------------------------------------

    observe: {
        src: {
            files: 'src/**/css/*.css',
            tasks: ['test', 'suppress', 'build'],

            options: {
                interrupt: true
            }
        }
    }
});

// -- Main Tasks ---------------------------------------------------------------

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-compress');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['import', 'test', 'build']);
grunt.registerTask('import', ['bower-install']);
grunt.registerTask('test', ['csslint']);
grunt.registerTask('build', [
    'clean:build',
    'copy:build',
    'contextualize:normalize',
    'concat:build',
    'clean:build_res',
    'cssmin',
    'license'
]);

// Makes the `watch` task run a build first.
grunt.renameTask('watch', 'observe');
grunt.registerTask('watch', ['default', 'observe']);

grunt.registerTask('release', [
    'default',
    'clean:release',
    'compress:release'
]);

// -- Suppress Task ------------------------------------------------------------

grunt.registerTask('suppress', function () {
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

// -- Bower Tasks --------------------------------------------------------------

grunt.registerTask('bower-install', 'Installs Bower dependencies.', function () {
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

// -- License Task -------------------------------------------------------------

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

// -- Contextualize Task -------------------------------------------------------

grunt.registerMultiTask('contextualize', 'Makes Contextualized CSS files.', function () {
    var Parser     = require('parserlib').css.Parser,
        done       = this.async(),
        options    = this.options({banner: ''}),
        banner     = grunt.template.process(options.banner),
        processing = 0;

    function oneDone() {
        if (!(processing -= 1)) {
            done();
        }
    }

    this.files.forEach(function (filePair) {
        if (!filePair.src.length) {
            processing += 1;
            return oneDone();
        }

        filePair.src.forEach(function (file) {
            var src        = grunt.file.read(file),
                contextual = banner,
                parser     = new Parser();

            parser.addListener('endstylesheet', function () {
                grunt.file.write(filePair.dest, contextual);
                grunt.log.writeln('File "' + filePair.dest + '" created.');
                oneDone();
            });

            // Fired right before CSS properties are parsed for a certain rule.
            // Go through and add all the selectors to the `css` string.
            parser.addListener('startrule', function (event) {
                var prefix = options.prefix;

                event.selectors.forEach(function (selector, i) {
                    var nextSelector = event.selectors[i + 1];

                    // If the selector does not contain the html selector, we
                    // can go ahead and prepend `prefix` in front of it.
                    if (selector.text.indexOf('html') === -1) {
                        contextual += prefix + ' ' + selector.text;
                    } else if (selector.text.indexOf('html') !== -1) {
                        // If it contains `html`, replace the `html` with the
                        // `prefix`. Replace multiple spaces with a single
                        // space. This is for the case where
                        // `html input[type='button']` comes through as
                        // `html    input[type='button']`.
                        contextual += selector.text.replace('html', prefix).replace(/ +/g, ' ');
                    }

                    // If theres another selector, add a comma.
                    if (nextSelector) {
                        contextual += ',\n';
                    } else {
                        // Otherwise, add an opening bracket for properties
                        contextual += ' {\n';
                    }
                });
            });

            // Fired right after CSS properties are parsed for a certain rule.
            // Add the closing bracket to end the CSS Rule.
            parser.addListener('endrule', function (event) {
                contextual += '}\n';
            });

            // Fired for each property that the parser encounters. Add these
            // properties to the `css` string with 4 spaces.
            parser.addListener('property', function (event) {
                // Add 4 spaces tab.
                contextual += '    ' + event.property + ': ' + event.value + ';\n';
            });

            // Do the parsing.
            processing += 1;
            parser.parse(src);
        });
    });
});

};
