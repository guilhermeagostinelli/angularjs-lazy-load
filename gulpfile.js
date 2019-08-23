const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const requirejsOptimize = require('gulp-requirejs-optimize');
const ngAnnotate = require('gulp-ng-annotate');
const htmlReplace = require('gulp-html-replace');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');

const AUTOPREFIXER_BROWSERS = [ // http://browserl.ist/?q=last+30+versions%2C+%3E%3D+0.2%25+in+BR
    "last 30 versions",
    ">= 0.2%"
];

gulp.task('css', function () {
    return gulp.src([
        // 'node_modules/bootstrap/dist/css/bootstrap.css',
        'src/**/*.css'
    ])
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(concat('main.css'))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('replaceScriptsOfIndex', ['html'], function () {
    return gulp.src('dist/index.html')
        .pipe(htmlReplace({
            css: {
                src: 'css/main.css'
            },
            js: {
                src: 'main-built.js'
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyHtml', ['replaceScriptsOfIndex'], function() {
    return gulp.src('dist/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
})

gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('enableStrictDi', ['js'], function () {
    return gulp.src('dist/main.js')
        .pipe(replace('strictDi: false', 'strictDi: true'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('requireOptimizer', ['enableStrictDi'], function () {
    return gulp.src('dist/main.js')
        .pipe(requirejsOptimize({
            baseUrl: "dist/",
            mainConfigFile: "dist/main.js",
            name: "main",
            out: "main-built.js",
            // optimize: "none",
            paths: {
                requireLib: "../node_modules/requirejs/require"
            },
            include: "requireLib"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    del(['dist']);
});

gulp.task('build', function () {
    return gulp.start([
        'css',
        'html',
        'replaceScriptsOfIndex',
        'minifyHtml',
        'js',
        'enableStrictDi',
        'requireOptimizer'
    ]);
});