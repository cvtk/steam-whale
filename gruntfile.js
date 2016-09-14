module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: [
                    'dev/js/*.js',
                    'dev/js/**/*.js'
                ],
                dest: 'assets/a.js',
            },
            css: {
                src: [
                    'dev/css/*.css',
                    'dev/css/**/*.css'
                ],
                dest: 'assets/a.css',
            },
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
                files: ['index.html', 'dev/js/*.js', 'dev/js/**/*.js', 'dev/css/*.css', 'dev/css/**/*.css'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'uncss', 'cssmin']);
    grunt.registerTask('dev', ['connect', 'watch']);
};