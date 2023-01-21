function angryProfessor(k, a) {
    // Write your code here
    return (a.filter(e => e <= 0).length >= k) ? 'NO' : 'YES';
}

console.clear();
console.log(angryProfessor(3, [-1,-3,4,2]));
console.log(angryProfessor(2, [0,-1,2,1]));