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

exports.sortArray = sortArray;
