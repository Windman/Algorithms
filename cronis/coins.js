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
        result = bagMaxCoins[coinWeight][lessAmount] == 0 ? priorCoins : result + bagMaxCoins[coinWeight][lessAmount];
    }
 
    bagMaxCoins[coinWeight][bagAmount] = result;
}

var printArray = function(table){
    for (let coinWeight = 0; coinWeight < table.length; coinWeight++) {
        console.log(table[coinWeight]);
    }
}

// console.log(coinChange([83, 186, 408, 419], 6249) == 20);

// console.log(coinChange([1, 2, 5], 9) == 3);
// console.log(coinChange([1, 3, 5], 9) == 3);
console.log(coinChange([2, 3, 7, 8], 12) == 3);
// console.log(coinChange([2, 5], 11) == -1);
// console.log(coinChange([2], 1) == -1);
// console.log(coinChange([2], 1) == -1);
//console.log(coinChange([11, 24, 84, 80], 124) == 3);