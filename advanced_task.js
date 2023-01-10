const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
 let s=0;
 let v=0;
 let bud=0;

 data.shops.forEach(shop => {
    s+=shop.width*shop.length;
 });
 v=data.height*s;
 console.log(bud=v*data.moneyPer1m3);
 if(data.budget-(v*data.moneyPer1m3)>=0){
    return 'Бюджета достаточно';
 }else{
    return "Бюджета недостаточно";
 }
}

console.log(isBudgetEnough(shoppingMallData));