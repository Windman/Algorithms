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

exports.findWordFriquency = findWordFriquency;
