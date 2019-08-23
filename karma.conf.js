// Karma configuration
// http://karma-runner.github.io/2.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            { pattern: 'node_modules/angular/angular.js', watched: false, included: false },
            { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false, included: false },
            { pattern: 'node_modules/angular-route/angular-route.js', watched: false, included: false },
            { pattern: 'dist/main.js', watched: false, included: false },
            { pattern: 'dist/app.js', watched: false, included: false },
            { pattern: 'dist/js/**/*.js', watched: true, included: false },
            { pattern: 'test/unit/**/*.js', watched: true, included: false },
            'node_modules/requirejs/require.js',
            'test/test-main.js'
        ],
        exclude: [],
        port: 9000,
        logLevel: config.LOG_INFO, // config.LOG_DEBUG
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};