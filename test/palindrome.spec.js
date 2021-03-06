const assert = require("chai").assert;

const palindrome = (s, pos) => {
  let counter = 0;
  let shift = 1;
  while (
    pos - shift >= 0 &&
    pos + shift < s.length &&
    s.charAt(pos - shift) == s.charAt(pos - 1) &&
    s.charAt(pos + shift) == s.charAt(pos - 1)
  ) {
    counter++;
    shift++;
  }
  return counter;
};

const analyze = s => {
  let len = s.length;
  let counter = 0;

  for (let i = 0; i < len; i++) {
    counter += palindrome(s, i);

    let repeats = 0;
    while (i + 1 < s.length && s.charAt(i) == s.charAt(i + 1)) {
      repeats++;
      i++;
    }
    counter += (repeats * (repeats + 1)) / 2;
  }
  return counter + len;
};

describe.skip("Palindrome iterative approach", () => {
  let r = "";

  before(done => {
    done();
  });

  after(done => {
    done();
  });

  it("Palindrome function Test 1", done => {
    r = "aca";
    assert.equal(palindrome(r, 1), 1);
    r = "bacab";
    assert.equal(palindrome(r, 2), 1);
    done();
  });

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
