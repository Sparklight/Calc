'use strict'

const inputElement = document.getElementById('disp');
const displaytwo = document.getElementById('disptwo');
let memory
function btnClick (input) {
  inputElement.value += input; 
  let example = inputElement.value;
    let lastChar = example[example.length - 1];
    let lastCharTwo = example[example.length - 2];
    const symbols = /[+-/*]/;
    let symboltest = (symbols.test(example))
  
  if ((lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') & 
      (lastCharTwo == '+' || lastCharTwo == '-' || lastCharTwo == '*' || lastCharTwo == '/')) {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
    console.log(newExample);
  }

  if (inputElement.value == 'Error') {
    let newExample = example.slice(0, -1);
    inputElement.value = newExample;
  } 

  if (symboltest == true) {
    try {
      displaytwo.value = eval (inputElement.value);
    }
    catch (error) {
        displaytwo.value = "Error";
    }
    if (displaytwo.value == "Error") {
      displaytwo.value = '';
    }
  }
}

function clearDisp () {
   inputElement.value = ""; 
   displaytwo.value = '';
}

function calculate() {
    try {
        inputElement.value = eval (inputElement.value);
    } 
    catch (error) {
        inputElement.value = "Error";
    }
    if (inputElement.value == 'undefined') {
        inputElement.value = '';
    }
    else if (inputElement.value == 'function Error() { [native code] }' ||
             inputElement.value == 'NaN') {
        inputElement.value = 'Error';
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
