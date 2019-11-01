const utility = require('./utilites');
const hourglass = require('./hourglass');
const findpath = require('./find-path');

// Initial values
var dimesions = "3 3";
var target = "3 2";
var obstacles = "0 0 0 1 1 0 1 0 0";

async function main() {
	//const matrix = await utility.readMatrix('./find-path/sample1.txt');
	//utility.printMatrix(matrix);
	
	//const hourglassSample = await utility.readMatrix('./hourglass/sample.txt');
	//hourglass(hourglassSample);

	const findPathSample = await utility.readMatrix('./find-path/sample.txt');

	try {
		utility.printArray(findpath(findPathSample, 3, 3, [0, 0], [2, 1]));
	} catch (error) {
		console.error(error);
	}
	
}

main();
