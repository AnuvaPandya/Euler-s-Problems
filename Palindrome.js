const checkIsPalindrome =(num) => {
    var num1 = num.toString();
     numNew = num1.split("").reverse().join('');
             if(num1 === numNew){
                 // console.log(numNew, num1, num);
                 return true;
             }
     return false;
 }

 const findPalindrome = () => {
     var array = [];
     for (var a = 999; a>=100; a--){
         for (var b = 999; b>=100; b--){
             var total = a*b;
             if(checkIsPalindrome(total)){
                 // console.log(total,a,b);
                 array.push(total);
             }
         }
     }
     console.log(array)
         return Math.max.apply(Math, array);
 }
console.log(findPalindrome())