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

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let myCoins = coins.sort((a,b)=>a-b);

    let bagMaxCoins = new Array(myCoins.length + 1);

    for (let coinWeight = 0; coinWeight <= myCoins.length; coinWeight++) {
        bagMaxCoins[coinWeight] = new Array(amount + 1);

        for (let currBagAmount = 0; currBagAmount <= amount; currBagAmount++) {
            bagMaxCoins[coinWeight][currBagAmount] = 0;
        }
    }

    for (let coinWeight = 1; coinWeight <= myCoins.length; coinWeight++) {
        for (let currBagAmount = 1; currBagAmount <= amount; currBagAmount++) {
            bestCoins(bagMaxCoins, coinWeight, currBagAmount, myCoins, amount);
        }
    }

    for (let coinWeight = 0; coinWeight < bagMaxCoins.length; coinWeight++) {
        if (coinWeight === 0) {
            for (let cuurAmount = 1; cuurAmount < bagMaxCoins[0].length; cuurAmount++) {
                bagMaxCoins[0][cuurAmount] = cuurAmount;
            }
        }

        if (coinWeight > 0) {
            bagMaxCoins[coinWeight][0] = myCoins[coinWeight - 1];
        }
    }

    console.log(printArray(bagMaxCoins));

    let totalcoins = bagMaxCoins[bagMaxCoins.length - 1][amount];
   
    const checked = totalcoins * bagMaxCoins[bagMaxCoins.length - 1][0];

    console.log(amount == 0 ? 0 : checked >= amount ? totalcoins : -1);
    
    return amount == 0 ? 0 : checked >= amount ? totalcoins : -1;
};

var bestCoins = function(bagMaxCoins, coinWeight, bagAmount, coins, amount) {
    const coinPrice = coins[coinWeight - 1];

    let priorCoins = bagMaxCoins[coinWeight - 1][bagAmount] ;
    
    if (bagAmount < coinPrice) {
        bagMaxCoins[coinWeight][bagAmount] = priorCoins;
        return;
    };
    
    let currentCoins = Math.floor(bagAmount / coinPrice);
    
    let result = priorCoins == 0 ? currentCoins : Math.min(priorCoins, currentCoins);

    let lessAmount = bagAmount - currentCoins * coinPrice;

    if (lessAmount > 0) {
        result += bagMaxCoins[coinWeight][lessAmount];
    }
 
    bagMaxCoins[coinWeight][bagAmount] = result;
}

var printArray = function(table){
    for (let coinWeight = 0; coinWeight < table.length; coinWeight++) {
        console.log(table[coinWeight]);
    }
}

// console.log(coinChange([1, 2, 5], 9) == 3);
// console.log(coinChange([1, 3, 5], 9) == 3);
// console.log(coinChange([1, 2, 5], 11) == 3);
// console.log(coinChange([2, 5], 11) == -1);
// console.log(coinChange([2], 1) == -1);
// console.log(coinChange([2], 1) == -1);
// console.log(coinChange([83, 186, 408, 419], 6249) == 20);
console.log(coinChange([2, 3, 5, 7], 19) == 3);

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

// main();
