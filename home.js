var isVal = false;
document.getElementById("ide").addEventListener("click",function onClick(){
    if(!isVal){
        document.getElementById("ide").style.backgroundColor="blue";
        //alert("hello world");
        document.getElementById("ide").innerHTML= "stop";
        isVal = true;
    }
    else{
        document.getElementById("ide").style.backgroundColor="crimson";
        //alert("hello world");
        document.getElementById("ide").innerHTML= "start";
        isVal = false;
    }
    
});

document.getElementById("btno1").addEventListener("click",function onClick(){
    if(isVal){
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    
        //alert("hello world");
        //isVal = true;
});
document.getElementById("btno2").addEventListener("click",function onClick(){
    if(isVal){
        var tom1 = new Audio("sounds/tom-2.mp3");
        tom1.play();
    }
    
        //alert("hello world");
        //isVal = true;
});
document.getElementById("btno3").addEventListener("click",function onClick(){
    if(isVal){
        var tom1 = new Audio("sounds/tom-3.mp3");
        tom1.play();
    }
    
        //alert("hello world");
        //isVal = true;
});
document.getElementById("btno4").addEventListener("click",function onClick(){
    if(isVal){
        var tom1 = new Audio("sounds/tom-4.mp3");
        tom1.play();
        //alert("h
    }
    //ello world");
        //isVal = true;
});
document.getElementById("btno5").addEventListener("click",function onClick(){
    
    if(isVal){
        var tom1 = new Audio("sounds/crash.mp3");
        tom1.play();
    }
        //alert("hello world");
        //isVal = true;
});
document.getElementById("btno6").addEventListener("click",function onClick(){
    if(isVal){
        var tom1 = new Audio("sounds/kick-bass.mp3");
        tom1.play();
    }
    
        //alert("hello world");
        //isVal = true;
});

document.addEventListener("keypress",function (event){
    if(event.key==="a" && isVal){
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    else if(event.key==="s" && isVal){
        var tom1 = new Audio("sounds/tom-2.mp3");
        tom1.play();
    }
    else if(event.key==="d" && isVal){
        var tom1 = new Audio("sounds/tom-3.mp3");
        tom1.play();
    }
    else if(event.key==="d" && isVal){
        var tom1 = new Audio("sounds/tom-4.mp3");
        tom1.play();
    }
    else if(event.key==="j" && isVal){
        var tom1 = new Audio("sounds/crash.mp3");
        tom1.play();
    }
    else if(event.key==="k" && isVal){
        var tom1 = new Audio("sounds/kick-bass.mp3");
        tom1.play();
    }
    
});
function backGround(selectedValue){
    if(selectedValue=="forest"){
        document.querySelector("body").style.backgroundColor = "lightgreen";
        document.querySelector("h1").style.color = "green";
        document.querySelector("h1").innerHTML= "Forest Theme";
    }
    else if(selectedValue =="day"){
        document.querySelector("body").style.backgroundColor = "yellow";
        document.querySelector("h1").style.color = "blue";
        document.querySelector("h1").innerHTML= "Day Theme";
    }
    else if(selectedValue =="beach"){
        document.querySelector("body").style.backgroundColor = "wheat";
        document.querySelector("h1").style.color = "brown";
        document.querySelector("h1").innerHTML= "Beach Theme";
    }
    else if(selectedValue=="dark"){
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
        document.querySelector("h1").innerHTML= "Night Theme";

    }
}