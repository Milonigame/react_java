const btns=document.querySelectorAll('button'),
    wrapper=document.querySelector('.btn-block');
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
console.log(btns[1].classList.add('red'));//можно добавить несколько классов сразу
// console.log(btns[0].classList.remove('blue'));//удалить можно тоже несколько классов сразу
// console.log(btns[0].classList.toggle('blue'));//добавляет если нету,а сели есть то будет убран


// if (btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click',()=>{
    if (!btns[1].classList.contains('red')){
        btns[1].classList.add('red')
;    }else{
    btns[1].classList.remove('red');
}
});//вот такая конструкция содержится в методе toggle,
//но в сложных скриптах лучше проверять вот таком кодом
console.log(btns[0].className);//такой метод лучше не использовать,он устарел и не удобен
wrapper.addEventListener('click',()=>{

})