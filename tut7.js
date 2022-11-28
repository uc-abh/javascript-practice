console.log("This is tut 7 in which we will learn about array and objects in javascripts");

let marks=[34,55,66,53,23];
const fruits=["banana", "apple", "orange"];
const mixed=["str",89,[3,5]];
const arr=new Array(23,44,53,23,"orange"); 
console.log(marks);
console.log(fruits[1]);
console.log(mixed);
// console.log(arr.isArray("23"));

let arrelement=arr[0];
console.log("element ", arrelement )
console.log(arr);

let value=marks.indexOf(55);
console.log(value);

marks.push(344);
marks.unshift(100);
marks.pop();
marks.shift();
marks.splice(2,4);
marks.reverse();

console.log(marks);

let marks2=[1,2,3,4];
marks=marks.concat(marks2);
console.log(marks);


let myobj={
    "first name":"harry",
    channel:"code with harry",
    isActive:true,
    marks:[1,23,4]
}
console.log(myobj);
console.log(myobj["channel"])
console.log(myobj.channel)