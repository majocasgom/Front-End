//loop dentro de otro loop. ej, horas, min, seg

for (let i = 0; i<3; i++){ // Outer loop runs 3 times
    for (let j = 0; j<10; j++){ // El segundo bucle se ejecuta 10 veces por cada vuelta del primer bucle
        console.log("Outer: " + i + ", Inner: " + j);
    }

} //el segundo for se ejecuta completamente cada vez que el primer for da una vuelta.
