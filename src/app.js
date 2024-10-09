/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Kennedy from the console!");

  let age = 14;
  let alertHTMLCode =
    age < 16
      ? "<div>Warning! You cannot drive</div>"
      : "<div>You are good to go</div>";

  console.log(alertHTMLCode);
};
