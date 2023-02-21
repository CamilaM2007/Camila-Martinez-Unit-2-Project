/* Declare variables below to save the different sections (divs) of your story*/

let optionTheBoxBotton=       
document.querySelector(".option-one");

let optionOneDiv=           
document.querySelector(".option-one-screen");
console.log(optionOneDiv); 

let openTheBoxScreen= 
document.querySelector(".option-one-screen");

let openTheBoxBottonTwo= 
document.querySelector(".option-two"); 

let openTheBoxScreenTwo= 
document.querySelector(".option-two-screen");

let openTheBoxBottonThree= 
document.querySelector(".option-three"); 

let openTheBoxScreenThree= 
document.querySelector(".option-three-screen");

  optionTheBoxBotton.onclick=function(){
  openTheBoxScreen.style.display="block";
};

  openTheBoxBottonTwo.onclick=function(){
  openTheBoxScreenTwo.style.display="block";
};

  openTheBoxBottonThree.onclick=function(){
  openTheBoxScreenThree.style.display="block";
};
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/

