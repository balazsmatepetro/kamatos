module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            'assets': ['assets'],
            'all-js-dev': [
                'assets/js/*.js',
                '!assets/js/*.min.js'
            ]
        },
        concat: {
            'main': {
                src: [
                    'resources/js/Main.js',
                    'resources/js/WebFontLoader.js'
                ],
                dest: 'assets/js/main.js'
            },
            'calculation-form': {
                src: [
                    'resources/js/ErrorItemFactory.js',
                    'resources/js/ErrorList.js',
                    'resources/js/NumberInputValidator.js',
                    'resources/js/FormValidation.js',
                ],
                dest: 'assets/js/calculation-form.js'
            }
        },
        uglify: {
            'main': {
                files: {
                    'assets/js/main.min.js': 'assets/js/main.js'
                }
            },
            'calculation-form': {
                files: {
                    'assets/js/calculation-form.min.js': 'assets/js/calculation-form.js'
                }
            }
        },
        sass: {
            'main-css': {
                options: {
                    noCache: true,
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'assets/css/main.min.css': 'resources/scss/site.scss'
                }
            },
            'main-css-dev': {
                options: {
                    noCache: true,
                    sourcemap: 'auto',
                    style: 'expanded'
                },
                files: {
                    'assets/css/main.css': 'resources/scss/site.scss'
                }
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Build task
    grunt.registerTask('build', [
        'clean:assets',
        'concat',
        'uglify',
        'clean:all-js-dev',
        'sass:main-css'
    ]);

    // Dev task
    grunt.registerTask('dev', [
        'clean:assets',
        'concat',
        'sass:main-css-dev'
    ]);
};