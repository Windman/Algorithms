function bestMin(arr1, arr2) {
    let i = 0;
    let j = 0;
    let bestMin = [arr1[0], arr2[0]];
    
    while ((i < arr1.length) && (j < arr2.length)) {
        
      let currDif = Math.abs(arr1[i] - arr2[j]); 
      let bestMinDif = Math.abs(bestMin[0] - bestMin[1]);
  
     if (currDif < bestMinDif) {
       bestMin[0] = arr1[i];
       bestMin[1] = arr2[j];
     }
    
      if (arr1[i] > arr2[j]) {
        j++;
      } else { 
        i++;
      }
    }
  
    return bestMin;
  }
  
  console.log(
    bestMin([6, 10, 19], [1, 2, 9, 15, 25])
  );