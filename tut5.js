console.log("Javascript type conversion and coercion");

console.log("Welcome to tut5");
let myvar;
myvar=String(34);
console.log(myvar, (typeof myvar));
let booleanvar=String(true);
console.log(booleanvar, (typeof booleanvar));

let date=String(new Date());
console.log(date, (typeof date));

let arr=String([23,34,56,75]);
console.log(arr.length ,(typeof arr));

let i=75;
console.log(i.toString());

let stri=Number("343");
stri=Number("3444d4");
stri=Number(false);
stri=Number([3,24,332,34]);

console.log(stri, (typeof stri));

let number=parseFloat("343");
console.log(number);
console.log(number.toFixed(2),(typeof number));

// TYPE COERCION 
let mystr=Number("353");
let  mynum=34;
console.log(mystr+mynum);
