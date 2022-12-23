// function fib(num) {
//     for (let i in num){
// let sum=0;
// sum=i;
// return sum;
//     }

// }

function fibonacci(num){
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
let a=0,
    b=1,
    result='';
for (let i=0;i<num;i++) {
    if (i + 1 === num) {
        result += `${a}`;}
        else{
            result += `${a} `;
        }
let c=a+b;
a=b;
b=c;
    }
    return result;
}
fibonacci(18);