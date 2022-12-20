

 /////////////////////////////////////////////
// вложенный цикл
/////////////////////////////////////////////

let result='';
const length=7;

for (let i =1; i<length; i++){
for (let j=0; j<i; j++){
    result+='*';
}
result+='\n';
}

console.log(result);

/////////////////////////////////////////////
// задача 1
/////////////////////////////////////////////
for (let i =5; i<=10; i++){
  console.log(i);
  
    }

/////////////////////////////////////////////
// задача 2
/////////////////////////////////////////////
for (let i =20; i>10; i--){
    if (i===13) break;
    console.log(i);
    
      }

 /////////////////////////////////////////////
// задача 3
/////////////////////////////////////////////     
for (let i=2; i<=10; i+=2){
    console.log(i);
      }

 /////////////////////////////////////////////
// задача 4
/////////////////////////////////////////////  
let i=2;

while (i<=16){
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}
 /////////////////////////////////////////////
// задача 5
///////////////////////////////////////////// 
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


 /////////////////////////////////////////////
// задача 6
///////////////////////////////////////////// 
function fourthTask() {
const ara=[];
for (let i = 5; i < 11; i++) {
ara[i-5]=i;
}
console.log(ara);
return ara;
}

 /////////////////////////////////////////////
// задача 7
///////////////////////////////////////////// 
const ara= [];
function fifthTask() {
    for (let i = 5; i < 11; i++) {
    ara[i-5]=i;
    
    }
      console.log(ara);
      return ara;
    }

    fifthTask() 

/////////////////////////////////////////////
// задача 8
/////////////////////////////////////////////

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

  for (let i=0; i<arr.length;i++){
    result[i]=arr[i]; 
  }
console.log(result);
console.log(arr);

    // Не трогаем
    return result;
};

firstTask();

/////////////////////////////////////////////
// задача 9
/////////////////////////////////////////////
function secondTask(){
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for(i=0;i<data.length;i++)
    typeof data[i] ==='number'?data[i]=data[i]*2:data[i]
    
    console.log(data);
    return data;
};

secondTask();

/////////////////////////////////////////////
// задача 10
/////////////////////////////////////////////
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    console.log(data.length);
    for(let i=0;i<data.length;i++){
    result[i]=data[(data.length-1)-i]
    
}
console.log(result);
    // Не трогаем
    return result;
}
thirdTask() 

/////////////////////////////////////////////
// задача 11
/////////////////////////////////////////////
const lines = 5;
let result1 = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j <lines  - i; j++) {
        result1 += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result1 += "*";
    }
    result1 += "\n";
}

console.log(result1)






let res='';
let q=5;
let q2=5;

for (let i=0; i<=5;i++){
    for (let k=0; k<12;k++){
        if(k<q||k>q2){
            res+=' ';
        }
        else{
            res+='*';
        }
       
    }
    q--;
    q2++;
    res+='\n';

}
console.log(res)
