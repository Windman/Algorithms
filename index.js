const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');
const grokiing = require('./grokking-algorithms');


const fact = num => {
    if (num === 1){
        return 1;
    } else {
        const prev = fact(num - 1);
        return num * prev;
    }
}

const sum = array => {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sum(array.splice(1, array.length));
    }
}

const count = array => {
    if (array.length === 0) {
        return 0;
    } else {
        return 1 + count(array.splice(1))
    }
}

const max = array => {
    if (array.length === 0) {
        return 0;
    } else {
        const res = max(array.splice(1, array.length));
        if (array[0] > res) {
            return array[0];
        } else {
            return res;
        }
    }
}

const predicateLess = (elem, pivot) => {
    return elem < pivot;
}
const predicateGreater = (elem, pivot) => {
    return elem > pivot;
}

const getSubArray = (array, predicate, pivot) => {
    return array.filter(elem => predicate(elem, pivot));
}

const qsort = array => {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];
        const less = getSubArray(array, predicateLess, pivot);
        const greater = getSubArray(array, predicateGreater, pivot);
        
        qsort(less).push(pivot);

        return [].concat.apply(qsort(less), qsort(greater));
    }
}

console.log(qsort([2, 5, 1, 4]));
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

// main();
