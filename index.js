const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');

const getLowestBit = x => {
    return 1 & x;
}

const getHighestBit = x => {
    return x >>> 31;
}

function printHelpTable(max) {
    for (let i = 0; i <= max; i++) {
        console.log(`${i} - ${dec2bin(i)}`);
    }

    console.log(' - - - ');
}

function dec2bin(dec){
    return dec.toString(2);
}

const findBadNumber = (numbers) => {
    let flag = 0;

    for (let i = 0; i < numbers.length; i ++) {
       flag = flag ^ numbers[i];
    }

    return flag;
}

const hammingDistance = (x, y) => {
    const bitString = dec2bin(x ^ y);
    return bitString.split('').filter(str => str === '1').length;
};

const switchBits = data => {
    console.log(dec2bin(data));
    let switched = data;
    let bits = [];
    for (let i = 0; i < 31; i = i + 2) {
        if (switched != 0) {
            let currentBit = (data >>> i) & 1;
            let nextBit = (data >>> i + 1) & 1;
            
            if (currentBit != nextBit) {
                currentBit = currentBit === 0 ? 1 : 0; 
                nextBit = nextBit === 0 ? 1 : 0; 
            } 
    
            bits.push(currentBit);
            bits.push(nextBit);
            
            switched = switched >> 2;
        }
    }

    return bits.reverse().join('');
}

const generateUniq = (numbers) => {
    let currentBit = 0;
    for (let i = 0; i < numbers.length; i ++) {
        currentBit = currentBit | numbers[i];
    }

    console.log('curentBit', currentBit);
    return currentBit;
}


//printHelpTable(11);

console.log(generateUniq([10000, 0, 1, 2, 3, 3, 33, 7, 500, 8, 35, 35, 35, 9, 5, 4, 6, 35, 47]));

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

