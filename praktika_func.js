/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';



const personalMovieDB={
count:0,
movies:{},
actors:{},
genres:[],
privat:false,
start: ()=> {
    personalMovieDB.count= +prompt('Сколько фильмов вы уже посмотрели?','');
    while ( personalMovieDB.count =="" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count= +prompt('Сколько фильмов вы уже посмотрели?','');
    }

},
rememberMyFilms:()=>{
    for (let i=0; i<2; i++){
    const answer1= prompt('Один из последних просмотренных фильмов?','');
    const answer2= prompt('На сколько оцените его?','');
    if (answer1 != null && answer2 != null && answer1!='' && answer2!=''&&answer1.length<5&&answer2.length<5){
        personalMovieDB.movies[answer1]=answer2;
        console.log('done');
     }else{
        console.log('error');
        i--;
     }
    }
    },
    detectPersonalLevel:()=>{
        if (personalMovieDB.count<10){
           console.log('Просмотрено довольно мало фильмов');
        }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
       console.log('Вы классический зритель');
        }else if(personalMovieDB.count>=30){
           console.log('Вы киноман');}
        else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
               console.log('Вы классический зритель');
       }
       else {
           console.log('Произошла ошибка');
       }
       },
       showMyDB:function (hidden){
        if(!hidden){
        console.log(personalMovieDB);
        }
        },
        writeYourGenres:()=>{
            for (let i=1;i<=3;i++){
            personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
};

