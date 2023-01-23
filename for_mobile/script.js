//touchstart - событие возникает при касании к этому элементу
//touchmove - если палец при касании начинает двигаться
// по этому элементу,то каждый раз при каждом смещении 
//пальца будет срабаатывать touchmove
//touchend - как только палец оторвался от элемента то touchend выполнитсяж
//touchenter - будет срабатывать когда ведем пальцем по экрану и 
//при этом наскакиваем на элемент на котором повешано это событие
//touchleave - когда палец скользит и уходит за пределы этого элемента
//touchcancel - когда точка соприкосновения не регестрируется на поверхности(когда палец вышел за пределы браузера)

window.addEventListener('DOMContentLoaded', (e)=>{
    const box=document.querySelector('.box');

    box.addEventListener('touchstart', (e)=>{
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
        });
    // box.addEventListener('touchmove', (e)=>{
    //     e.preventDefault();
    //     console.log('Move');
    //         });
            box.addEventListener('touchmove', (e)=>{
                e.preventDefault();
                console.log(e.targetTouches[0].pageX);
                    });
    // box.addEventListener('touchend', (e)=>{
    //     e.preventDefault();
    //     console.log('End');
        
    //             });
});

//touches -чтобы выяснить сколько пальцев взаимодействуют с сайтом
//targetTouches-все пальцы которое взаимодействуют с конкртетным элементом
//changedTouches-список пальцев учавствующих в текущем событии