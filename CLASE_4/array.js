//una variable con multiples valores(listas)
//Using a for loop
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange"); //push = add
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//While loop
let fruit = ["apple", "banana", "cherry"];

let i = 0;
while(i < fruit.length){
    console.log(fruit[i]);
    i++;
}