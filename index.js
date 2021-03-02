// const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

var minWindow = function (s, t) {
  let start = 0;
  let end = 0;
  let minBestWindow = null;
  let sMap = [];
  let tMap = [];
  let counter = 0;
  let setWindow = 0;
  let result = [];

  for (let i = 0; i < t.length; i++) {
    if (typeof tMap[t.charCodeAt(i)] === 'undefined') {
      tMap[t.charCodeAt(i)] = 1;
    } else {
      tMap[t.charCodeAt(i)]++;
    }
  }

  while (end < s.length) {
    let nextS = s.charAt(end);

    // search
    if (t.indexOf(nextS) > -1) {
      // found, window started
      if (typeof sMap[t.charCodeAt(t.indexOf(nextS))] === 'undefined') {
        sMap[t.charCodeAt(t.indexOf(nextS))] = 1;
      } else {
        sMap[t.charCodeAt(t.indexOf(nextS))]++;
      }
      counter++;
    } else if (t.indexOf(nextS) === -1 && counter === 0) {
      counter = 0;
      sMap = [];
      start = end + 1;
    }

    if (sMap[t.charCodeAt(t.indexOf(nextS))] > tMap[t.charCodeAt(t.indexOf(nextS))]) {
      // more than 1 char, start new window
      counter = 0;
      sMap = [];
      start = end;
      continue;
    }

    if (counter === t.length) {
      // match
      setWindow = end - start;

      result[setWindow] = s.substring(start, end + 1);

      if (!minBestWindow) {
        minBestWindow = setWindow;
      }

      minBestWindow = Math.min(minBestWindow, setWindow);

      counter = 0;
      sMap = [];
      start = end;
    }

    end++;
  }

  return result[minBestWindow] || "";
};

console.log(minWindow("BDAB",  "AB"));
console.log(minWindow("AA",  "A"));