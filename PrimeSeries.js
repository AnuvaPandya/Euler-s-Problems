const PrimeSeries = () =>{
    var list  = []
    for (var i = 2; i<=Number.MAX_SAFE_INTEGER; i++){
        let flag = 0;
        for (var j = 2; j<i; j++){
            if(i%j === 0){
                 flag = 1;
                 break
            }
        }
        if( i > 1 && flag === 0){
            list.push(i);
        }
    }
    console.log(list.slice(-1));

}

console.log(PrimeSeries());