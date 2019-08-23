//  Config to tasks

const pathDev = {
    dest: './dev/',
    clean: './dev/*',
    fonts: [
        './src/assets/fonts/**/*',
        './dev/fonts'
    ],
    img: [
        './src/assets/img/**/*',
        './dev/img'
    ],
    mocks: [
        './src/assets/mocks/**/*',
        './dev/mocks'
    ],
    js: [
        './src/assets/js/*.js',
        './dev/js'
    ],
    pug: [
        './src/pug/pages/*.pug',
        './dev/'
    ],
    sass: [
        './src/scss/bricklayer.scss',
        'bricklayer.min.css',
        './dev/css'
    ]
};

const pathServer = {
    server: './dev',
    srcPug: './src/pug/**/*.pug',
    srcSass: './src/scss/**/*.scss',
    srcJs: './src/js/*.js',
    srcImg: './src/img/**/*',
    watchs: [
        'dev/*.html',
        'dev/css/*.css',
        'dev/js/*.js',
        'dev/img/**/*'
    ]
};

const pathBuild = {
    folderDist: './build',
    fonts: [
        './src/assets/fonts/**/*',
        './build/fonts'
    ],
    img: [
        './src/assets/img/**/*',
        './build/img'
    ],
    mocks: [
        './src/assets/mocks/**/*',
        './build/mocks'
    ],
    js: [
        './src/assets/js/*.js',
        './build/js'
    ],
    srcSass: './src/scss/bricklayer.scss',
    cssMin: 'bricklayer.min.css',
    distCss: './build/css/',
    srcPug: './src/pug/pages/*.pug',
    distPug: './build/'
};

export {
    pathDev,
    pathServer,
    pathBuild
}