const checkIsPrime = (number) => {
    for(var i = 2; i <= number/2; i++){
      if(number % i === 0){
        return false;
      }
  }
  return true;
 }

const SumOfPrime = () => {;
    var sum = 0
  for (var i = 2; i < 2000000; i++) {
    if(checkIsPrime(i))
    sum = sum + i;
  }
  return(sum);
};

console.log(SumOfPrime());
