function foo(a,b) {
    const [second]= a;
    const {eng} = b;
  
    return `${second} ${eng}`;
  }
  
  const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
  console.log(result);
  

console.log(typeof([]+false-null+true));
console.log([]+null);
let y=1;
let x=y=2;
alert(x);

console.log([]+1+2);//12

alert('1'[0]);//по индексу ноль из строки '1' выводит 1
console.log(2&&1&&null&&0&&undefined);// первое ложное-null
console.log(!!(1&&2)===(1&&2));//!! превращает выражение в буливое,поэтому будет false
console.log(null||2&&3||4);//по таблице приоритетов &&-приоритетнее чем||,
//поэтому сначала выполняется &&,
//и так как оба верны,
//а && ищет ложное,то выдаст 3,а потом при сравнении null||3,ответ-3
