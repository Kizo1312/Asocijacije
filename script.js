function onClick(s) {
  let sunce = document.getElementsByClassName("button");
  sunce[s].innerHTML = "Sunce";
}
function ZaCentar(event) {
  if (event.key == "Enter") {
    let tocan = document.getElementById("KURAC");
    tocan.innerHTML = "nije";
  }
}
function zaMaloRijesenje(event, i) {
  if (event.key == "Enter") {
    console.log[i];
    let tocan = document.getElementsByClassName("maloRijesenje");
    tocan[i].innerHTML = "nije";
  }
}
