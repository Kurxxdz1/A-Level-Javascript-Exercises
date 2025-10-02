// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    let radius = document.getElementById('radius').value;
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
        let circumference = Math.PI * 2 * radius
        let area = Math.PI * radius^2
    //    - Area using the formula: π * radius^2
    document.getElementById('circumference').innerHTML = circumference;
    document.getElementById('area').innerHTML = area;
    // 3. Display both results in their respective span elements
    // Note: Use Math.PI for the value of π
}
