// const fruits=['Apple','Banana'];
// const[fruitOne,fruitTwo]=fruits;
// console.log(fruitOne);
////////////////////////////////////////////////
// task 1
///////////////////////////////////////////////
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };



function showExperience(plan) {
const {exp}=plan.skills;
return exp;

}

// console.log(showExperience(personalPlanPeter));
// ////////////////////////////////////////////////
// task 2
///////////////////////////////////////////////

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }, showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

Object.assign(personalPlanPeter.skills.programmingLangs,{CH:"40%"});
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str='';
    const {programmingLangs}=plan.skills;
    for (let key in programmingLangs){
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
    
    
}



console.log(showProgrammingLangs(personalPlanPeter));
// console.log(Object.values(personalPlanPeter));