// function factorial(num){
//     if (num<=1){
//         return 1;
//     }
//     if(typeof(num) !== 'number'||!Number.isInteger(num)){
//       return 'Введите число';
//     }
//     for(var result=1; num>1; num--){
//         result*=num;
    
//     }
//     return result;
// }

// console.log(factorial('gh'));

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    return n ? n * factorial(n - 1) : 1;
}

factorial(5)