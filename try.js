function multiplyAll(arr) {
    let product = 1;
  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
      product *= arr[i][j];

    }
  }
  console.log(product);
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);