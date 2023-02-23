//Operator Map (array.map)
//Theory
/* let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
 */
//Example
/* const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32] */
// Use of map (convert each element in the array to a li element)
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();


//Operator Reduce (array.reduce) is use to compress all the values for the elements in a array and get 1 (the total)
//Example reduce
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const grades = ["A", "B", "A"];
const gpaPoints = grades.map(convertGradeToPoints);//gpaPoints = [4,3,4]
//Create the function of acumulator for all the elements inside the array
const pointsTotal = gpaPoints.reduce((total, item) => total + item);//pointsTotal = 11 (a = 4 * 2 + b = 3)
//Divide the acumulator for the large of the array (to have the average)
const averageGPA = pointsTotal / gpaPoints.length; // averageGPA = 11/3

//Operator filter
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWordsArray = words.filter(word => word.length > 6)
//watermelon → the only with length more than 6

//Operator indexOf
const numbers = [12, 34, 21, 54]
const luckNumber  = 21
numbers.indexOf(luckNumber) // Expected output: 2