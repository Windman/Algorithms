const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

function getBestYear(startYear, endYear, persons) {
  let start = startYear;
  let end = endYear;
  for (let i = 0; i < persons.length; i++) {
   		
	if (getStart(persons[i]) > start) {
        start = getStart(persons[i]);
      }
      
      if(getEnd(persons[i]) < end) {
        end = getEnd(persons[i]);
      }
      
  }  
 
  return [start, end];
  
}

function getStart(person) {
 return person[0];
}

function getEnd(person) {
 return person[1];
}

const persons = [[1991, 1993], [1990, 2012], [1990, 1999], [1992, 2010], [1992, 2010]];
const startYear = 1990;
const endYear = 2012;

console.log(getBestYear(startYear, endYear, persons));