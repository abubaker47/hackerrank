function utopianTree(n) {
    // Write your code here
    let height=0, period=0;
    
    for(let i=0; i<=n; i++){
        if(period == 1){
            period = 0;
            height = height*2;
        } else{
            period++;
            height++;
        }

        console.log(i, height)
    }

    return height;
}

console.clear()
console.log(utopianTree(4))