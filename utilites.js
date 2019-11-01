function getIndexOf2DArrayIn1DArray(i, j, columns) {
	return i + j * columns;
}

function getElementPosition(index, columns) {
	j = 0;
	saveindex = index;
	while((index - columns) >= 0) {
		index -= columns;
		j++;
	}
	let i = saveindex - j * columns;

	return [i, j];
}

function parseSampleInput(values) {
	return values.split(' ');
}

function createMatrix(rows, columns) {
	const result = new Array(rows);

	for (let i = 0; i < result.length; i++ ) {
		result[i] = new Array(columns);
	}

	return result;
}

function parseFlatArrayInToMatrix(array, rows, columns) {
	const matrix = createMatrix(rows, columns);

	for (let index = 0; index < array.length; index++) {
		const coords = getElementPosition(index, columns);
		const i = coords[0];
		const j = coords[1];
		matrix[j][i] = +array[index]; 
	}

	return matrix;
}

function printMatrix(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		console.log(matrix[i])
	}
}

module.exports = {
	getIndexOf2DArrayIn1DArray,
	getElementPosition,
	parseSampleInput,
	parseFlatArrayInToMatrix,
	createMatrix,
	printMatrix
}