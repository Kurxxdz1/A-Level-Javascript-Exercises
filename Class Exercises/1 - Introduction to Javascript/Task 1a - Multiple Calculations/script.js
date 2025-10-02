// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    let number1 = parseInt(document.getElementById ('numberA').value);
    let number2 = parseInt(document.getElementById ('numberB').value); 
    let number3 = parseInt(document.getElementById ('numberC').value); 
    // 2. Calculate:
    //    - (A + B + C) / 3
    let average = (number1 + number2 + number3) / 3
    let product = number1 * number2 * number3
    let expression = number1 + (number2 * number3)
    //    - A × B × C
    //    - A + (B × C)
    // 3. Display the results in the respective span elements
document.getElementById('average').innerHTML = average;
document.getElementById('product').innerHTML = product;
document.getElementById('expression').innerHTML = expression;
}

