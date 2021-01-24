const assert = require('chai').assert;

function findWordFriquency(str, exclude) {
	const analyze = str
	  .replace(/[.':~!@#$%^&*()'/]/g, " ")
	  .split(" ")
	  .filter(x => x !== "");
	map = {};
	analyze.forEach(w => {
	  const word = w.toLowerCase();  
	  if (exclude.findIndex(x => x.toLowerCase() === word) < 0) {
		  if (!map[word]) {
			  map[word] = 1;
		  } else {
			  map[word]++;
		  }
		} 
	});
  
	const result = [];
	for (let key in map) {
	  if (result[map[key]]) {
		  result[map[key]].push(key);
	  } else {
		  result[map[key]] = [key]
	  }
	}
	return result[result.length - 1];
  }

describe.skip('Strings based algorithms', () => {
	before(done => {
		done();
	});

	after(done => {
		done();
	});

	// beforeEach(() => {

	// });

	describe('Words', () => {
		it('Find word friquency should return correct array of the most friquet values', done => {
			const text = `It is not changed, you are looking at Assert's functionality:s, but not Expect's/Should!s which topic starter was changed concerned about`;
			const exclude = ['it', 'is', 'the', 'not'];
			const result = words.findWordFriquency(text, exclude);

			assert.deepStrictEqual(result, ['s']);

			done();
		});
	});

	describe('Arrays with words', () => {
		it('Sort array', done => {
			const data = [
				['ab2s12342a number string boolean'],
				['c3d5 4 5 6 7'],
				['ab4 1 2 3 4'],
				['af1 maks niks'],
				['ab2 number string boolean'],
				['c3d4 4 5 6 7']
			];

			const delimeter = ' ';

			arrays.sortArray(data, delimeter);

			const expected = [
				['af1 maks niks'],
				['ab2 number string boolean'],
				['ab2s12342a number string boolean'],
				['ab4 1 2 3 4'],
				['c3d4 4 5 6 7'],
				['c3d5 4 5 6 7']
			];

			for (let i = 0; i < data.length; i++) {
				assert.strictEqual(data[i][0], expected[i][0]);
			}

			done();
		});
	});
});
