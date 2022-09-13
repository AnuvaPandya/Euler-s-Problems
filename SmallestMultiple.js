const SmallestMultiple = () => {
  var num = 21;
  while(num <= Number.MAX_SAFE_INTEGER){
    for (var i = 1; i <= 10; i++) {
        if (num % i === 0) {
       continue;
        }
      else{
        num++;
      }
      console.log(num)
    }
  } 
};

console.log(SmallestMultiple());