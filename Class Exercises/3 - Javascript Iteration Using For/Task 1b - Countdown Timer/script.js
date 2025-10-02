// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    if (isNaN(startNum) || isNaN(delay)) {
        display.textContent = "Please enter valid numbers.";
        return;
    }
    // Check if start number is positive
    if (startNum <= 0) {
        display.textContent = "Start number must be positive.";
        return;
    }
    // Check if delay is at least 100ms
    if (delay < 100) {
        display.textContent = "Delay must be at least 100ms.";
        return;
    }

    // TODO: Disable button during countdown
    button.disabled = true;

    // TODO: Create the countdown loop
    // Use a for loop counting backwards
    // Use setTimeout to create the delay between numbers
    for (let i = startNum; i > 0; i--) {
        setTimeout(() => {
            display.textContent = i;
        }, (startNum - i) * delay);
    }
    
    // TODO: Show "Blast off!" at the end
    setTimeout(() => {
        display.textContent = "Blast off!";
    }, startNum * delay);

    // TODO: Re-enable button after countdown finishes
    setTimeout(() => {
        button.disabled = false;
    }, startNum * delay + 1000);
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
