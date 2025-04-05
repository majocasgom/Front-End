function greet (name){
    console.log("Hello, " + name + "!");
}

greet ("Majo");

function add (a, b){
    return a + b;
}

let sum = add(5, 10);
console.log(sum);

//AREA O
function calculateAreaRadius(radio){ //nombre de la funcion y radio es la variable
    return 3.14 * radio**2; // 3.14 es constante y el radio se coloca a la 2
}
let areaCirculo = calculateAreaRadius(2); //la variable areaCirculo es igual a la funcion calculateAreaRadius y colocamos que radio tiene
console.log(areaCirculo); //imprime el resultado