/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
//Step 4: Assign the return value to an HTML form element with an ID of sum
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function add(number1, number2) {
  //Funtion
  return number1 + number2;
}
function addNumbers() {
  //Get information from the HTML and sum
  const numberToSumA = parseInt(document.getElementById("addend1").value);
  const numberToSumB = parseInt(document.getElementById("addend2").value);
  const sumHTML = add(numberToSumA, numberToSumB);
  document.getElementById("sum").value = sumHTML;
}
const addNumbersBtn = document.getElementById("addNumbers");
addNumbersBtn.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
  //Function
  return number1 - number2;
}
function restNumbers() {
  //Get information from the HTML and rest
  const numberToSubstractA = parseInt(document.getElementById("minuend").value);
  const numberToSubstractB = parseInt(
    document.getElementById("subtrahend").value
  );
  const substractionHTML = subtract(numberToSubstractA, numberToSubstractB);
  document.getElementById("difference").value = substractionHTML;
}
const restNumbersBtn = document.getElementById("subtractNumbers");
restNumbersBtn.addEventListener("click", restNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2) {
  //Function
  return number1 * number2;
}
function multiplyNumbers() {
  //Get information from the HTML and multiply
  const numberToMultiplyA = parseInt(document.getElementById("factor1").value);
  const numberToMultiplyB = parseInt(document.getElementById("factor2").value);
  const multiplyHTML = multiply(numberToMultiplyA, numberToMultiplyB);
  document.getElementById("product").value = multiplyHTML;
}
const multiplyNumbersBtn = document.getElementById("multiplyNumbers");
multiplyNumbersBtn.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
  //Function
  return number1 / number2;
}
function divideNumbers() {
  //Get information from the HTML and divide
  const numberToDivideA = parseInt(document.getElementById("dividend").value);
  const numberToDivideB = parseInt(document.getElementById("divisor").value);
  const divideHTML = divide(numberToDivideA, numberToDivideB);
  document.getElementById("quotient").value = divideHTML;
}
const divideNumbersBtn = document.getElementById("divideNumbers");
divideNumbersBtn.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
// Step 4: Assign the current year variable to an HTML form element with an ID of year
const currentYear = document.getElementById("year");
let currentYearData = new Date().getFullYear();
currentYear.innerHTML = currentYearData;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
numbers = [];
counter = 1;
for (let index = 1; index < 26; index++) {
  numbers.push(counter);
  counter = counter + 1;
  console.log(numbers);
}
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const array = document.getElementById("array");
array.innerHTML = `<strong>${numbers}</strong>`;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const arrayFilterOdd = document.getElementById("odds");
const arrayWithOddNumbers = numbers.filter((number) => number % 2 == 1);
arrayFilterOdd.innerHTML = `<strong>${arrayWithOddNumbers}</strong>`;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const arrayFiltereven = document.getElementById("evens");
const arrayWithevvenNumbers = numbers.filter((number) => number % 2 == 0);
arrayFiltereven.innerHTML = `<strong>${arrayWithevvenNumbers}</strong>`;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const arrayReduce = document.getElementById("sumOfArray");
const arrayWithReduce = numbers.reduce((total, item) => total + item);
arrayReduce.innerHTML = `<strong>${arrayWithReduce}</strong>`;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const arrayMap = document.getElementById("multiplied");
const arrayWithMultipliedMap = numbers.map((number) => number * 2);
arrayMap.innerHTML = `<strong>${arrayWithMultipliedMap}</strong>`;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const arrayMapReduce = document.getElementById("sumOfMultiplied");
const arrayWithMapReduce = arrayWithMultipliedMap.reduce(
  (total, item) => total + item
);
arrayMapReduce.innerHTML = `<strong>${arrayWithMapReduce}</strong>`;
