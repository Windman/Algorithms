const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

function pairsBasedOnMap(data, sum) {
  const map = new Map();

  for (let i = 0; i < data.length; i++) {
    let diff = sum - data[i];
    if (diff >= 0) {
      map.set(data[i], diff);
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (map.has(data[i])) {
      console.log(`${map.get(data[i])}, ${data[i]}`);
    }
  }
}

//pairsBasedOnMap([1, 2, 0, 5, 6, -3, 3], 3);
//pairsBasedOnMap([1, 2, 0, 5, 6, -3, 3], 6);