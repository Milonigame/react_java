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
//а && ищет ложное,возвращает последнее в сравнении 3, 
//а далее сравниваем 3||4, и первое правдивое-3
const a = [1,2,3];
const b = [1,2,3];
console.log(a==b);//а и в это разные ссылки в памяти на идентичные данные;
alert( +'infinity' );// NAN-потому что мы пытаемся конвертировать строку в число ,
//Когда строка не может быть приведена к числу явно, результатом преобразования станет NaN
console.log('Ёжик'<'яблоко');
console.log(0||''||2||undefined||true||false);//первое правдивое ищемба это-2


