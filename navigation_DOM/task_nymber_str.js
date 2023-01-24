function amountOfPages(summary){
    let result='';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
}


console.log(amountOfPages(25));

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));


function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++)
    if (Array.isArray(a[i]))
    count += deepCount(a[i]);
    return count;
}
console.log(deepCount([1, 5, 3]));

console.log(deepCount(["1", 5, "3", ["10"]]));

console.log(deepCount([1, 2, [3, 4, [5]]]));

console.log(deepCount([]));

console.log(deepCount([[[[[[[[[]]]]]]]]]));

