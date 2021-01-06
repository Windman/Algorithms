const binarySearch = require('./binary-search');

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

module.exports = {
    binarySearch: binarySearch,
    qsort: qsort
}

