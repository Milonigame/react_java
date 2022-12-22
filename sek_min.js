function timeCheck(sec){
let hourCalc;
let minutCalc;
let sek;

hourCalc=Math.floor(sec / 60);
sek=Math.floor(sec%3600);
minutCalc=Math.floor(sek/60);


 return `Это ${hourCalc} часа и ${minutCalc} минут `;


}
timeCheck(150);

function timeNew(n){
  let ready;
  let hour;
  let minuts;
  ready =new Date(n*1000);
  hour=ready.getHours();
  minuts=ready.getMinutes();

  return `Это ${hour} часа и ${minuts} минут `;

}

timeNew(150);
