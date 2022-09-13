const SquareDifference =() =>{
    var x = 0;
    var y = 0;
    var z = 0;
    for (i=1; i<=100; i++){
        x += i*i;
        y = y+i;
    }
    z = y*y;
    var dif = z-x;
    console.log(x,z);
    console.log(dif);
}

console.log(SquareDifference());