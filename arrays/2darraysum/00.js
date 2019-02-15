const fs = require('fs');

let inputString = '';
let currentLine = 0;

fs.readFile('./test/00/sample3.txt', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	inputString = data
		.toString()
		.replace(/\s*$/, '')
		.split('\n')
		.map(str => str.replace(/\s*$/, ''));

	main();
});

function readLine() {
	return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
	const summ = data =>
		data.reduce((p, k) => {
			return p + k;
		}, 0);

	const size = arr.length % 2 === 0 ? arr.length / 2 : (arr.length - 1) / 2;

	let last = Number.NEGATIVE_INFINITY;

	for (let y = 0; y < size + 1; y++) {
		let skip = 0;
		let take = 0;
		for (let x = 0; x < size + 1; x++) {
			skip = x;
			take = size + x;
			
			let sum = summ(arr[y].slice(skip, take)) 
			+ summ(arr[y+1].slice(skip + 1, take - 1)) 
			+ summ(arr[y+2].slice(skip, take));
			
			if (last < sum) {
				last = sum;
			}
		}
	}

	console.log(`Max: ${last}`);
}

function main() {
	let arr = Array(6);

	for (let i = 0; i < 6; i++) {
		arr[i] = readLine()
			.split(' ')
			.map(arrTemp => parseInt(arrTemp, 10));
	}

	let result = hourglassSum(arr);

	console.log('Result', result);
}
