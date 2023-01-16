'use strict';
let c = 4; 
function addX(x) {
  return function(n) {
     return n + x; 
     
  }
}
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);




