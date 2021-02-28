// const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

function findWords(words, hashMap) {
  let result = "";
  let start = 0;
  let end = 0;
  while (end < words.length) {

    Object.keys(hashMap).forEach(word => {
      if (words.charAt(end) === word.charAt(0)) {
        let candidate = words.substring(end, end + word.length);
        if (hashMap[candidate]) {
          result = result + words.substring(start, end) + ' ' + candidate + ' ';
          start = end + word.length;
        } 
      }
    });
    
    end++;
  }

  return result;
}


console.log(findWords("ILOVECATSANDDOGSSSSS".toLowerCase(), { cats: true, dog: true, i: true }));