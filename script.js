/* Declare variables below to save the different sections (divs) of your story*/
let optionOneButton = document.querySelector (".option-one");

let optionTwoButton = document.querySelector (".option-two");

let optionTwoScreen = document.querySelector (".option-two-screen"); 

let optionOneScreen = document.querySelector (".option-one-screen");

let burgerImage = document.querySelector(".burgerImage");

let optionOneEnd = document.querySelector(".option-one-end");

let GordonImage = document.querySelector(".GordonImage");

let optionTwoEnd = document.querySelector(".option-two-end");

let paragrapgh= document.querySelector ("p");


optionOneButton.onclick=function(){
    optionOneScreen.style.display="block"; 

};

optionTwoButton.onclick=function(){
    optionTwoScreen.style.display="block";

};


burgerImage.onclick=function(){
    optionOneEnd.style.display="block"; 

};

GordonImage.onclick=function(){
    optionTwoEnd.style.display="block";

};

paragrapgh.onmouseover=function(){
    paragrapgh.innerHTML="Horray!!";
};


