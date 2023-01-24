function permutationEquation(p) {
    // Write your code here
    return p.map((d,e) => p.indexOf(p.indexOf(e+1)+1)+1);
}

console.clear();
console.log(permutationEquation([5,2,1,3,4])) // 42513
console.log(permutationEquation([2,3,1])) // 231
console.log(permutationEquation([4,3,5,1,2])) // 13542