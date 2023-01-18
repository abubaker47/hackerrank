function designerPdfViewer(h, word) {
    // Write your code here
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    
    return word.split('').reduce((p,c) => {
        return (p < h[alphabet.indexOf(c)]) ? h[alphabet.indexOf(c)] : p;
    }, 0) * word.length;
}

console.clear();
console.log(designerPdfViewer(
    [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"))

    
console.log(designerPdfViewer(
    [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7], "zaba"));