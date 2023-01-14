function hurdleRace(k, height) {
    // Write your code here
    let calc = Math.max(...height)-k;
    return (calc > 0) ? calc : 0;
}

console.clear();
console.log(hurdleRace(4, [1,6,3,5,2]));