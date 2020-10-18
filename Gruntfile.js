module.exports = function (grunt) {

    // -- Config -------------------------------------------------------------------

    grunt.initConfig({

        nick : 'pure',
        pkg  : grunt.file.readJSON('package.json'),

        // -- Clean Config ---------------------------------------------------------

        clean: {
            build    : ['build/'],
            build_res: ['build/*-r.css'],
            release  : ['release/<%= pkg.version %>/']
        },

        // -- Copy Config ----------------------------------------------------------

        copy: {
            build: {
                src    : 'src/**/css/*.css',
                dest   : 'build/',
                expand : true,
                flatten: true
            },

            release: {
                src : '{LICENSE,README.md,HISTORY.md}',
                dest: 'build/'
            }
        },

        // -- Concat Config --------------------------------------------------------

        concat: {
            build: {
                files: [
                    {'build/base.css': [
                        'node_modules/normalize.css/normalize.css',
                        'build/base.css'
                    ]},

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

                    {'build/grids.css': [
                        'build/grids-core.css',
                        'build/grids-units.css'
                    ]},

                    {'build/menus.css': [
                        'build/menus-core.css',
                        'build/menus-horizontal.css',
                        'build/menus-dropdown.css',
                        'build/menus-scrollable.css',
                        'build/menus-skin.css',
                    ]},

                    // Rollups

                    {'build/<%= nick %>.css': [
                        'build/base.css',
                        'build/grids.css',
                        'build/buttons.css',
                        'build/forms.css',
                        'build/menus.css',
                        'build/tables.css'
                    ]},

                    {'build/<%= nick %>-nr.css': [
                        'build/base.css',
                        'build/grids.css',
                        'build/buttons.css',
                        'build/forms-nr.css',
                        'build/menus.css',
                        'build/tables.css'
                    ]}
                ]
            }
        },

        // -- PostCSS Config --------------------------------------------------------

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')()
                ]
            },
            dist: {
                src: 'build/*.css'
            }
        },

        // -- CSSLint Config -------------------------------------------------------

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },

            base   : ['src/base/css/*.css'],
            buttons: ['src/buttons/css/*.css'],
            forms  : ['src/forms/css/*.css'],
            grids  : ['src/grids/css/*.css'],
            menus  : ['src/menus/css/*.css'],
            tables : ['src/tables/css/*.css']
        },

        // -- CSSMin Config --------------------------------------------------------

        cssmin: {
            options: {
                noAdvanced: true
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
                    archive: 'release/<%= pkg.version %>/<%= nick %>-<%= pkg.version %>.tar.gz'
                },

                expand : true,
                flatten: true,
                src    : 'build/*',
                dest   : '<%= nick %>/<%= pkg.version %>/'
            }
        },

        // -- License Config -------------------------------------------------------

        license: {
            normalize: {
                options: {
                    banner: [
                        '/*!',
                        'normalize.css v<%= pkg.devDependencies["normalize-css"] %> | MIT License | git.io/normalize',
                        'Copyright (c) Nicolas Gallagher and Jonathan Neal',
                        '*/\n'
                    ].join('\n')
                },

                expand: true,
                cwd   : 'build/',
                src   : ['base*.css', '<%= nick %>*.css']
            },

            yahoo: {
                options: {
                    banner: [
                        '/*!',
                        'Pure v<%= pkg.version %>',
                        'Copyright 2013 Yahoo!',
                        'Licensed under the BSD License.',
                        'https://github.com/pure-css/pure/blob/master/LICENSE',
                        '*/\n'
                    ].join('\n')
                },

                expand: true,
                src   : ['build/*.css']
            }
        },

        // -- Pure Grids Units Config ----------------------------------------------

        pure_grids: {
            default_units: {
                dest: 'build/grids-units.css',

                options: {
                    units: [5, 24]
                }
            },

            responsive: {
                dest: 'build/grids-responsive.css',

                options: {
                    mediaQueries: {
                        sm: 'screen and (min-width: 35.5em)',   // 568px
                        md: 'screen and (min-width: 48em)',     // 768px
                        lg: 'screen and (min-width: 64em)',     // 1024px
                        xl: 'screen and (min-width: 80em)'      // 1280px
                    }
                }
            }
        },

        // -- CSS Selectors Config -------------------------------------------------

        css_selectors: {
            base: {
                src : 'build/base.css',
                dest: 'build/base-context.css',

                options: {
                    mutations: [{prefix: '.pure'}]
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

    // npm tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-css-selectors');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-pure-grids');

    // Local tasks.
    grunt.loadTasks('tasks/');

    grunt.registerTask('default', ['test', 'build']);
    grunt.registerTask('test', ['csslint']);
    grunt.registerTask('build', [
        'clean:build',
        'copy:build',
        'pure_grids',
        'concat:build',
        'clean:build_res',
        'css_selectors:base',
        'postcss',
        'cssmin',
        'license'
    ]);

    // Makes the `watch` task run a build first.
    grunt.renameTask('watch', 'observe');
    grunt.registerTask('watch', ['default', 'observe']);

    grunt.registerTask('release', [
        'default',
        'clean:release',
        'copy:release',
        'compress:release'
    ]);

};
