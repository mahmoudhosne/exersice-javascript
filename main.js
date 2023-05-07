'use strict';

// session one  => first task ==================

let ahmedMass = 78;

let ahmedHeight = 169;

let mahmoudMas = 92;

let mahmoudHeight = 195;

// change height to meter

let ahmedHeightWithCm = ahmedHeight / 100;

let mahmoudHeightWithCm = mahmoudHeight / 100;

// calc bmi

let bmi = ahmedMass / ahmedHeightWithCm ** 2;

console.log(bmi);

bmi = mahmoudMas / mahmoudHeightWithCm ** 2;

console.log(bmi);

// ==================================================

// task num  1

let myVar = 5;
let myOtherVar = myVar * 2;
console.log(myOtherVar);

// ============================================

//    task num 2

const PI = 3.14;
let circleRadius = 5;
let circleCircumfrenece = PI * circleRadius;
console.log(circleCircumfrenece);

//==================================================

//  tasm num 3

let firstName = 'mahmoud';
let secondtName = 'hosni';
let lastName = 'hamdi';
const FULLNAME = firstName + ' ' + secondtName + ' ' + lastName;
console.log(FULLNAME);

//=================================================

//  task num 4

let myAge = 31;
let nextYearAge = (myAge += 1);
console.log(nextYearAge);

// ================================================

//  task num 5

let num = 5;
let num2 = 10;
let sum = num + num2;
let theDifference = num2 - 1;
let product = num * num2;
let devisionResult = num / num2;
let theRest = devisionResult;
console.log(theRest);

//===================================================

// task num 6

let initialValue = 5;
initialValue++;
let newValue = initialValue++;
newValue--;
let finalValue = newValue--;
console.log(finalValue);

//=========================================================

// task num 7

let string1 = 'mohamed';
let string2 = 'ashour';
let allStrings = string1 + ' ' + string2;
console.log(allStrings);
