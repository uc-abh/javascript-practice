console.log("This is tut 10 in which we will learn about functions in javascript");

function greet(name, mom="how is your moyher") {
    console.log(`Hello ${name} how are you? ${mom}`);
}

let name="rohan";
greet(name, "Thanks");

let name2="pitai";
greet(name2);

arr=["Apple", "Orange", "Guava"];
arr.forEach(function(element, index){
    console.log(element, index);
})