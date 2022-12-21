'use strict';
let numberOfFilms;
function start() {
    numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
    while ( numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
    }

}
start();
const personalMovieDB={
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};
