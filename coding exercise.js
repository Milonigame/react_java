'use strict';
//////////////////////////////////
// Задача1
//////////////////////////////////
function sayHello(name) {
return console.log('Привет,'+ name +'!')
}
sayHello('Антон');

//////////////////////////////////
// Задача2
//////////////////////////////////
function returnNeighboringNumbers(num) {
return console.log([num-1,num,num+1])
}
//////////////////////////////////
// Задача3
//////////////////////////////////
returnNeighboringNumbers(5);

function getMathResult(num, times) {
  if (typeof(times) !== 'number' || times <= 0) {
      return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
      // if (i === times) {
      //     str += `${num * i}`;
          // Тут без черточек в конце
       
          str += `${num * i}---`;
          // Это тоже самое, что и
          // str = str + num * i + "---"
      
  }

  return str;
}
console.log(getMathResult(5,8))