// document.write('Digital Clock');
console.log('Digital Clock');

function showTime(){

let date = new Date();
let HoursTime = date.getHours();
let MinutesTime = date.getMinutes();
let SecondsTime = date.getSeconds();
let session = "AM";

if(HoursTime == 0){
HoursTime = 12;
}
if(HoursTime>12){
    HoursTime = HoursTime - 12;
    session = "PM";
}

let newTime = HoursTime + ":" + MinutesTime + ":" + SecondsTime + " " + session ;
 document.querySelector('.Clock').innerHTML = newTime;
 setTimeout(showTime,1000);
}
showTime();

var c=0;
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    // console.log(btn)
    // console.log("clicked");
    // let myClock = document.querySelector('.Clock');
    // e.preventDefault();
// myClock=document.myClock.style.backgroundColor="red";
// let innerHTML="
// btn.toggleAttribute("disabled");
if(c==0){


    document.querySelector(".Clock").style.backgroundColor="black";
    document.querySelector(".Clock").style.height="500px";
    document.querySelector(".Clock").style.width="300px";
    document.querySelector(".Clock").style.marginTop="220px";
    c=1;
}
else if(c==1){
    document.querySelector(".Clock").style.backgroundColor="transparent";
    document.querySelector(".Clock").style.fontSize="2.6rem";
    document.querySelector(".Clock").style.marginLeft="25px";
    document.querySelector(".Clock").style.padding="15px 0px";
    // document.querySelector(".Clock").style.position="absolute";
    document.querySelectorAll(".container").style.
    // document.querySelector(".Clock").style.top="50px";
    document.querySelector(".Clock").style.height="50px";
    document.querySelector(".Clock").style.backgroundColor="rgb(161, 218, 161)";
    document.querySelector(".Clock").style.width="280px";
    document.querySelector(".Clock").style.fontFamily="Verdana, Geneva, Tahoma, sans-serif";
    // document.querySelector(".Clock").style.fontWeight="";
    document.querySelector(".Clock").style.marginTop="0px";
    // document.querySelector(".Clock").style.height="50px";

    
    

    c=0;
}


let text= btn.vslue;
console.log(text);




    

// document.querySelector(".phone").innerHTML=innerHTML;
    //  myClock = console.log(myClock);
    // let abhishek = 'abhipole' 
    // let myHTML =` <h1> Hello ${abhishek}</h1>`
    // document.body.innerHTML = myHTML;
    
});