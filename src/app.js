/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const button = document.getElementById("generate-btn");
const excuseText = document.getElementById("excuse");

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
      who[num_random[0]],
      action[num_random[1]],
      what[num_what],
      when[num_random[2]]
    ].join(" ");
    excuseText.innerText = excuse_text;
  });
  console.log("Excuse generator loaded successfully!");
};
