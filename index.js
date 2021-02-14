const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

function bestMin(arr1, arr2) {
  let i = 0;
  let j = 0;
  let bestMin = [arr1[0], arr2[0]];

  while (i < arr1.length && j < arr2.length) {
    let currDif = Math.abs(arr1[i] - arr2[j]);
    let bestMinDif = Math.abs(bestMin[0] - bestMin[1]);

    if (currDif < bestMinDif) {
      bestMin[0] = arr1[i];
      bestMin[1] = arr2[j];
    }

    if (arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return bestMin;
}

function findBestSumInterval(arr) {
  // console.log(arr);
  let next = 0;
  let start = 0;
  let stop = 0;
  let currentSumm = 0;
  let bestSumm = [0, 0, 0];
  while(next < arr.length) {
    currentSumm =  bestSumm[2] + arr[next];

    if (currentSumm < bestSumm[2]) {
      start++;
      stop = next;
    }

    next ++;

    console.log(`${start} ${stop} ${currentSumm}`);
    bestSumm = [start, stop, currentSumm];
  }

  const calculateSum = (start, stop) => {
    let max = 0;

    for (let i = start; i < stop; i++) {
      max = max + arr[i];
    }

    return max;
  }

  return [start - 1, stop -1, calculateSum(start - 1, stop)];
}

console.log(findBestSumInterval([2, -8, 3, -2, 4, -10]));

// console.log(
//   bestMin([6, 10, 19], [1, 2, 9, 15, 25])
// );
