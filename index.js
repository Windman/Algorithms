const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

const powerSet = (input) => {
  const map = [];
  map.push([]);

  for (let i = 0; i < input.length; i++) {
    map.push([input[i]]);
    for (let j = i + 1; j < input.length; j++) {
      map.push([input[i], input[j]]);
    }
  }

  map.push(input);

  console.log(map.sort((a, b) => a.length - b.length));
};

powerSet([1, 2, 3, 4, 5, 6, 7]);
