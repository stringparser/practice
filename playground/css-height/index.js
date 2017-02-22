
const browserSync = require('browser-sync');

browserSync({
  open: false,
  files: [ 'src/*.{html,css}'],
  server: 'src'
});
