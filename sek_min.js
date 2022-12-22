function getTimeFromMinutes(sec){
if (typeof(sec) !== 'number' || sec < 0 || !Number.isInteger(sec)) {
        return "Ошибка, проверьте данные";
}
let hourCalc;
let minutCalc;
let hourStr="";
hourCalc=Math.floor(sec / 60);
minutCalc=Math.floor(sec%60);
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
getTimeFromMinutes(150);


