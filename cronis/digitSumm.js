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