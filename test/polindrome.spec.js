const assert = require("chai").assert;

const equalChars = r => {
  let res = true;
  let p;
  for (let i = 0; i < r.length; i++) {
    if (p === undefined) {
        p = r[i];
    } else {
        if (p.charCodeAt(0) === r[i].charCodeAt(0)) {
            res = res && true;
          } else {
            res = res && false;
          }
    }
  }
  return res;
};

const poloindrome = str => {
  const middle = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return equalChars(str);
  } else {

    return str.slice(0, middle) == str.slice(middle + 1, str.length);
  }
};

const analyze = r => {
  let count = 0;
  let len = r.length;
  while (len > 1) {
    for (let i = 0; i + len - 1 < r.length; i++) {
      count += poloindrome(r.slice(i, len + i)) ? 1 : 0;
    }
    len--;
  }

  return count + r.length;
};

describe("Anogramm", () => {
  let r = "";

  before(done => {
    done();
  });

  after(done => {
    done();
  });

  beforeEach(() => {
    r = "";
  });

  it("Test equalChars 1", done => {
    r = "aaaa";
    assert.isTrue(equalChars(r));
    r = "absb";
    assert.isFalse(equalChars(r));
    r = "mnonopoo";
    assert.isFalse(equalChars(r));
    done();
  });
  equalChars;

  it("Test 1", done => {
    r = "aaaa";
    assert.equal(analyze(r), 10);
    done();
  });

  it("Test 2", done => {
    r = "aba";
    assert.equal(analyze(r), 4);
    done();
  });

  it("Test 3", done => {
    r = "mnonopoo";
    assert.equal(analyze(r), 12);
    done();
  });

  it("Test 4", done => {
    r = "asasd";
    assert.equal(analyze(r), 7);
    done();
  });

  it("Test 5", done => {
    r = "abcbaba";
    assert.equal(analyze(r), 10);
    done();
  });
});
