function pairsBasedOnMap(data, sum) {
    const map = new Map();
  
    for (let i = 0; i < data.length; i++) {
      let diff = sum - data[i];
      if (diff >= 0 && !map.has(sum - data[i])) {
        map.set(data[i], diff);
        console.log(`${map.get(data[i])}, ${data[i]}`);
      }
    }
  }
  
  pairsBasedOnMap([1, 2, 0, 5, 6, -3, 3], 3);
  //pairsBasedOnMap([1, 2, 0, 5, 6, -3, 3], 6);