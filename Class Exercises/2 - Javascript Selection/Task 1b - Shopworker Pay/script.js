// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePay);
});

// Function to calculate the worker's pay
function calculatePay() {
    let age = parseFloat(document.getElementById('age').value)
let hours = parseFloat(document.getElementById('hours').value)
let result = 0 
    // TODO: Get the age and hours worked from the input fields
    if (age < 18){
         result = hours * 4.85
    } else {
       result = hours * 6.35
    }
   document.getElementById('result').textContent = result
    // TODO: Set the hourly rate based on age (£4.85 for under 18, £6.35 for 18 and over)
    
    // TODO: Calculate total pay
    
    // TODO: Display the hours worked and total amount earned
}
