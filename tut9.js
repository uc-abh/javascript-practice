console.log("This is tut 19 in will learn about javascript loops");

// for(let i=1; i<=10; i+=2)
// {
//     console.log(i);
// }

// let counting=1;
// while(counting<=10)
// {
//     console.log(counting);
//     counting++;
// }

// let i=0;
// do{
//     console.log(i)
//     i++;
// } while(i<=10);

let obj={
    name:"Abhishek",
    Stream:"Btech",
    "Part time work":"Teacher"

}
for(let key in obj){
    console.log(`The ${key} is ${obj[key]}`);
}