module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            fonts: {
                files: [{
                    expand: true,
                    src:"dev/fonts/**/*.{eot,svg,ttf,woff}", 
                    dest:"assets/fonts/",
                    flatten: true
                }]
            }
        },

        concat: {
            js: {
                src: [
                    'dev/libs/*.js',
                    'dev/components/*.js',
                    'dev/components/**/*.js'
                ],
                dest: 'assets/a.js',
            },
            css: {
                src: [
                    'dev/libs/*.css',
                    'dev/components/*.css',
                    'dev/components/**/*.css'
                ],
                dest: 'assets/a.css',
            },
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            main: {
                src: 'assets/a.css',
                dest: 'assets/a.css'
            }
        },

        uglify: {
            js: {
                src: 'assets/a.js',
                dest: 'assets/a.js'
            }
        },

        uncss: {
            dist: {
                files: {
                    'assets/a.css': ['index.html']
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'assets/a.css': ['assets/a.css']
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/img/'
                }]
            }
        },

        connect: {
            test: {
                options: {
                    port: 8000,
                    base: '.'
                }
            },
        },

        watch: {
            assets: {
                files: ['index.html', 'product-single.html', 'dev/components/*.js', 'dev/components/**/*.js', 'dev/components/*.css', 'dev/components/**/*.css'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['copy', 'concat', 'autoprefixer', 'uglify', 'imagemin', 'uncss', 'cssmin']);
    grunt.registerTask('dev', ['connect', 'watch']);
};