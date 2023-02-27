/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array

    //Create the class User
class User {
  constructor(name, photo, favoriteFoods, hobbies, placesLived) {
    (this.name = name), //String
      (this.photo = photo), //String
      (this.favoriteFoods = favoriteFoods), //Array
      (this.hobbies = hobbies); //Array
    this.placesLived = placesLived; //Array
  }
}

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

    //Create the class Place
class PlacesLived {
  constructor(place, time) {
    (this.place = place), (this.time = time);
  }
}

    // Define each place lived as a separate object
const place1 = new PlacesLived("La Plata, BA, Arg.", "1994-2018");
const place2 = new PlacesLived("Mendoza, Arg.", "2018-2020");
const place3 = new PlacesLived("San Juan, Arg.", "2018-2020");
const place4 = new PlacesLived("La Plata, BA, Arg.", "2020-now");

    //Define the user
const user1 = new User(
  /* name */ "Ezequiel Matias Tartaglia",
  /* photo */ "./images/profile.jpg",
  /* favoriteFoods */ ["Huancaína Sauce", "Lasagna"],
  /* hobbies */ [
    "Programming",
    "Learn",
    "Play video games",
    "Play instruments",
    "Do xtreme sports",
  ],
  /* placesLived */ [place1, place2, place3, place4]
);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const nameHTML = document.getElementById("name");
nameHTML.innerHTML = `<strong>${user1.name}</strong>`;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const photoHTML = document.getElementById("photo");
photoHTML.setAttribute("src", user1.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photoHTML.setAttribute("alt", user1.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const favoriteFoodsHTML = document.getElementById("favorite-foods");
let foodId_variable = 1; //To assign 1 unic ID
user1.favoriteFoods.forEach((food) => {
  const li = document.createElement("li");
  li.setAttribute("id", `food${foodId_variable}`);
  foodId_variable = foodId_variable + 1; //Change the id for each new food
  li.innerHTML = `<strong> 🍽️ ${food}</strong>`;
  favoriteFoodsHTML.append(li);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbiesHTML = document.getElementById("hobbies");
let hobbieId_variable = 1; //To assign 1 unic ID
user1.hobbies.forEach((hobbie) => {
  const li = document.createElement("li");
  li.setAttribute("id", `hobbie${hobbieId_variable}`);
  hobbieId_variable = hobbieId_variable + 1; //Change the id for each new food
  li.innerHTML = `<strong> 🕒 ${hobbie}</strong>`;
  hobbiesHTML.append(li);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placesLivedHTML = document.getElementById("places-lived");
let placeId_variable = 1; //To assign 1 unic ID
user1.placesLived.forEach((place) => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.setAttribute("id", `placeLived${placeId_variable}`);
    dd.setAttribute("id", `length${placeId_variable}`);
  placeId_variable = placeId_variable + 1; //Change the id for each new food
  dt.innerHTML = `<strong> 🌍 ${place.place}</strong>`;
  dd.innerHTML = `<strong> 🗓️ ${place.time}</strong>`;
  placesLivedHTML.append(dt);
  placesLivedHTML.append(dd);
});