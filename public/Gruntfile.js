module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            assets: ['assets']
        },
        uglify: {
            main: {
                options: {
                    sourceMap: true
                },
                files: {
                    'assets/js/form-validation.min.js': [
                        'resources/js/formValidation.js',
                        'resources/js/NumberInputValidator.js',
                        'resources/js/ErrorItemFactory.js',
                        'resources/js/ErrorList.js',
                        'resources/js/WebFontLoader.js'
                    ]
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Build task
    grunt.registerTask('build', [
        'clean',
        'sass:main-css',
        'uglify'
    ]);

    // Dev task
    grunt.registerTask('dev', [
        'clean',
        'sass:main-css-dev',
        'uglify'
    ]);
};