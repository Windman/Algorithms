const assert = require('chai').assert;

const trace = (r, ar, id) => {
	for (let i = 0; i < ar.length; i++) {
		const chr = ar[i].charCodeAt(0);
		if (r[chr] === undefined) {
			r[chr] = [];
			r[chr][id] = 1;
		} else if (r[chr][id] === undefined) {
			r[chr][id] = 1;
		} else {
			r[chr][id] ++;
		}
	}
}

const analyze = r => {
	let summ = 0;
	r.filter(x => x !== undefined).forEach(data => {
		const ar = data.filter(x => x !== undefined);

		if (ar.length === 1) {
			summ += ar[0];
		} else if (ar.length === 2) {
			if (ar[0] > ar[1]) {
				summ += ar[0] - ar[1];
			} else {
				summ += ar[1] - ar[0];
			}
		}
	});
	return summ;
}


describe('Anogramm', () => {
	let r = [];
	
	before(done => {
		done();
	});

	after(done => {
		done();
	});
	
	beforeEach(() => {
		r = [];
	});

	it('Test 1', done => {
		const a = "abc";
		const b = "cde";
		trace(r, a, 0);
		trace(r, b, 1);
		assert.equal(analyze(r), 4);
		done();
	});
	
	it('Test 2', done => {
		const a = "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn";
		const b = "lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk";
		trace(r, a, 0);
		trace(r, b, 1);
		assert.equal(analyze(r), 40);
		done();
	});

	it('Test 3', done => {
		const a = "men";
		const b = "woumen";
		trace(r, a, 0);
		trace(r, b, 1);
		assert.equal(analyze(r), 3);
		done();
	})
});
