const fs = require('fs');
const util = require('util');

const nodeReadFile = util.promisify(fs.readFile);

async function readFile(path) {
	const data = await nodeReadFile(path, "UTF-8");
	
	inputString = data
		.toString()
		.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	return inputString;
}

async function readMatrix(path, rows) {
	const textRows = await readFile(path);
	const arr = [];
	for (let i = 0; i < textRows.length; i++) {
		arr[i] = textRows[i].split(' ').map(e => parseInt(e, 10));
	}
	return arr;
}

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

/*
 * Soring function by a criteria
 * @param {array} data. - Input array
 * @param { key : {regexp}, rules: {array of predicates} } criteria - Criteria object
 * @param { string } delimeter
 */
function sortArray(data, delimeter) {
	const get = arr => arr[0];
	const getLine = arr => get(arr).split(delimeter);

	const sortByKey = getSortByKey();

	data.sort((a, b) => {
		const lineA = getLine(a);
		const lineB = getLine(b);

		const [keyA, ...dataA] = lineA;
		const [keyB, ...dataB] = lineB;

		const dA = dataA.join('');
		const dB = dataB.join('');

		if (isNumber(dA) && !isNumber(dB)) {
			return 1;
		} else if (isWord(dA) && !isWord(dB)) {
			return -1;
		}

		if (isNumber(dA) && isNumber(dB)) {
			return dA === dB ? sortByKey(keyA, keyB) : dA > dB ? 1 : -1;
		} else if (isWord(dA) && isWord(dB)) {
			return dA === dB ? sortByKey(keyA, keyB) :  dA > dB ? 1 : -1;
		} else {
			return 0;
		}
	});
}

/*
 * Sort key function
 */
function getSortByKey() {
	const expN = /[^a-zA-Z]/g;
	const expA = /[^0-9]/g;

	return function sortByKey(a, b) {
		nA = a.replace(expN, '');
		nB = b.replace(expN, '');

		if (nA === nB) {
			var aN = parseInt(a.replace(expA, ''), 10);
			var bN = parseInt(b.replace(expA, ''), 10);
			return aN - bN;
		} else {
			return nA === nB ? 0 : nA > nB ? 1 : -1;
		}
	};
}

function isNumber(str) {
	const criteria = /[0-9]/;
	return str.match(criteria) !== null;
}

function isWord(str) {
	const criteria = /[a-zA-Z]/;
	return str.match(criteria) !== null;
}

function removeFromArray(arr, elt) {
	for (var i = arr.length - 1; i >= 0; i--) {
	  if (arr[i] == elt) {
		arr.splice(i, 1);
	  }
	}
}

function printArray(arr) {
	console.log(arr);
}

module.exports = {
	getIndexOf2DArrayIn1DArray,
	getElementPosition,
	parseSampleInput,
	parseFlatArrayInToMatrix,
	createMatrix,
	printMatrix,
	readFile,
	readMatrix,
	isWord,
	isNumber,
	getSortByKey,
	sortArray,
	removeFromArray,
	printArray
}