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

let savedTexts = [];

function saveText() {
    const currentText = document.getElementById("textInput").value;

    // Add the current text to the saved texts array
    savedTexts.push(currentText);

    // Display all saved texts with delete buttons
    const displayText = savedTexts.map((text, index) => `
                <span>${text} <button onclick="deleteText(${index})">X</button></span>
            `).join(", ");
    document.getElementById("displayedText").innerHTML = displayText;

    // Clear the input field
    document.getElementById("textInput").value = "";
}

function deleteText(index) {
    // Remove the text from the saved texts array
    savedTexts.splice(index, 1);

    // Update the displayed text
    const displayText = savedTexts.map((text, index) => `
                <span>${text} <button onclick="deleteText(${index})">X</button></span>
            `).join(", ");
    document.getElementById("displayedText").innerHTML = displayText;
}