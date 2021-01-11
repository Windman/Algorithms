const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');
const cronisBits = require('./cronis/bit');
const bitUtils = require('./cronis/utils');

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

const minRemoveToMakeValid = function(s) {
    let result = s;
    const open = '(';
    const close = ')';

    const stack = [];
    const remove = [];

    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char === open) {
            stack.push([i, '(']);
        }

        if (char === close) {
            if (stack.length == 0) {
                remove[i] = 1;
            }

            stack.pop();
        }
    }

    if (stack.length > 0) {
        for(let i = 0; i < stack.length; i++) {
            let startIndex = stack[i][0];
            result = setCharAt(result, startIndex, ' ');
        }
    }

    if (remove.length > 0) {
        for(let i = 0; i < remove.length; i++) {
            if (remove[i] === 1) {
                result = setCharAt(result, i, ' ');
            }
        }
    }

    return result.replace(/\s/g, '').trim();
};

console.log(
minRemoveToMakeValid(')())()((')
);

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

