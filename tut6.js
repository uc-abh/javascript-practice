console.log("We are at tut 6 in this we will study about string");

const name="harry";
const greeting ="Good Morning";
console.log(name+" "+greeting);

let html;
html="This is heading"+
"This is paragraph ";
html=html.concat("This is abhishek Pandey");
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html.indexOf("<"));
console.log(html.lastIndexOf("y"))
console.log(html.charAt(3));
console.log(html.endsWith("y"));
console.log(html.includes("abhi"));
console.log(html.substring(1,6));
console.log(html.slice(0,5));
console.log(html.split(" "));
console.log(html.replace("This", "am"));

let fruit1="orange";
let fruit2="apple";
let myHTML =`Hello ${name} please eat ${fruit1} and ${fruit2}`;
console.log(myHTML);
document.body.innerHTML=myHTML;