function getLowestBit(x) {
    return 1 & x;
}

function getHighestBit(x) {
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

module.exports = {
    getLowestBit,
    getHighestBit,
    printHelpTable,
    dec2bin
}