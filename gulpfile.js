var gulp = require('gulp');
var grunt = require('grunt');
var runSequence = require('run-sequence');

// -- Grunt Config -------------------------------------------------------------------

grunt.initConfig({

    nick : 'pure',
    pkg  : grunt.file.readJSON('package.json'),
    bower: grunt.file.readJSON('bower.json'),

    // -- bower.json Config ---------------------------------------------------------

    bower_json: {
        release: {
            values: {
                main: 'pure.css'
            },

            dest: 'build/'
        }
    },

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
            src : '{LICENSE.md,README.md,HISTORY.md}',
            dest: 'build/'
        }
    },

    // -- Concat Config --------------------------------------------------------

    concat: {
        build: {
            files: [
                {'build/base.css': [
                    'bower_components/normalize-css/normalize.css',
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
                require('autoprefixer')({browsers: ['last 2 versions', 'ie >= 8', 'iOS >= 6', 'Android >= 4']})
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
                    'normalize.css v<%= bower.devDependencies["normalize-css"] %> | MIT License | git.io/normalize',
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
                    'https://github.com/yahoo/pure/blob/master/LICENSE.md',
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

    // -- Strip Media Queries Config -------------------------------------------

    stripmq: {
        all: {
            files: {
                //follows the pattern 'destination': ['source']
                'build/grids-responsive-old-ie.css':
                    ['build/grids-responsive.css']
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

// -- Main build task (Grunt)

var grunt_build_tasks = [
  'clean:build',
  'copy:build',
  'pure_grids:default_units',
  'pure_grids:responsive',
  'stripmq:all',
  'concat:build',
  'clean:build_res',
  'css_selectors:base',
  'postcss:dist',
  'cssmin:files',
  'license:normalize'
];

// -- Grunt tasks for test pipeline

var grunt_test_tasks = [
  'csslint'
];

// -- Grunt tasks for watch pipeline

var grunt_watch_tasks = [
  'suppress',
];

grunt_watch_tasks.concat(grunt_test_tasks);

// -- Main Tasks ---------------------------------------------------------------

// npm tasks.
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-compress');
grunt.loadNpmTasks('grunt-css-selectors');
grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-pure-grids');
grunt.loadNpmTasks('grunt-stripmq');

// Local tasks.
grunt.loadTasks('tasks/');

gulp.task('test', function(done) {
  grunt.tasks(
    grunt_test_tasks,
    { gruntfile: false },
    function() {done();}
  );
});

gulp.task('import', function(done) {
  grunt.tasks(
    ['bower_install:main'],
    { gruntfile: false },
    function() {done();}
  );
});

gulp.task('watch_pipeline', function() {
  grunt.tasks(
    grunt_watch_tasks,
    { gruntfile: false },
    function (error) {
      if (error) {
        console.log(error.message);
      }
    }
  );
});

gulp.task('build', function(done) {
  grunt.tasks(
    grunt_test_tasks.concat(grunt_build_tasks),
    { gruntfile: false },
    function() {done;}
  );
});

gulp.task('observe', function() {
  gulp.watch('src/**/css/*.css', { ignoreInitial: false }, ['watch_pipeline']);
});

gulp.task('watch', ['observe', 'watch_pipeline']);

gulp.task('default', function(done) {
  runSequence(
    'import',
    'build',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('DEFAULT TASK FINISHED SUCCESSFULLY');
      }
        done(error);
    }
  );
});

gulp.task('clean-build', function(done) {
  grunt.tasks(['clean:build'],
    { gruntfile: false },
    function() {done();}
  )
});

gulp.task('clean-build-responsive', function(done) {
  grunt.tasks(['clean:build_res'],
    { gruntfile: false },
    function() {done();}
  )
});

gulp.task('clean-release', function(done) {
  grunt.tasks(['clean:release'],
    { gruntfile: false },
    function() {done();}
  )
});

gulp.task('clean', ['clean-release','clean-build']);

gulp.task('release', function(done) {
  runSequence(
    'default',
    function (error) {
      grunt.tasks(
        [
          'clean:release',
          'copy:release',
          'bower_json:release',
          'compress:release'
        ],
        { gruntfile: false }
      )
      if (error) {
        console.log(error.message);
      } else {
        console.log("RELEASE TASK FINISHED SUCESSFULLY");
      }
      done(error);
    }
  );
});
