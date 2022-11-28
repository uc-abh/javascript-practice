let screen=document.getElementById("screen");
buttons=document.querySelectorAll("button");
let ScreenValue="";
for(item of buttons){
    item.addEventListener("click", (e)=>{
        buttonText=e.target.innerText;
        // console.log(buttonText);
     
        if( buttonText=="C"){
            ScreenValue="";
            screen.value=ScreenValue;
        }
        else if(buttonText=="=")
        {
            screen.value=eval(ScreenValue);
        }
        // else if(buttonText<="0")
        // {
        //     screen.value=0;
        // }
        else{
            ScreenValue +=buttonText;
            screen.value=ScreenValue;
        }
    })
}