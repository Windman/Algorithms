const utils = require('./utils'); 

const findNonDuplicateNumber = (numbers) => {
    let flag = 0;

    for (let i = 0; i < numbers.length; i ++) {
       flag = flag ^ numbers[i];
    }

    return flag;
}

const hammingDistance = (x, y) => {
    const bitString = utils.dec2bin(x ^ y);
    return bitString.split('').filter(str => str === '1').length;
};

const switchBits = data => {
    console.log(utils.dec2bin(data));
    
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
    return currentBit;
}

module.exports = {
    findNonDuplicateNumber,
    hammingDistance,
    switchBits,
    generateUniq
}