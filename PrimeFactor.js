
const checkIsPrime = (number) => {
    for(var i = 2; i <= number/2; i++){
      if(number % i === 0){
        return false;
      }
  }
  return true;
 }

 const findPrimeFactor = (num) => {
    var result  = (num % 2 === 0) ? [2] : [];
    let num2 = 3;
    while(num2 <= num){
      if(num % num2 === 0){
        if(checkIsPrime(num2)){
          result.push(num2)
        }
      }
      num2++;
    }
    console.log(result);
  }
  console.log(findPrimeFactor(600851475143));
