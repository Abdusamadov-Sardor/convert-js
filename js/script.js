var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elBtn = document.querySelector(".btn");
var elSpan = document.querySelector(".span");
var elInput1 = document.querySelector(".input1");
var elList =  document.querySelector(".ol")


elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  
  
  var USD = 11400
  var elInputVal = elInput.value;
  
  if(elInputVal < 0){
    console.log("Iltimos 0 dan katta raqam kiriting");
    return;
   
  }
  elSpan.textContent = elInputVal * USD + " so'm";
  elInput.value = "";
 
  var newLi = document.createElement("li");
  var newP = document.createElement("span");
  var newPStart = document.createElement("span");
  
  
  newP.textContent =  elInputVal;
  newPStart.textContent = elSpan;
  newLi.append(newP,"$   => ", newPStart, " sum");
  elList = document.appendChild(newLi);
  
})





