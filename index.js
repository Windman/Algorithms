const utility = require('./utilites');

var dimesions = "3 3";
var target = "3 2";
var obstacles = "0 0 0 1 1 0 1 0 0";

async function main() {
	const matrix = await utility.readMatrix('./arrays/2darraysum/sample.txt');
	//const matrix = utility.parseFlatArrayInToMatrix(utility.parseSampleInput(obstacles), 3, 3);
	utility.printMatrix(matrix);
	
}

main();
