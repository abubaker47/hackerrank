function libraryFine(d1, m1, y1, d2, m2, y2) {
    if(d1-d2 >=1 && y1-y2==0 && m1-m2==0) return (d1-d2) * 15;
    if(m1-m2 >=1 && y1-y2==0) return (m1-m2) * 500;
    if(y1-y2 >=1) return 10000;
    return 0;
}

console.clear();
console.log(libraryFine(9,6,2015,6,6,2015));
console.log(libraryFine(14,7,2018,5,7,2018));
console.log(libraryFine(6,6,2015,9,6,2016));
console.log(libraryFine(2,7,1014,1,1,1015));
console.log(libraryFine(1,1,1015,1,1,1015));