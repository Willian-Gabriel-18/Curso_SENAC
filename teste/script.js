let title = document.getElementById("title");
let input = document.getElementById("input");

console.log("Hello World")

const car = new Object();

car.nome = "Carro do Will";
car.marca = "Marca do Will";

let car2 = car;
car2.nome = "Carro";

car2.car2 = function car2(nome, marca){
    this.nome = nome;
    this.marca = marca;
}

function Moto(marca, valor, status){
    this.marca = marca;
    this.valor = valor;
    this.status = status;
}

console.log(car2.nome);