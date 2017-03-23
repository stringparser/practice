
const gulp = require('gulp');

if (/gulp/.test(process.argv[0]) === false) {
  require('./node_modules/.bin/gulp');
}

let app = null;
let isWatching = null;

gulp.task('watch', function (done) {
  if (isWatching) {
    done();
  } else {
    isWatching = true;
    gulp.watch('src/**/*.{js,html}', ['reload']);
    done();
  }
});

gulp.task('reload', function (done) {
  app.reload();
  done();
});

gulp.task('default', ['watch']);

exports = module.exports = function (webContents) {
  app = webContents;
};
