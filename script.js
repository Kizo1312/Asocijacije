import { igre } from "./game.js";
console.log(igre);
console.log(igre[0].grupaA);
const letters = ["A", "B", "C", "D"];

const data = {
  A: igre[0].grupaA,
  B: igre[0].grupaB,
  C: igre[0].grupaC,
  D: igre[0].grupaD,
};

function reveal(letter, index) {
  const buttons = document.getElementsByClassName(`button${letter}`);
  buttons[index].innerHTML = data[letter][index];
}

letters.forEach((letter) => {
  document.querySelectorAll(`.button${letter}`).forEach((btn, index) => {
    btn.addEventListener("click", () => reveal(letter, index));
  });
});

function ZaCentar(event) {
  if (event.key == "Enter") {
    let tocan = document.getElementById("tocni");
    tocan.innerHTML = "nije";
  }
}
function zaMaloRijesenje(event, i) {
  if (event.key == "Enter") {
    console.log(i);
    let tocan = document.getElementsByClassName("maloRijesenje");
    tocan[i].innerHTML = "nije";
  }
}
