let display = document.querySelector(".display-text");
let buttons = document.querySelectorAll(".buttons");
let divisionSymbol = document.querySelector("#divisionSymbol");

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
    console.log(input.target.id);
}
console.log(buttons);

buttons.forEach(
    function(button){
        button.addEventListener("click", inputDisplay);
    }
)

// module.exports = {
//     addition,
//     subtraction,
//     multiplication,
//     division,
//     operate
//   };