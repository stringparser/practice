
const grid = require('./src/grid');
const lattice = window.frames = grid.generate(32, 32, 15);

setInterval(function () {
  grid.update(lattice);
}, 1);

document.body.appendChild(lattice.el.node());
