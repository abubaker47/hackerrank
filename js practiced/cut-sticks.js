function cutTheSticks(arr) {
    // Write your code here
    arr = arr.sort((a,b) => a-b);
    let result = [arr.length]
    while((new Set(arr).size>1))
    {
        arr = arr.map((element) => element - arr[0]).filter((element) => element > 0)
        result.push(arr.length);
    }
    return result;
}

console.clear();
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));