/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuses = JSON.parse(localStorage.getItem("excuses")) || {
  default: {
    who: ["The dog", "My grandma", "The mailman", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "my phone", "the car"],
    when: [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ]
  },
  work: {
    who: ["My boss", "My coworker", "The manager", "The client"],
    action: ["forgot", "changed", "lost", "broke"],
    what: ["my report", "the contract", "the computer", "the documents"],
    when: ["this morning", "yesterday", "on Monday", "right before the meeting"]
  },
  school: {
    who: ["My teacher", "The principal", "My classmate", "The janitor"],
    action: ["took", "misplaced", "burned", "ruined"],
    what: ["my homework", "my project", "my notebook", "the exam"],
    when: ["last night", "this morning", "last Friday", "during recess"]
  },
  funny: {
    who: ["An alien", "My dog", "A ghost", "My grandma"],
    action: ["ate", "destroyed", "abducted", "hid"],
    what: ["my homework", "my clothes", "my car", "my lunch"],
    when: ["last night", "just now", "while I was sleeping", "before I left"]
  }
};
let excuse_text;

const button = document.getElementById("generate-btn");
const excuseText = document.getElementById("excuse");

const sbm_btn = document.querySelector("#submit_btn");

function generarNumeroAleatorioEntero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
  function generateTextFromArrays(array1, array2, array3, array4) {
    let num_random = [];

    for (let index = 0; index < 3; index++) {
      num_random[index] = generarNumeroAleatorioEntero(0, 3);
    }

    let num_what = generarNumeroAleatorioEntero(0, 2);

    excuse_text = [
      array1[num_random[0]],
      array2[num_random[1]],
      array3[num_what],
      array4[num_random[2]]
    ].join(" ");

    return excuse_text;
  }
  //write your code here
  //Generate Excuse-------------------------------------------------------------
  button.addEventListener("click", () => {
    const theme = document.querySelector("#themes").value;

    excuse_text = generateTextFromArrays(
      excuses[theme].who,
      excuses[theme].action,
      excuses[theme].what,
      excuses[theme].when
    );

    excuseText.innerText = excuse_text;

    //Checks that the localStorage is being added to the arrays
    // console.log(who_array);
  });

  //Add Excuse---------------------------------------------------------------
  sbm_btn.addEventListener("click", e => {
    e.preventDefault();
    const theme = document.querySelector("#themes").value;
    const who = document.querySelector("#who").value;
    const action = document.querySelector("#action").value;
    const what = document.querySelector("#what").value;
    const when = document.querySelector("#when").value;

    if (who === "" || action === "" || what === "" || when === "") {
      alert("You must enter info to all of the entries");
      return;
    }

    excuses[theme].who.push(who),
      excuses[theme].action.push(action),
      excuses[theme].what.push(what),
      excuses[theme].when.push(when);

    excuseText.innerText = `${who} ${action} ${what} ${when}`;

    console.log(excuses);

    document.querySelector("#formulario").reset();

    localStorage.setItem("excuses", JSON.stringify(excuses));
  });
};
