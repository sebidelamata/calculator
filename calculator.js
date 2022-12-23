let display = document.querySelector(".display-text");
let buttons = document.querySelectorAll(".buttons");
let divisionSymbol = document.querySelector("#divisionSymbol");
let operatorButtons = document.querySelectorAll(".operator-button");
let equals = document.querySelector(".equals");

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
    
    numberArray.push(displayString);
    displayString = "";
    operatorVar = this.id;
    console.log(numberArray);
    console.log(operatorVar);

}

// listen to our operator buttons and apply their actions if clicked
operatorButtons.forEach(
    function(operatorButton){
        operatorButton.addEventListener("click", operatorActions);
    }
)

function calculate(){

    numberArray.push(displayString);


    switch(operatorVar) {


        case "plus":
            output = operate(
                Number(numberArray[0]),
                Number(numberArray[1]),
                addition
            );

            console.log(output);
            displayString = String(output);
            populateDisplay(displayString);
            numberArray[0] = output;
            break;

            case "minus":
                output = operate(
                    Number(numberArray[0]),
                    Number(numberArray[1]),
                    subtraction
                );
    
                console.log(output);
                displayString = String(output);
                populateDisplay(displayString);
                numberArray[0] = output;
                break;

            case "times":
                    output = operate(
                        Number(numberArray[0]),
                        Number(numberArray[1]),
                        multiplication
                    );
        
                    console.log(output);
                    displayString = String(output);
                    populateDisplay(displayString);
                    numberArray[0] = output;
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
                        numberArray[0] = output;
                        break;

    }

}

equals.addEventListener("click", calculate);

// module.exports = {
//     addition,
//     subtraction,
//     multiplication,
//     division,
//     operate
//   };