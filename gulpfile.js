const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');

function buildcss() {
  return src('assets-dev/styles/*.css')
    .pipe(cleanCSS())
    .pipe(dest('assets-prod/styles'));
}

function copyimages() {
  return src('assets-dev/images/*.png')
    .pipe(dest('assets-prod/images'));
}

exports.buildcss = buildcss;
exports.copyimages = copyimages;
exports.buildapp = series(buildcss, copyimages);
