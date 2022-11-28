console.log("This is tut 8 in which you will learn about if else and switches in javascript");


let age = "19";
age = 46;
height=5;

if (age == 19) {
    console.log("You are 19 years old");
}
else if (age == 65) {
    console.log("Age is 65")
}
else {
    console.log("You are not 19 years old");
}

console.log(age == 45 ? "Age is 45" : "Age is not 45");


switch (height) {
    case 5:
        console.log("Your height is 5 feet");
        break;

    case 6:
        console.log("Your height is 6 feet");
        break;
    default:
        console.log("You are overweight");
        break;
}