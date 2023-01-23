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
          moveList=document.querySelector('.promo__interactive-list'),
          addForm=document.querySelector('form.add'),
          addInput=addForm.querySelector('.adding__input'),
          checkbox=addForm.querySelector('[type="checkbox"]'),
          deleteFilm=document.querySelector('.delete');

        

          addForm.addEventListener('submit',(event)=>{//addEventListener-отлавливает событие-в данном случае отправку формы
            event.preventDefault();///для того чтобы страница не перезагружалась при отправке формы
            let newFilm=addInput.value;//в value будет содержаться то что ввел пользователь
            const favorite=checkbox.checked;
            if(newFilm){
                 if(newFilm.length>21){
                    newFilm=`${newFilm.substring(0,22)}...`;
                 }
                if(favorite){
                    console.log('Добавляем любимый фильм');

                }
                
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies,moveList);
            }

            event.target.reset();

          });

    // (4)
    // promo.innerHTML='';
    // movieDB.movies.sort();
    // movieDB.movies.forEach((film,i)=>{
    // promo.innerHTML+=` <li class="promo__interactive-item">${i+1}. ${film}
    // <div class="delete"></div>
    // </li>`;
    // });

    function createMovieList(films,parent){
        parent.innerHTML='';
        sortArr(films);
        films.forEach((film,i)=>{
        parent.innerHTML+=` <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
        </li>`;
        });

    document.querySelectorAll('.delete').forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
        btn.parentElement.remove();
        movieDB.movies.splice(i,1);
        createMovieList(films,parent);
});
        });
     }

    // (1) 
     const deleteAdv=(arr)=>{
        arr.forEach(item=>{
            item.remove();
        });
     };

    const makeChanges=()=>{
           // (2)
    genre.textContent='Драма';
    // (3)
    poster.style.backgroundImage='url("img/bg.jpg")';
    };
    const sortArr=(arr)=>{
        arr.sort();
    };

    createMovieList(movieDB.movies,moveList);
    makeChanges();
    deleteAdv(images);
    

});

