//////////////////////////////////
// 1 СПОСОБ
//////////////////////////////////


// function palin(str){
//     //нижний регистр
//     str=str.toLowerCase();
//     str=str.replace(/ /g,'');
//     console.log(str);
//     //строку в массив
//     let str2=str.split('');
//     //развернутый массив
//     str2=str2.reverse();
//     //объединяем в строку
//     str2=str2.join('');
//     if(str==str2){
//     return true;}
//     else {return false;}
// }
// console.log(palin('А роза упала на лапу Азора'));

//////////////////////////////////
// 2 СПОСОБ
//////////////////////////////////
// function palin(str){
// str=str.toLowerCase().replace(/ /g,'');
// return str===str.split('').reverse().join('');

// }
// console.log(palin('А роза упала на лапу Азора'));


// function rev(str){
// return str.split('').reverse().join('');
// }
// const g='я пошла гулять';
// console.log(rev(g));


// function reverseString(str) {
//     let reversedString = '';

//    /* с помощью цикла проходим по каждому элементу str
// Чтобы развернуть строку мы присваиваем переменной i значение str.length-1 в то время, как i больше или равно 0.

// Добавляем каждый символ, начиная с конца, в новую строку
//    */
//     for (let i = str.length-1; i >= 0; i--) {
//         reversedString += str.charAt(i);

//     }
//     return reversedString;
// }
// const h='я пошла гулять';
// console.log(reverseString(h));

// function reverseString(str) {
//     let reversedString = '';

   /* Проходим по каждому символу в аргументе str
Чтобы развернуть строку, мы присваиваем переменной i значение str.length
Добавляем по очереди каждый символ строки str, начиная с конца, в новую строку.
   */
//     for (let i = str.length; i > 0; i--) {
//         console.log(reversedString += str.substring(i, i-1));
//     }
//     return reversedString;
// }

// const t='я пошла гулять';
// console.log(reverseString(t));

// function longWord(str){
//     return str.split('').reverse().join('');

//     }


//     function findLongestWordLength(str) {
//         let maxVal = 0;
      
//         const wordArr = str.split(' ');
      
//         for(let i = 0; i < wordArr.length; i++) {
//             let word = wordArr[i];
//             if (word.length > maxVal) {
//                 maxVal = word.length;
//             }
//         }
//         return maxVal;
//       }
      

//     const words='я пошла гулять';
//     console.log(findLongestWordLength(words));

function largestOfFour(arr) {
    let arrayOfMaxValues = [];
    for (let i = 0; i < arr.length; i++) {
        let subArr = arr[i];
        let maxSubArrVal = 0;
        for (let j = 0; j < subArr.length; j++) {
            let currentValue = subArr[j];
            if (currentValue > maxSubArrVal) {
              console.log(maxSubArrVal = currentValue);
            }
        }
        arrayOfMaxValues.push(maxSubArrVal);
    }
    return  arrayOfMaxValues;
  }

  const mas=[[1,2,3,4],
  [5,18,0,12],
  [3,5,12,5,],
  [28,9,2,34]];
//   console.log(largestOfFour(mas));
  
function largestOfFour(arr) {
    return arr.map(arr => Math.max(...arr));
  }

  console.log(largestOfFour(mas));
//   console.log(Math.max(mas));

const obj={
    g:23,
    j:30
};
// const clone=Object.assign({},obj);
// clone.g=30;
// console.log(obj);
// console.log(clone);


const newObj={...obj};
console.log(newObj);
newObj.j=50;
console.log(newObj);
console.log(obj);

