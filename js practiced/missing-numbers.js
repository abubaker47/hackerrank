function missingNumbers(arr, brr) {
    // Write your code here
    let c =0;

    return brr.filter((e,i) => { 
        let res = false;

        if(i < arr.length) 
            res = e !== arr[i-c];

        res && c++;
        return res;
    });
}

console.clear();
console.log(missingNumbers(
    [203,204,205,206,207,208,203,204,205,206], 
    [203,204,204,205,206,207,205,208,203,206,205,206,204]
))

console.log(missingNumbers(
    [7,2,5,3,5,3],
    [7,2,5,4,6,3,5,3]
))