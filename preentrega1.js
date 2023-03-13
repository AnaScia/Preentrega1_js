alert("Bienvenido a nuestro carrito de compras");
let usuario = "";
function primeraCompra() {
  usuario = prompt("Que productos quiere comprar?");
}
function lista() {
  if (usuario != "") {
    for (let i = 0; i < 10; i++) {
      usuario = usuario + prompt("Que productos quiere comprar?");
    }
    alert("Su lista de compras es " + usuario + " ");
  } else {
    alert("Ingrese datos validos");
  }
}
primeraCompra();
lista();
let compraDos = prompt("Quiere comprar algo mas?");
if (compraDos === "si") {
  primeraCompra();
  lista();
} else {
  alert("Fue un pacer hacer negocios con usted");
}
