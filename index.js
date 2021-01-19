const assert = require('chai').assert;

const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

function digitSumm(n) {
    let counter = 0;

    function summa(n) {
        if (n === 0) {
            return n;
        }
        
        counter = counter + summa(Math.floor( n / 10)) + n % 10;

        return counter;
    }

    summa(n);

    return counter;
}


assert.equal(digitSumm(1234), 10);

// console.log(
//     isShuffledPalindrome('шашал') === true
// );

// console.log(
//     isShuffledPalindrome('шаш') === true
// );

// console.log(
//     isShuffledPalindrome('лолош') === true
// );

// console.log(
//     isShuffledPalindrome('лолш') === false
// );

// console.log(
//     replaceSpaces("dog is a good boy        ", 17)
// );


//bitUtils.printHelpTable(11);
//console.log(cronisBits.generateUniq([10000, 0, 1, 2, 3, 3, 33, 7, 500, 8, 35, 35, 35, 9, 5, 4, 6, 35, 47]));

//console.log(dec2bin(switchBits(11)));

//hammingDistance(1, 4);
//console.log(dec2bin(Math.pow(2, 31) - 1));
//console.log(findBadNumber(numbers));



//console.log(qsort([2, 5, 1, 4]));
//console.log(max([2, 2, 2, 2]));

//console.log(sum([2, 2, 2, 2]));
// const array = [1, 3, 4, 5, 6, 7, 10]

// console.log(grokiing.binarySearch(array, 1));
// console.log(grokiing.binarySearch(array, 10));
// console.log(grokiing.binarySearch(array, -1));
// console.log(grokiing.binarySearch(array, 11));

// Initial values
// var dimesions = "3 3";
// var target = "3 2";
// var obstacles = "0 0 0 1 1 0 1 0 0";

// async function main() {
// 	//const matrix = await utility.readMatrix('./find-path/sample1.txt');
// 	//utility.printMatrix(matrix);
	
// 	//const hourglassSample = await utility.readMatrix('./hourglass/sample.txt');
// 	//hourglass(hourglassSample);

// 	const findPathSample = await utility.readMatrix('./find-path/sample.txt');

// 	try {
// 		utility.printArray(findpath(findPathSample, 3, 3, [0, 0], [2, 1]));
// 	} catch (error) {
// 		console.error(error);
// 	}
	
// }

