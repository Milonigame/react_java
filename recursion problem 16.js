function factorial(num){
    if (num<=1){
        return 1;
    }
    if(typeof(num) !== 'number'||!Number.isInteger(num)){
      return 'Введите число';
    }
    for(var result=1; num>1; num--){
        result*=num;
    
    }
    return result;
}

console.log(factorial('gh'));