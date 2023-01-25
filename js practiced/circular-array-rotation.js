function circularArrayRotation(a, k, queries) {
    // Write your code here
    for(let i=0; i<k; i++)
        a.unshift(a.pop());
    
    return queries.map(e => a[e]);
}

console.clear();
console.log(circularArrayRotation([1,2,3], 2, [0,1,2]))