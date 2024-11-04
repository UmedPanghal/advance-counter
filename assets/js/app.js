// let current value 
let currentValue = 0;
// let previousValues
let previousValues = [];
//  click add button  evry time add 1 to current value
function addOne() {
    currentValue++;
    document.getElementById("currentValue").textContent = currentValue;
}
//click save button present current value save to previous value
function save() {
    // current value 0 is not save  
    if (currentValue !== 0) {
        // current value click add button push previous value
        previousValues.push(currentValue);
        document.getElementById("previousValues").textContent = previousValues.join(", ");
        // click save button current value automaticalluy 0
        currentValue = 0;
        document.getElementById("currentValue").textContent = currentValue;
    }
    // save 0 alert to screen
    else {
        alert("Current value must be greater than 0 to save.");
    }
}