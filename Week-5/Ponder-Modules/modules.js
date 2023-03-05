// modules.js
//Import all in the file Course.js
import aCourse from "./Course.js";

//Function to initiate -render- from course.js (method)
aCourse.init();

//Click on Enroll Student button
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
});

//Click on Drop Student button
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});