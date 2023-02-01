function miniMaxSum(arr) {
    arr.sort();
    console.log(
        arr[0] + arr[1] + arr[2] + arr[3],
        arr[1] + arr[2] + arr[3] + arr[4],
    )
}

console.clear();
miniMaxSum([1,3,5,7,9]);
miniMaxSum([1,2,3,4,5]);
miniMaxSum([7,69,2,221,8974]);