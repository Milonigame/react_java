'use strict';
const box = document.getElementById('box');
const wrapper=document.querySelector('.wrapper');
console.log(box);
const btns=document.getElementsByTagName('button');//[1] если добавлю так, 
//то в btns будет только вторая кнопка 
console.log(btns[0]);//а если так, то обращаюсь к конкретной кнопке из массива
const circles=document.getElementsByClassName('circle');
console.log(circles);
const hearts=wrapper.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item=>{
    console.log(item);
});
const oneHeart=wrapper.querySelector('.heart');
console.log(oneHeart);



box.style.backgroundColor='blue';
box.style.width='500px';
box.style.cssText=`background-color:blue;width:500px`;
btns[1].style.borderRadius='100%';
circles[0].style.backgroundColor='red';


// for (let i=0;i<hearts.length;i++){
//     hearts[i].style.backgroundColor='blue';-
// }////поменять цвет для всех элементов сразу
hearts.forEach(item=>{
    item.style.backgroundColor='green';
});//поменять цвет для всех элементов сразу

const div=document.createElement('div');
const text=document.createTextNode('Тут был я');

div.classList.add('black');

document.body.append(div);//cоздаем вне html
// wrapper.append(div);//создаем внутри html
// wrapper.appendChild(div);

// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div,hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML="<h1>Hello World</h1>";
// div.textContent='Hello';
// div.style.color='red';
// div.insertAdjacentHTML("beforebegin",'<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend','<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend','<h2>Hello</h2>');

alert(1);








