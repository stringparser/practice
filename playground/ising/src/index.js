
const grid = require('./src/grid');

// setup the lattice
const lattice = window.frames = grid.generate({
  dim: [64, 64],
  beta: 2,
  width: 10
});

const timer = 1;
const latticeBeta = document.createElement('div');

latticeBeta.innerHTML = `
  1/kT = ${lattice.beta} ;
  updates each ${timer} ms ;
  number of sites ${lattice.dim[0] * lattice.dim[1]}
`;

document.body.appendChild(latticeBeta);
document.body.appendChild(lattice.el.node());

setInterval(function () {
  grid.update(lattice);
}, timer);
