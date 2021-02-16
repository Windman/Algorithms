// const assert = require('chai').assert;

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
  const calculateSum = (start, stop) => {
    let max = 0;

    for (let i = start; i <= stop; i++) {
      max = max + arr[i];
    }

    return max;
  } 
  
  console.log(arr);
  let next = 0;
  let start = 0;
  let stop = 0;
  let currentSumm = 0;
  let prevSumm = 0;
  let bestSumm = [0, 0, 0];
  
  while(next < arr.length) {
    currentSumm =  prevSumm + arr[next];

    if (currentSumm < prevSumm) {
      start = next - 1;
      stop = next;
    } else {
      stop++;
    }

    if (bestSumm[2] < currentSumm) {
      bestSumm = [start, stop, calculateSum(start, stop)];
    }
    
    next ++;

    console.log(`${start} ${stop} ${bestSumm[2]}`);
    prevSumm = currentSumm;
  }

  return bestSumm;
}

console.log(findBestSumInterval([2, -1, 2, -8, 3, -2, 4, -2, 2, 1, -5]));

// console.log(
//   bestMin([6, 10, 19], [1, 2, 9, 15, 25])
// );
