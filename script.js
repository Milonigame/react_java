
// урок №1 ответы от пользователя
/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */
const numberOfFilms= prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB={
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};

const answer1= prompt('Один из последних просмотренных фильмов?','');
const answer2= prompt('На сколько оцените его?','');

personalMovieDB.movies[answer1]=answer2;
console.log(personalMovieDB);


 /////////////////////////////////////////////
// вложенный цикл
/////////////////////////////////////////////

let result='';
const length=7;

for (let i =1; i<length; i++){
for (let j=0; j<i; j++){
    result+='*';
}
result+='\n';
}

console.log(result);

/////////////////////////////////////////////
// задача 1
/////////////////////////////////////////////
for (let i =5; i<=10; i++){
  console.log(i);
  
    }

/////////////////////////////////////////////
// задача 2
/////////////////////////////////////////////
for (let i =20; i>10; i--){
    if (i===13) break;
    console.log(i);
    
      }

 /////////////////////////////////////////////
// задача 3
/////////////////////////////////////////////     
for (let i=2; i<=10; i+=2){
    console.log(i);
      }

 /////////////////////////////////////////////
// задача 4
/////////////////////////////////////////////  
let i=2;

while (i<=16){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}
 /////////////////////////////////////////////
// задача 5
///////////////////////////////////////////// 
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


 /////////////////////////////////////////////
// задача 6
///////////////////////////////////////////// 
function fourthTask() {
const ara=[];
for (let i = 5; i < 11; i++) {
ara[i-5]=i;
}
console.log(ara);
return ara;
}

 /////////////////////////////////////////////
// задача 7
///////////////////////////////////////////// 
const ara= [];
function fifthTask() {
    for (let i = 5; i < 11; i++) {
    ara[i-5]=i;
    
    }
      console.log(ara);
      return ara;
    }

    fifthTask() 

/////////////////////////////////////////////
// задача 8
/////////////////////////////////////////////

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

  for (let i=0; i<arr.length;i++){
    result[i]=arr[i]; 
  }
console.log(result);
console.log(arr);

    // Не трогаем
    return result;
};

firstTask();

