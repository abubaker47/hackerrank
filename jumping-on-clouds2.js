function jumpingOnClouds(c, k) {
    let e=100, i=0;

    while(i < c.length){
        e = (c[i] === 1) ? e -= 3 : e -= 1;
        i += k;

        if(i === c.length) break;
        else if(i > c.length) i -= c.length;
    }
    
    return e;
}

console.clear();
console.log(jumpingOnClouds([0,0,1,0],2));
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0],2));
console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0],3));