/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded',()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const images=document.querySelectorAll('.promo__adv img'),
          poster=document.querySelector('.promo__bg'),
          genre=poster.querySelector('.promo__genre'),
          promo=document.querySelector('.promo__interactive-list');
          
          /////(5)
    
    
    // (4)
    promo.innerHTML='';
    movieDB.movies.sort();
    movieDB.movies.forEach((film,i)=>{
    promo.innerHTML+=` <li class="promo__interactive-item">${i+1}. ${film}
    <div class="delete"></div>
    </li>`;
    });
    
    
    // (1) 
    images.forEach(item=>{
        item.remove();
    });
    // (2)
    genre.textContent='Драма';
    // (3)
    poster.style.backgroundImage='url("img/bg.jpg")';
    
    
    
});

