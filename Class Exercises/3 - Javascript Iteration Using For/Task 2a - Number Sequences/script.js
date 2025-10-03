// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const generateButton = document.getElementById('generateButton');
    const sequenceType = document.getElementById('sequenceType');
    const stepInput = document.getElementById('stepInput');
    
    // Show/hide step input based on sequence type
    sequenceType.addEventListener('change', function() {
        stepInput.classList.toggle('hidden', this.value !== 'steps');
    });
    
    // Add click event listener to the button
    generateButton.addEventListener('click', generateSequence);
});

// Function to generate number sequence
function generateSequence() {
    // TODO: Get the maximum number and sequence type from inputs
  let maxNumber = parseInt(document.getElementById('maxNumber').value);
  let sequenceType = document.getElementById('sequenceType').value;
  let stepValue = parseInt(document.getElementById('stepInput').value) || 1;
  
    // TODO: Initialize array to store sequence
    let sequence = [];
    // TODO: Generate sequence based on type selected:
    // countUp: Use a for loop counting from 1 to N   
    if (sequenceType === 'countUp') {
        for (let i = 1; i <= maxNumber; i++) {
            sequence.push(i);
        }
    // countDown: Use a for loop counting from N down to 1
    } else if (sequenceType === 'countDown') {
        for (let i = maxNumber; i >= 1; i--) {
            sequence.push(i);
        }
    } else if (sequenceType === 'steps') {
        for (let i = 1; i <= maxNumber; i += stepValue) {
            sequence.push(i);
        }
    } else if (sequenceType === 'even') {
        for (let i = 1; i <= maxNumber; i++) {
            if (i % 2 === 0) {                              
                sequence.push(i);
            }
        }
    } else if (sequenceType === 'odd') {
        for (let i = 1; i <= maxNumber; i++) {
            if (i % 2 !== 0) {
                sequence.push(i);
            }
        }
    }

    // TODO: Calculate sum of sequence
    let sum = sequence.reduce((acc, num) => acc + num, 0);

    // TODO: Display sequence, count of numbers, and sum
    document.getElementById('sequenceOutput').textContent = sequence.join(', ');
    document.getElementById('countOutput').textContent = sequence.length;
    document.getElementById('sumOutput').textContent = sum;
}
