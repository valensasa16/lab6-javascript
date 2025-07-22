/****************** YOUR NAME: valentina Gil

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
let modelName = "XYZ"; // String data type - holds the current model name
let duration = 0; // Number data type - holds the rental duration in days

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
    // Get reference to the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
    
    // Variable to hold the calculated total cost
    let totalCost = 0; // Number data type
    
    // Calculate cost based on current model
    if (modelName === "XYZ") {
        totalCost = duration * 100; // XYZ model costs $100 per day
    } else if (modelName === "CPRG") {
        totalCost = duration * 213; // CPRG model costs $213 per day
    }
    
    // Update the displayed cost with proper formatting
    costLabel.innerHTML = totalCost.toFixed(2);
    
    // Add highlight effect to show the change
    costLabel.classList.add("highlight");
    setTimeout(() => {
        costLabel.classList.remove("highlight");
    }, 500);
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
// Create variable to represent the "Switch Model" pseudo-button
let modelButton = document.getElementById("model-button");

// Function to change the model
function changeModel() {
    // Get reference to the model-text span element
    let modelTextElement = document.getElementById("model-text");
    
    // Toggle between models
    if (modelName === "XYZ") {
        modelName = "CPRG"; // Change model name variable
        modelTextElement.innerHTML = "Model CPRG"; // Update display text
    } else if (modelName === "CPRG") {
        modelName = "XYZ"; // Change model name variable
        modelTextElement.innerHTML = "Model XYZ"; // Update display text
    }
    
    // Add highlight effect to show the change
    modelTextElement.classList.add("highlight");
    setTimeout(() => {
        modelTextElement.classList.remove("highlight");
    }, 500);
    
    // Recalculate the total cost with new model
    recalculate();
}

// Attach the changeModel function to the model button click event
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
// Create variable to represent the "Change Duration" pseudo-button
let durationButton = document.getElementById("duration-button");

// Function to change the duration
function changeDuration() {
    // Get reference to the duration-text span element
    let durationTextElement = document.getElementById("duration-text");
    
    // Prompt user for new duration
    let userInput = prompt("Enter the rental duration (number of days):", duration);
    
    // Validate and process the input
    if (userInput !== null) { // User didn't cancel the prompt
        // Convert string input to number and validate
        let newDuration = parseInt(userInput);
        
        // Check if the input is a valid positive number
        if (!isNaN(newDuration) && newDuration >= 0) {
            duration = newDuration; // Save to duration variable
            durationTextElement.innerHTML = duration; // Update display
            
            // Add highlight effect to show the change
            durationTextElement.classList.add("highlight");
            setTimeout(() => {
                durationTextElement.classList.remove("highlight");
            }, 500);
            
            // Recalculate the total cost with new duration
            recalculate();
        } else {
            // Show error message for invalid input
            alert("Please enter a valid number of days (0 or greater).");
        }
    }
}

// Attach the changeDuration function to the duration button click event
durationButton.addEventListener("click", changeDuration);

/****************** initialization ******************/
// Initialize the page with default values when it loads
document.addEventListener("DOMContentLoaded", function() {
    // Set initial display values
    let modelTextElement = document.getElementById("model-text");
    let durationTextElement = document.getElementById("duration-text");
    
    modelTextElement.innerHTML = "Model " + modelName;
    durationTextElement.innerHTML = duration;
    
    // Calculate and display initial cost
    recalculate();
    
    console.log("Robot Rental Calculator initialized successfully!");
    console.log("Current model:", modelName);
    console.log("Current duration:", duration);
});
