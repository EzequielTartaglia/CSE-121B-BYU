//Variables
//Complete the following steps
//In the task2.js file:

//Declare and instantiate a variable to hold your name
//Place the value of the name variable into the task2.html file inside of the element with an "id of "name" (hint: document.querySelector())
const nameSpan = document.getElementById('name')

nameSpan.innerHTML = `<strong>Ezequiel M. Tartaglia</strong>` 

//Declare and instantiate a variable to hold the current year
//Place the value of the current year variable into the task2.html file inside of the element with an id of "year"
const currentYear = document.getElementById('year')
let currentYearData = new Date().getFullYear()

currentYear.innerText = `${currentYearData}`

//Copy an image of yourself into the images folder
//Declare and instantiate a variable to hold the name and location of your picture (hint: images/imagename.png)
//Place the value of the picture variable into the task2.html file in the "src" attribute of the img element (hint: document.querySelector().setAttribute())
const profileImgPath = "./images/profile.jpg"
const profileImgAlt = `${nameSpan} Profile picture`

const tagProfileImg = document.getElementById('profileImage')
const profileImg = document.createElement('img')
profileImg.setAttribute('src',profileImgPath)
profileImg.setAttribute('alt',profileImgAlt)
profileImg.setAttribute('style', 'width:200px;')
tagProfileImg.appendChild(profileImg); //Add the img to the div profileImage


//Arrays
//Complete the following steps
//In the task2.js file:

//Declare an array variable to hold your favorite foods ( hint: [] ) and fill it with your favorite foods as strings.
//Use JavaScript to modify the element who's id is "food" found in the task2.html file.
const foodsSpan = document.getElementById('food')

let favoriteFoods = []
const food1 = "Lasagna"
const food2 = "Milanesa"
const food3 = "Broster chicken"
const food4 = "Roasted"
favoriteFoods.push(food1)
favoriteFoods.push(food2)
favoriteFoods.push(food3)
favoriteFoods.push(food4)

//Function to create li from the array's elements
function InnerArrayToHTML(array,elementInHTML){
array.forEach(food => {
    const li = document.createElement('li')
    li.innerHTML = `<strong>${food}</strong>`
    elementInHTML.appendChild(li)
}); 
}

//Declare and instantiate a variable to hold another of your favorite foods.
//Add the value stored in this variable to the favorite food array.
//Repeat Step 2
const food5 = "Pasta"
favoriteFoods.push(food5)
const liPasta = document.createElement('li')
liPasta.innerHTML = `${food5}`
foodsSpan.appendChild(liPasta)

//Remove the first element in the favorite foods array
favoriteFoods.shift()
//Repeat Step 2

while (foodsSpan.firstChild) {
    foodsSpan.removeChild(foodsSpan.firstChild);
  }
InnerArrayToHTML(favoriteFoods,foodsSpan)

//Remove the last element in the favorite foods array
favoriteFoods.pop()

//Repeat Step 2 */
while (foodsSpan.lastChild) {
    foodsSpan.removeChild(foodsSpan.lastChild);
  }
InnerArrayToHTML(favoriteFoods,foodsSpan)
  