const utility = require('./utilites');

var dimesions = "3 3";
var target = "3 2";
var obstacles = "0 0 0 1 1 0 1 0 0";

for (let i = 0; i < 10 * 10; i++) {
	const coord = utility.getElementPosition(i, 10);
	console.log(`index:${i} coord:${coord}`);
}

const matrix = utility.parseFlatArrayInToMatrix(utility.parseSampleInput(obstacles), 3, 3);
utility.printMatrix(matrix);

