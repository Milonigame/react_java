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
function palin(str){
str=str.toLowerCase().replace(/ /g,'');
return str===str.split('').reverse().join('');

}
console.log(palin('А роза упала на лапу Азора'));