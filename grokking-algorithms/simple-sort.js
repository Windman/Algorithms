function switchPos(array, i , j) {
    const a = array[i];
    array[i] = array[j];
    array[j] = a;
}

function simleSort(array) {
    for (let i = 0; i < array.length; i++) {
        const next = i + 1;
        if (next < array.length && array[i] < array[next]) {
            switchPos()
        }
    }
}