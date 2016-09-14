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
                    'dev/css/**/*.js'
                ],
                dest: 'assets/a. css',
            },
        },

        uglify: {
            js: {
                src: 'assets/a.js',
                dest: 'assets/a.js'
            },
            css: {
                src: 'assets/a.css',
                dest: 'assets/a.css'
            },
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
                files: ['index.html', 'dev/js/*.js', 'dev/js/**/*.js', 'dev/css/*.css', 'dev/css/**/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                    livereload: {
                        host: 'localhost',
                        port: 9000
                    }
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
    grunt.registerTask('dev', ['connect', 'watch']);
};