let display = document.querySelector(".display-text");
let buttons = document.querySelectorAll(".buttons");
let divisionSymbol = document.querySelector("#divisionSymbol");
let operatorButtons = document.querySelectorAll(".operator-button");
let equals = document.querySelector(".equals");
let clearButton = document.querySelector("#clear");
let backButton = document.querySelector("#back");
let isResult = false;

// array to hold all of our numbers
let numberArray = [];
//  hold our operator string
let operatorVar;

function numTest(a,b){
    if(typeof(a) != "number" || typeof(b) != "number"){
        throw new TypeError();
    }
}

function addition(a,b){
    numTest(a,b);
    let sum = a + b;
    return sum;
}

function subtraction(a,b){
    numTest(a,b);
    let difference = a - b;
    return difference;
}

function multiplication(a,b){
    numTest(a,b);
    let product = a * b;
    return product;
}

function division(a,b){
    numTest(a,b);
    let quotient = a / b;
    return quotient;
}

function operate(a,b, FUN){
    let output = FUN(a,b);
    return output;
}

function populateDisplay(input){
    display.textContent = input;
}

// initial display value
let displayString = ""
// 

function inputDisplay(input){
    // starts a new string if the last action was equals
    if(isResult == true){
        displayString = "";
        isResult == false;
    }
    // add pressed button to display string and populate
    displayString += input.target.id;
    populateDisplay(displayString);
}

buttons.forEach(
    function(button){
        button.addEventListener("click", inputDisplay);
    }
)



// this function determines what happens if you click an operator button
function operatorActions(){
    
    if(isResult == false){
        numberArray.push(displayString);
    }
    displayString = "";
    operatorVar = this.id;
    console.log(numberArray);
    if(numberArray.length == 2){
        calculate();
    }


}

// listen to our operator buttons and apply their actions if clicked
operatorButtons.forEach(
    function(operatorButton){
        operatorButton.addEventListener("click", operatorActions);
    }
)

function calculate(){

    numberArray.push(displayString);
    isResult = true;


    switch(operatorVar) {


        case "plus":
            output = operate(
                Number(numberArray[0]),
                Number(numberArray[1]),
                addition
            );

            displayString = String(output);
            populateDisplay(displayString);
            numberArray[0] = String(output);
            numberArray.pop();
            break;

            case "minus":
                output = operate(
                    Number(numberArray[0]),
                    Number(numberArray[1]),
                    subtraction
                );
    
                displayString = String(output);
                populateDisplay(displayString);
                numberArray[0] = String(output);
                numberArray.pop();
                break;

            case "times":
                    output = operate(
                        Number(numberArray[0]),
                        Number(numberArray[1]),
                        multiplication
                    );
        
                    displayString = String(output);
                    populateDisplay(displayString);
                    numberArray[0] = String(output);
                    numberArray.pop();
                    break;    

            case "divisionSymbol":
                output = operate(
                    Number(numberArray[0]),
                    Number(numberArray[1]),
                        division
                    );
            
                    console.log(output);
                    displayString = String(output);
                    populateDisplay(displayString);
                    numberArray[0] = String(output);
                    numberArray.pop();
                    break;

    }

}


// listen to equals button
equals.addEventListener("click", calculate);

// create clear to reset everything
function clear(){
    displayString = "";
    populateDisplay(displayString);
    numberArray = [];
    isResult = false;
    operatorVar = undefined;
}

// listen to clear button
clearButton.addEventListener("click", clear);

// create back
function back(){
    displayString = displayString.substring(0, displayString.length - 1);
    populateDisplay(displayString);
}

// listen to back button
backButton.addEventListener("click", back);

// module.exports = {
//     addition,
//     subtraction,
//     multiplication,
//     division,
//     operate
//   };