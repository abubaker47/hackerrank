function lonelyinteger(a) {
    let arr = a.map(e => {
        let count = 0;
        for(let i=0; i<a.length; i++)
        if(e == a[i]) count++;

        return count;
    });

    return a[arr.indexOf(1)];
}

console.clear();
console.log(lonelyinteger([1,2,3,4,3,2,1]))
console.log(lonelyinteger([0,0,1,2,1]))
console.log(lonelyinteger([1,1,2]))