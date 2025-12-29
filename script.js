'use strict'

const inputElement = document.getElementById('disp');
let memory
function btnClick (input) {
  inputElement.value += input; 
  let example = inputElement.value;
    let lastChar = example[example.length - 1];
    let lastCharTwo = example[example.length - 2];
  
  if ((lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') & 
      (lastCharTwo == '+' || lastCharTwo == '-' || lastCharTwo == '*' || lastCharTwo == '/')) {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
    console.log(newExample);
  }

  
}

function clearDisp () {
   inputElement.value = ""; 
}

function calculate() {
    try {
        inputElement.value = eval (inputElement.value);
    } 
    catch (error) {
        inputElement.value = "Error";
    }
}
function deleteOne() {
    let example = inputElement.value;
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
}
function addInMemory() {
    let addMemory = inputElement.value;
    memory = addMemory.replace(/[^\w\s]|_/g, "");
    
}

function useMemory() {
    inputElement.value += memory
}