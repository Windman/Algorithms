const assert = require('chai').assert;

function isPalindrome(word) {
  const symmetricCharsAreEqual = (str, index) => {
    const symmetricCharIndex = str.length - 1 - index;
    return str.charCodeAt(index) == str.charCodeAt(symmetricCharIndex);
  };

  const _isPalindrome = (str, index) => {
    const currentIndex =
      str.length % 2 == 0 ? str.length / 2 : (str.length - 1) / 2;
    if (index === currentIndex) return true;

    if (symmetricCharsAreEqual(str, index)) {
      return _isPalindrome(str, index + 1);
    }
    return false;
  };

  return _isPalindrome(word, 0);
}

describe('Palindrome recursive approach', () => {
  let r = '';

  before((done) => {
    done();
  });

  after((done) => {
    done();
  });

  it('Palindrome function Test 1', (done) => {
    r = 'aca';
    assert.isTrue(isPalindrome(r));
    r = 'bacab';
    assert.isTrue(isPalindrome(r));
    done();
  });

    it("Test 1", done => {
      r = "aaaa";
      assert.isTrue(isPalindrome(r));
      done();
    });

    it("Test 2", done => {
      r = "aba";
      assert.isTrue(isPalindrome(r));
      done();
    });

    it("Test 3", done => {
      r = "mnonopoo";
      assert.isFalse(isPalindrome(r));
      done();
    });

    it("Test 4", done => {
      r = "asasd";
      assert.isFalse(isPalindrome(r));
      done();
    });

    it("Test 5", done => {
      r = "abcbaba";
      assert.isFalse(isPalindrome(r));
      done();
    });
});
