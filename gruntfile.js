module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            fonts: {
                files: [{
                    expand: true,
                    src: [
                    'dev/fonts/**/*.{eot,svg,ttf,woff}',
                    'dev/components/**/*.{eot,svg,ttf,woff}'
                    ],
                    dest:"prod/fonts/",
                    flatten: true
                }]
            }
        },

        concat: {
            jsa: {
                src: [
                    'dev/libs/*.js',
                    'dev/init.js',
                    'dev/components/*.js',
                    'dev/components/**/*.js'
                ],
                dest: 'prod/a.js',
            },

            jsb: {
                src: [
                    'dev/last.js'
                ],
                dest: 'prod/b.js',
            },

            css: {
                src: [
                    'dev/libs/*.{scss,css}',
                    'dev/components/theme-options.scss',
                    'dev/components/**/*.{scss,css}'
                ],
                dest: 'dev/tmp/build.scss',
            },
        },

        sass: {
            dist: {
                files: {
                    'prod/a.css': 'dev/tmp/build.scss',
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            main: {
                src: 'prod/a.css',
                dest: 'prod/a.css'
            }
        },

        uglify: {
            js: {
                src: 'prod/a.js',
                dest: 'prod/a.js'
            },

            jsb: {
                src: 'prod/b.js',
                dest: 'prod/b.js'
            }
        },

        uncss: {
            dist: {
                files: {
                    'prod/a.css': ['index.html', 'product-single.html']
                }
            }
        },

        cssmin: {
            options: {
                restructuring: false,
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'prod/a.css': ['prod/a.css']
                }
            }
        },

        includereplace: {
            your_target: {
                options: {
                    includesDir: 'dev/components/'
                },
                // Files to perform replacements and includes with
                src: 'dev/index.html',
                // Destination directory to copy files to
                dest: 'prod/index.html'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'prod/img/'
                }]
            }
        },

        connect: {
            test: {
                options: {
                    port: 8000,
                    base: 'prod/'
                }
            },
        },

        watch: {
            assets: {
                files: ['dev/index.html', 'dev/components/*.html', 'dev/components/**/*.html', 'dev/components/*.js', 'dev/components/**/*.js', 'dev/components/*.scss', 'dev/components/**/*.scss'],
                tasks: ['concat', 'sass', 'includereplace'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['copy', 'concat', 'sass', 'autoprefixer', 'uglify', 'includereplace', 'imagemin', 'cssmin']);
    grunt.registerTask('dev', ['connect', 'watch']);
};