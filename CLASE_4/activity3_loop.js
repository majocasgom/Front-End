let rows = 5; //Number of rows for the triangle

for (let i = 1; i <=rows; i++){//determina la cantidad de estrellas que se colocan
    let stars = "";
    for(let j = 1; j<=i; j++){//coloca las estrellas
        stars += "*"; // Add one "*" to the string
    }
    console.log(stars);//Print the starts for the row
}