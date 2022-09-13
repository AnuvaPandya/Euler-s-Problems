const PythagoreanTraplet =() =>{
    for (var a= 1; a<=1000; a++){
        for (var b= a+1; b<=1000; b++){
           var c = 1000-(a+b);
            if((a*a + b*b) === c*c){
                console.log(a,b,c); 
                var product = a*b*c
            }
        }
    }

    console.log(product);
}


console.log(PythagoreanTraplet());