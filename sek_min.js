function getTimeFromMinutes(sec){
if (typeof(sec) !== 'number' || sec < 0 || !Number.isInteger(sec)) {
        return "Ошибка, проверьте данные";
}
let hourCalc;
let minutCalc;
let hourStr="";
hourCalc=Math.floor(sec / 60);
minutCalc=sec%60;
switch (hourCalc) {
    case 0: 
        hourStr = 'часов';
        break;
    case 1:
        hourStr = 'час';
        break;
    case 2:
    case 3:
    case 4:
        hourStr = 'часа';
        break;
    default:
        hourStr = 'часов';
}
 return `Это ${hourCalc} ${hourStr} и ${minutCalc} минут `;
}

console.log(getTimeFromMinutes(150)); 



function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180)

function findMaxNumber(a,b,c,d){
    if (typeof(a) !== 'number' ||
    typeof(b) !== 'number' ||
    typeof(c) !== 'number' ||
    typeof(d) !== 'number') {
    return 0;}
else{
    let max;
    max=Math.max(a,b,c,d);
    return max;
}
}
findMaxNumber(1, 5, '6.6', 11);