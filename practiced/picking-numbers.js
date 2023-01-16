function pickingNumbers(a) {
    // Write your code here
    let sortedArr = a.sort();
    let prevCount = 1;
    let currCount = 0;
    let max = -Infinity;
    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (currCount == 0) {
            if (sortedArr[i] === sortedArr[i+1])
                prevCount++;
            else if (Math.abs(sortedArr[i] - sortedArr[i+1]) === 1)
                currCount++;
            else 
                prevCount = 1;
        } 
        else {
            if (sortedArr[i] === sortedArr[i+1])
                currCount++;
            else if (Math.abs(sortedArr[i] - sortedArr[i+1]) === 1) {
                prevCount = currCount;
                currCount = 1;
            }
            else {
                prevCount = 1;
                currCount = 0;
            }
                
        }
        
        if (max < (currCount + prevCount))
            max = currCount + prevCount;
    }
    return max;
}

console.clear();
//console.log(pickingNumbers([1,1,4,4,5,5,5,2,2]));
console.log(pickingNumbers([4,6,5,3,3,1]));
//console.log(pickingNumbers([1,2,2,3,1,2]));