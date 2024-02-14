var radio = document.querySelector(".manualbtn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaimg();
}, 5500);

function proximaimg() {
  cont++;

  if (cont > 2) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}
