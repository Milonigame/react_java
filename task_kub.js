function calculateVolumeAndArea(s) {
    if (typeof(s) !== 'number' || s <0 || !Number.isInteger(s)){
    return "При вычислении произошла ошибка";
}
let sV=0,
    vO=0;
    
sV=(s*s)*6;
vO=s*s*s;

return `Объем куба: ${vO}, площадь всей поверхности: ${sV}`;

}
calculateVolumeAndArea(5);


// Место для второй задачи
function getCoupeNumber(s) {
    if (typeof(s) !== 'number' || !Number.isInteger(s)){
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    else if (s <=0||s>36){
        return "Таких мест в вагоне не существует";
    }
   else if ( s<=4){
    return '=> 1';
   }
   else if ( s>=5&&s<=8){
    return '=> 2';
   }
   else if ( s>=9&&s<=12){
    return '=> 3';
   }
   else if ( s>=13&&s<=16){
    return '=> 4';
   }
   else if ( s>=17&&s<=20){
    return '=> 5';
   }
   else if ( s>=21&&s<=24){
    return '=> 6';
   }
   else if ( s>=25&&s<=28){
    return '=> 7';
   }
   else if ( s>=29&&s<=32){
    return '=> 8';
   }
   else if ( s>=34&&s<=36){
    return '=> 9';
   }
   
}

getCoupeNumber(36);