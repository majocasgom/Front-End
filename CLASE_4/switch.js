let day = "Friday"; //switch es para multiples opciones y un valor especifico 

switch (day) {
    case "Monday":
        console.log("Start of the week"); //Primer case, si el usuario coloca monday le saldra ese mensaje
        break; //Para romper el bug

    case "Friday":
        console.log("End of the week");
        break;

    default:
        comnsole.log("Midweek");
}