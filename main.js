import { igre } from "./game.js";
let count = 0;
const lineA = document.getElementById("A");
let a1 = document.getElementById("prvi");
console.log(lineA);
rijec = igre[0].grupaA[0];
function stisnuto() {
  count += 1;
}
if (count / 2 == 0) {
  a1.innerHTML = rijec;
}
