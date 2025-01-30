/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who_array = JSON.parse(localStorage.getItem("who")) || [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird"
];
let action_array = JSON.parse(localStorage.getItem("action")) || [
  "ate",
  "peed",
  "crushed",
  "broke"
];
let what_array = JSON.parse(localStorage.getItem("what")) || [
  "my homework",
  "my phone",
  "the car"
];
let when_array = JSON.parse(localStorage.getItem("when")) || [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const button = document.getElementById("generate-btn");
const excuseText = document.getElementById("excuse");

const sbm_btn = document.querySelector("#submit_btn");

function generarNumeroAleatorioEntero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
  //write your code here

  button.addEventListener("click", () => {
    let num_random = [];
    for (let index = 0; index < 3; index++) {
      num_random[index] = generarNumeroAleatorioEntero(0, 3);
    }

    let num_what = generarNumeroAleatorioEntero(0, 2);

    let excuse_text = [
      who_array[num_random[0]],
      action_array[num_random[1]],
      what_array[num_what],
      when_array[num_random[2]]
    ].join(" ");
    excuseText.innerText = excuse_text;

    //Checks that the localStorage is being added to the arrays
    // console.log(who_array);
  });

  sbm_btn.addEventListener("click", e => {
    e.preventDefault();
    const who = document.querySelector("#who").value;
    const action = document.querySelector("#action").value;
    const what = document.querySelector("#what").value;
    const when = document.querySelector("#when").value;

    if (who === "" || action === "" || what === "" || when === "") {
      alert("You must enter info to all of the entries");
    }

    who_array.push(who);
    action_array.push(action);
    what_array.push(what);
    when_array.push(when);

    excuseText.innerText = `${who} ${action} ${what} ${when}`;

    document.querySelector("#formulario").reset();

    localStorage.setItem("who", JSON.stringify(who_array));
    localStorage.setItem("action", JSON.stringify(action_array));
    localStorage.setItem("what", JSON.stringify(what_array));
    localStorage.setItem("when", JSON.stringify(when_array));
  });
};
