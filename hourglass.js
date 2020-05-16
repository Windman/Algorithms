
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

module.exports = hourglassSum;