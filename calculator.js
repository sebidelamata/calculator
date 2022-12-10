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

module.exports = {
    addition,
    subtraction,
    multiplication,
    division
  };