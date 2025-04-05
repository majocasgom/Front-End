let grade = 88;

switch (true){//booleano porque busca validar si es menor o mayor true or false
    case (grade>=90): //TIENE QUE IR ENTRE () PARA QUE SEA EVALUDAOD SI VA EN "" LO VE COMO TEXTO
        console.log("A");
        break;

    case (grade>= 80):
        console.log("B");
        break;

    case (grade>=70):
        console.log("C");
        break;

    case (grade>=60):
        console.log("D");
        break;

    default:
        console.log("F");

}
