function timeCheck(sec){
let hourCalc;
let minutCalc;

hourCalc=Math.floor(sec / 60);
minutCalc=Math.floor(sec%3600)%60;


 return `Это ${hourCalc} часа и ${minutCalc} минут `;


}
timeCheck(150);


