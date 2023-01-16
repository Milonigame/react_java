'use strict';
const box = document.getElementById('box');
console.log(box);
const btns=document.getElementsByTagName('button');//[1] если добавлю так, 
//то в btns будет только вторая кнопка 
console.log(btns[0]);//а если так, то обращаюсь к конкретной кнопке из массива
const circles=document.getElementsByClassName('circle');
console.log(circles);
const hearts=document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item=>{
    console.log(item);
});
const oneHeart=document.querySelector('.heart');
console.log(oneHeart);

