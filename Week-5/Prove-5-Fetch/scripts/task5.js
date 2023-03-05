/* Lesson 5 */

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
let newDay = new Date();
let day = newDay.getDay();

let dayMessage = document.getElementById("message1");

let message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

if (day > 0 && day < 6) {
    //Weekdays
    message = "Hang in there!";
    dayMessage.innerHTML = message;
} else {
    //Weekends
    message = "Woohoo! Is is the weekend!";
    dayMessage.innerHTML = message;
}

/* SWITCH, CASE, BREAK */
// Step 1: Declare a new variable to hold another message
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
/* OUTPUT */
// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

let message2;
switch (day) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wednesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case 6:
        message2 = "Saturday";
}

let dayOutput2 = document.getElementById("message2");
dayOutput2.innerHTML = message2;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let templesList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

//Create the cards
const output = (templesList) => {

  templesList.forEach((temple) => {
    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.innerText = temple.templeName;

    const h4Location = document.createElement("h4");
    h4Location.innerText = temple.location;

    const h4Dedicated = document.createElement("h4");
    h4Dedicated.innerText = temple.dedicated;

    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);

    article.appendChild(h3);
    article.appendChild(h4Location);
    article.appendChild(h4Dedicated);
    article.appendChild(img);

    document.getElementById("temples").appendChild(article);    
  });
};

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

//Get the Api 
let getTemples = async () => {
    let response = await fetch(
        "https://byui-cse.github.io/cse121b-course/week05/temples.json"
    );
    data = await response.json();
    output(data);
};

//Summon it (show)
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset() {
  //Clean the array
  document.getElementById("temples").innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

//Sort between temples
let sortBy = () => {
  reset();

  let templeFilter = document.getElementById("sortBy").value;

  switch (templeFilter) {
      case "templeNameAscending":
          output(
              data.sort((t1, t2) => {
                  let temple1 = t1.templeName;
                  let temple2 = t2.templeName;
                  if (temple1 < temple2) return -1;
                  else if (temple1 > temple2) return 1;
                  else return 0;
              })
          );
          break;
      case "templeNameDescending":
          output(
              data.sort((t1, t2) => {
                  let temple1 = t1.templeName;
                  let temple2 = t2.templeName;
                  if (temple1 > temple2) return -1;
                  else if (temple1 < temple2) return 1;
                  else return 0;
              })
          );
          break;

  }
};

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);
  

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
