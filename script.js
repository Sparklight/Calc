'use strict'

const inputElement = document.getElementById('disp');

function btnClick (input) {
  inputElement.value += input;  
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

