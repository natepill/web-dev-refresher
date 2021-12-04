"use strict";

// Using strcit mode sample
let hasDriverCard = false;
const passTest = true;

// Spelling error on purpose to show strict mode
// With strict mode on we can easily identify bugs ie: spelling, or reserved words
// like "interface" or "private" or "if" for variables
// if (passTest){hasDriversCard = true;}

// const interface = "audio"
// const private = "private"
// if (hasDriverCard) {console.log("Can drive");}

function fruitProcessor(apples, organges){
    console.log(apples, organges);
    const juice = `Juice w/ ${apples} apples and ${organges} organges`
    return juice
}
const appleJuice = fruitProcessor(5,0)
console.log(appleJuice);

// NOTE: Function declaration vs Function expression

// Function declaration
function addNums1(num1, num2){
    return num1 + num2
}

// function expression

const addNums2 = function(num1, num2){return num1+num2}


// NOTE: Arrow functions:
// NOTE: Arrows don't have access to "this" keyword
let newNum = addTenToNum => 10 + addTenToNum
console.log(newNum(10));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age
    console.log(`Hello ${firstName}! You retire: in ${retirement} years`);
    return retirement
}

yearsUntilRetirement(1999, "Nathan")



///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores
is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team.
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each
team as parameters ('avgDolhins' and 'avgKoalas'),
and then logs the winner to the console, together with the victory points,
according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3

let catsAvgScore = calcAverage(44,23,71)
let dogsAvgScore = calcAverage(200, 200, 200)

function checkWinner(catsAvgScore, dogsAvgScore){
    if (catsAvgScore > dogsAvgScore*2){
        // Cats win
        return `Cats win (${catsAvgScore} vs. ${dogsAvgScore})`
    }
    if (dogsAvgScore > catsAvgScore*2){
        // dogs win
        return `Dogs win (${dogsAvgScore} vs. ${catsAvgScore})`
    }
    else{
        return "No Winner!"
    }
}
console.log(checkWinner(catsAvgScore, dogsAvgScore));


// NOTE: Working w/ Arrays

const friends = ["Joe", "Mike", "Abe"]
console.log(friends, friends.length);
// push returns the length of the new array
// push adds to end of array
let newLength = friends.push('Jay');
console.log(newLength);

// unshift adds elements to the begining of the array
friends.unshift("Nate")
console.log(friends);

// Remove elements
// pop removes element at end of array
// also returns last element
let popped = friends.pop();
console.log(friends);
console.log(popped);

// Take first element out
let shifted = friends.shift()
console.log(friends);
console.log(shifted);

// find index of element
console.log("Mike can be found at index: ", friends.indexOf("Mike"));
// returns -1 if element can't be found
console.log(friends.indexOf("Nate"));

// Boolean check for elements in array
console.log(friends.includes("Mike"));
console.log(friends.includes("Nate"));


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator,
using the same rules as before: Tip 15% of the bill if the bill value is
between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value
as an input and returns the corresponding tip, calculated based on the rules
above (you can check out the code from first tip calculator challenge if you need to)
Use the function type you like the most.
Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills'
containing the test data below.
3. Create an array 'tips' containing the tip value for each bill,
calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = (billValue) => {
    if (billValue >= 50 && billValue <= 300){
        return billValue*.15
    }
    else {
        return billValue*.20
    }
}
let bills = [125, 555, 44]
let tips = [calcTip(125), calcTip(555), calcTip(44)]

console.log(tips)


// NOTE: Object and Methods


const Nate = {

    fName: "Nathan",
    lName: "Pillai",
    birthYear: 1999,
    interests: ["writing", "reading", "dancing", "piano"],

    // calcAge: function (birthYear){
    //     return 2037 - birthYear
    // }
    calcAge: function(){
        return 2037 - this.birthYear
    },

    getSummary: function(){
        return console.log(`${this.fName} ${this.lName} was born ${this.birthYear}`);
    }
}

console.log(Nate.getSummary());


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height)
(mass in kg and height in meter)

1. For each of them, create an object with properties for their
full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const Mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        return this.mass / this.height ** 2
    }
}
const John = {
    firstName: "John",
    lastName: "Smith",
    mass: 1222,
    height: 1.95,
    calcBMI: function(){
        return this.mass / this.height ** 2
    }
}

const higherBMI = John.calcBMI > Mark.calcBMI ? console.log(`John has higher BMI: ${John.calcBMI()}`) : console.log(`Mark has higher BMI: ${Mark.calcBMI()}`);
console.log(higherBMI);

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// NOTE: For Loop

// for (let rep = 1; rep <= 10; rep ++){
//     console.log(rep);
// }

const interests = ["writing", 5, 8, "reading", "dancing", "piano"]
let interestsTypes = []
for (let i = 0; i < interests.length; i++){
    console.log(`${interests[i]} is type ${typeof interests[i]}`);
    interestsTypes.push(typeof interests[i])
}

console.log(interestsTypes);


// NOTE: looping backwards
//
// for (let i = interests.length; i >= 0; i--){
//
// }

// console.log("Starting while loop");
// // While looping
// let i = 0
// while (i <= 10){
//     console.log(i);
//     i += 1
// }


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
tips = []
let totals = []

for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals.push(calcTip(bills[i]) + bills[i])
    console.log(`Tip: ${tips[i]} Total: ${totals[i]}`);
}
