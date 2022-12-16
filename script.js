
const numberOfFilms= prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB={
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};

const answer1= prompt('Один из последних просмотренных фильмов?','');
const answer2= prompt('На сколько лцените его?','');

personalMovieDB.movies[answer1]=answer2;
console.log(personalMovieDB);
