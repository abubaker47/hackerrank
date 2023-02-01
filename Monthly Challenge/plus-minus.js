function plusMinus(arr) {
    // Write your code here
    let p=0, z=0, m=0;

    for(e of arr){
        if(e > 0) p++;
        else if(e < 0) m++;
        else if(e == 0) z++;
    }

    console.log((p/arr.length).toFixed(6));
    console.log((m/arr.length).toFixed(6));
    console.log((z/arr.length).toFixed(6));
}

console.clear();
console.log(plusMinus([1,1,0,-1,-1]));
console.log(plusMinus([-4,3,-9,0,4,1]));