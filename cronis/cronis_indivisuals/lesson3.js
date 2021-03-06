
function findWords(words, hashMap) {
    let result = "";
    let start = 0;
    let end = 0;
    while (end < words.length) {
  
      Object.keys(hashMap).forEach(word => {
        if (words.charAt(end) === word.charAt(0)) {
          let candidate = words.substring(end, end + word.length);
          if (hashMap[candidate]) {
            result = result + words.substring(start, end) + ' ' + candidate + ' ';
            start = end + word.length;
          } 
        }
      });
      
      end++;
    }
  
    return result + words.substring(start, end);
  }
  
  
  console.log(findWords("ILOVECATSANDDOGSSSSS".toLowerCase(), { cats: true, dog: true, i: true }));