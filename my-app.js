// let year = 2023;
// if (year === 2023) {
//     console.log("Present")
// }
// else if (year < 2023) {
//     console.log ("Past")
// }
// else if (year > 2023) {
//     console.log("Future")
// }






//  let age = 12;
//  if (age < 0) {
//      console.log ("Wrong age");
//  }
//  else if (age <= 18) {
//      console.log("You are not yet of legal age");
//  }
//  else if (age > 18) {
//      console.log("You have become an adult");
//  }
//
// let a = 5
// let b = 3
// if (a % b === 0) {
//     console.log("Divided", a / b);
// }
// else if (a % b !== 0){
//     console.log("Divide by the remainder", a % b);
//
// }
//
// let yearsWorked = 4;
// let baseSalary = 5000;
//
// let increasedSalary;
//
// if (yearsWorked >= 1 && yearsWorked <= 3)
// {
//     increasedSalary = baseSalary + (baseSalary * 0.1);
// }
// else if (yearsWorked >= 3)
// {
//     increasedSalary = baseSalary + (baseSalary * 0.2);
// }
//
// let finalSalary;
// if (increasedSalary < 4000)
// {
//     finalSalary = increasedSalary + 1000;
// }
// else {
//     finalSalary = increasedSalary + 500;
// }
//
// console.log("Salary:", finalSalary);

// let year = 2020;
// let message;
//
// message = year === 2023 ? "present" : "past"
// console.log(message);


//


const arr = ['One', 'Two', 'Three'];
let indexOfTwo = 0
arr.forEach((item, index, array) => {
    if (item === 'Two') indexOfTwo =index;

} );
console.log(indexOfTwo)