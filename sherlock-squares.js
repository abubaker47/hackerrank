function squares(a, b) {
    let ak=Math.ceil(Math.sqrt(a));
    let bk=Math.ceil(Math.sqrt(b));
    let i=0;
    (bk*bk==b)?i++:i;

    return (bk-ak)+i;
}

console.clear();
console.log(squares(3, 9));
console.log(squares(24, 49));
console.log(squares(17, 24));