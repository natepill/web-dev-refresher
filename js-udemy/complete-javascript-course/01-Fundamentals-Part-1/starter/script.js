// let js = 'amazing';
// if (js === 'amazing') alert ('JS is fun');

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
//
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
//
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
//
// GOOD LUCK 😀

let MarkMass = 78
let JohnMass = 95
let MarkHeight = 1.69
let JohnHeight = 1.88
let MarkBMI = MarkMass / (MarkHeight * MarkHeight)
let JohnBMI = JohnMass / (JohnHeight * JohnHeight)

// markHigherBMI = MarkBMI > JohnMass
// console.log(markHigherBMI);

// 17: String and Template Literals

let firstName = "Jonah"
let jonahAge = 10
const adultAge = 18
// string literals
// backticks located above tab key
const greetingNew = `I'm ${firstName}, It will be ${adultAge - jonahAge} years until I'm an adult.`
console.log(greetingNew);

// multi line String
// console.log(`this
// will
// be printed
// on multiple lines`);

// const age = 12;
// const isOldEnough = age >= 18;
//
// if (isOldEnough){
//     console.log("You can drive!");
// } else{
//     console.log(`Not old enough, you need to wait ${18 - age} years`);
// }



////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote,
and improve it:

1. Print a nice output to the console, saying who has the higher BMI.
The message can be either "Mark's BMI is higher than John's!" or "John's BMI is
higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/

// if (MarkBMI > JohnBMI) {
//     console.log(`Mark's BMI: ${MarkBMI} is ${MarkBMI - JohnBMI} points higher than John's BMI: ${JohnBMI}`);
// } else {
//     console.log(`John's BMI: ${JohnBMI} is ${JohnBMI - MarkBMI} points higher than John's BMI: ${MarkBMI}`);
// }

// // Type conversion and corersion
// // Type conversion
// const year = "1999"
// console.log(`Year: ${Number(year)}`);
// console.log(`year is type: ${typeof year}`);
//
// // Type coercion
// console.log("I am " + 22 + " years old");
// // same as:
// console.log("I am " + "22" + " years old");
// // JS has inbuilt type coericion
// console.log("23"-"12" -3);
// // Minus sign triggers type coersion
// console.log("23" + "12" - 3);


// // Truthy and Falsy values
// // Faslsey values are not exactly false, but will become False when converted into a Boolean
// // NOTE: ie: 0, '', undefined, null, NaN
// // Truthy values are all other values evaluated to True when called as Boolean
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
//
// console.log(Boolean("Hello"));
// console.log(Boolean(23));
//
// let money = 0
// if (money) {
//     console.log(`You have ${money} left`);
// }else{
//     console.log("No money left! Get a job");
// }

// === vs ==
// === is the strict equality operator in JS because there is no type coerision
// == is the loose equality operator because it does do type Coercion
const age = 18
if (age === 18){
    console.log("u adult");
}
if (age == 18) console.log("NOT 18");

// Better to use strict equality operator to avoid issues with type coercion

// logical operators in JS: &&, ||


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of
the competition, and print it to the console.
Don't forget that there can be a draw, so test for that as well
(draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
 With this rule, a team only wins if it has a higher score than the other team,
 and the same time a score of at least 100 points. HINT: Use a logical operator
 to test for minimum score, as well as multiple else-if blocks

4. BONUS 2: Minimum score also applies to a draw!
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// let catsAvgScore = (96+108+109)/3
// let dogsAvgScore = (88+91+110)/3
// const minPoints = 100
// let winner;
// console.log((catsAvgScore > dogsAvgScore) && (catsAvgScore >= minPoints));
// if ((catsAvgScore > dogsAvgScore) && (catsAvgScore >= minPoints)){
//     console.log("Cats win");
//     winner = "Team Cat"
// }if ((catsAvgScore < dogsAvgScore) && (dogsAvgScore >= minPoints)){
//     console.log("Dogs Win");
//     winner = "Team Dog"
// }if ((catsAvgScore === dogsAvgScore) && (dogsAvgScore >= minPoints) && (catsAvgScore >= minPoints)){
//     winner = "DRAW!"
//
//
// console.log(`dogsAvgScore: ${dogsAvgScore}`);
// console.log(`catsAvgScore: ${catsAvgScore}`);
// console.log(`Winner of competition: ${winner}`);

// Switch statements
// const day = "monday";
// switch (day){
//
//     case "monday":
//         console.log("Monday, plan course structure");
//         break;
//     case "tuesday":
//         console.log("Tuesday");
//         break;
//     case "wednesday":
//         console.log("Wed");
//         break;
//     default:
//         console.log("Not a day");
// }

// Ternary operator:
// const myAge = 12
// myAge >= 18 ? console.log("I can drink"): console.log("Not old enough");
//
// let canDrink
// canDrink = myAge >= 18 ? true : false;
// console.log(canDrink);
//


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for
 whenever he goes eating in a resturant. In his country,
 it's usual to tip 15% if the bill value is between 50 and 300.
 If the value is different, the tip is 20%.

1. Your task is to caluclate the tip,
depending on the bill value. Create a variable called 'tip'
for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value,
the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/
let tip;
let bill;
bill = 100
tip = bill >= 50 && bill <= 300 ? bill*.15 : bill*.20

console.log(`Bill total: ${bill + tip}`);
