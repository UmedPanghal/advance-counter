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
        // add current value comma and space added previous value
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
// section 2 

document.getElementById('saveButton').addEventListener('click', function () {
    const inputText = document.getElementById('myInput').value;

    // Display the saved text in the paragraph element
    document.getElementById('displayText').textContent = inputText;

    // Clear the input field after saving
    document.getElementById('myInput').value = '';
});