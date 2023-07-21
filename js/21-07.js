// 1
// const person = {
//     name: "Nelli",
//     surname: "Laroy",
//     age: 25,
// };


// function personInfo(obj) {
//     const {name: namePerson, surname, ago} = obj;
//     return `Мене звати ${namePerson} ${surname} і мені ${ago} років`
// };

// console.log(personInfo(person));

// 2

const student = {
    name: "Bruce",
    surname: "Lee",
    grades: [4, 5, 3],
};

function calculateAverageGrade(obj) {
    const {grades: [grades4, grades5, grades3]} = obj;
    const mathSum = grades3 + grades4 + grades5;
    return mathSum / 2;
}



console.log(calculateAverageGrade(student));