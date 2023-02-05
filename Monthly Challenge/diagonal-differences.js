function diagonalDifference(arr) {
    // Write your code here
    let [ltr, rtl] = [0, 0];
    let j = arr.length - 1;
    
    for(let i=0; i < arr.length; i++, j--){
        ltr += arr[i][i];
        rtl += arr[i][j];
    }
    
    return Math.abs(ltr - rtl);
}

console.clear();
