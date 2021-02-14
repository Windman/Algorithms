// Dinamic programming
function removeIthChar(str, i) {
    const res = str.substring(0, i) + str.substr(i + 1);
    return res;
  }
  
  function permutations(candidate, letters) {
    if (letters.length === 0) {
      console.log(candidate);
    }
  
    for (let i = 0; i < letters.length; i++) {
      let letter = letters.charAt(i);
  
      permutations(candidate + letter, removeIthChar(letters, i))
    }
  }
  
  function uniqPermutations(candidate, letters) {
    if (letters.length === 0) {
      console.log(candidate);
    }
  
    let usedLetters = new Map();
  
    for (let i = 0; i < letters.length; i++) {
      let letter = letters.charAt(i);
      if (usedLetters.has(letter)) {
        continue;
      } else {
        usedLetters.set(letter);
        uniqPermutations(candidate + letter, removeIthChar(letters, i))
      }
  
      
    }
  }
  
  uniqPermutations("", "abc");