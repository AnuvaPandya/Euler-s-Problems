const Fabonacci = () => {
    var total = [];
    var num1 = 0;
    var num2 = 1;
  
    for (let i = 1; i < 400000; i++) {
      var sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      if (sum % 2 === 0) { 
      total.push(sum);
     
        console.log(sum);
        var newTotal = 0;
        for (var j = 0; j < total.length; j++) {
          newTotal += total[j];
        }
      }
      console.log(newTotal);
    }
}

console.log(Fabonacci());
