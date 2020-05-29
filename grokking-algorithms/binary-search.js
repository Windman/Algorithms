function binarySearch(array, item){
    let high = array.length;
    let low = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];

        if (guess === item) {
            return guess;
        } else if (guess > item ) {
            high = mid - 1;
        } else if (guess < item) {
            low = mid + 1;
        } else {
            return null;
        }
    }

    return null;
}

module.exports = binarySearch;