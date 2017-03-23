
const d3 = window.d3 = require('d3');

const spin = {
  colors: { '-1': 'lightblue', 1: 'red' },
  getColor(spinValue) {
    return spin.colors[spinValue];
  },
  getRandom() {
    return [-1, 1][Math.round(Math.random())];
  }
};

exports = module.exports = {};

// Generates and Nx by Ny grid with pointers to each tile in the grid
// return a map from [i,j] to the corresponding tile
exports.generate = function generateGrid(Nx, Ny, width) {

  var el = d3.select('body').append('svg')
    .remove()
    .attr('width', width * (Nx + 2))
    .attr('height', width * (Ny + 2));

  let gTile = el.append('g')
    .attr('fill','white')
    .attr('stroke', 'rgba(0, 0, 0, 0.4)');


  let rects = {};
  let spins = {};

  let neighbours = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  d3.range(Nx).forEach(function(x) {
    d3.range(Ny).forEach(function(y) {
      let position = [x, y].join(',');
      let spinValue = spins[position] = spin.getRandom();

      rects[position] = gTile.append('rect')
        .attr('x', width * (x + 1))
        .attr('y', width * (y + 1))
        .attr('width', width)
        .attr('height', width)
        .attr('fill', spin.getColor(spinValue));
    });
  });

  return {
    el,
    dim: [Nx, Ny],
    rects,
    spins,
    neighbours
  };
}

exports.update = function updateGrid(grid) {
  let { dim: [Nx, Ny], rects, spins, neighbours } = grid;

  // samples a random cell
  let x = ~~(Nx * Math.random());
  let y = ~~(Ny * Math.random());

  let beta = 1/2.26; // 1/kT
  let position = [x, y].join(',');

  // colors this red to display with cell is being updated
  rects[position].transition().attr('fill', 'lightgrey');

  // calculate the sum of neighbors spins
  let neighborsSpin = 0;

  d3.range(neighbours.length).forEach(function(i){
    let x1 = x + neighbours[i][0];
    let y1 = y + neighbours[i][1];

    if (x1 >= 0 & x1 < Nx & y >= 0 & y < Ny) {
      neighborsSpin = neighborsSpin + spins[[x1, y1]];
    }
  });

  // Do a montecarlo sweep:
  // - 1st compute the probability of changing to spin 1 and samples
  // - 2nd assign the new spin according to this probability

  var transitionProbabilty = (
    Math.exp(beta * neighborsSpin) /
    ( Math.exp(beta * neighborsSpin) + Math.exp(-beta * neighborsSpin) )
  );

  let newSpinValue = null;

  if (Math.random() < transitionProbabilty) {
    newSpinValue = spins[position] = 1;
  } else {
    newSpinValue = spins[position] = -1;
  }

  // color the new value of the spin
  // use a delay so we see the transition
  rects[position]
    .transition()
    .delay(300)
    .attr('fill', spin.getColor(newSpinValue));

  return this;
};
