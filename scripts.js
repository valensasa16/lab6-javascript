/****************** YOUR NAME: valentina Gil (Versión Corregida)

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

let modelName = "XYZ"; // String data type - holds the current model name
let duration = 1; // Number data type - holds the rental duration in days (inicializado en 1)

/****************** helper function ******************/
function recalculate() {
    // Get reference to the calculated-cost span element with error checking
    let costLabel = document.getElementById("calculated-cost");
    if (!costLabel) {
        console.error("Error: calculated-cost element not found");
        return;
    }
    
    // Variable to hold the calculated total cost
    let totalCost = 0; // Number data type
    
    // Calculate cost based on current model
    if (modelName === "XYZ") {
        totalCost = duration * 100; // XYZ model costs $100 per day
    } else if (modelName === "CPRG") {
        totalCost = duration * 213; // CPRG model costs $213 per day
    }
    
    // Update the displayed cost with proper formatting
    costLabel.innerHTML = "$" + totalCost.toFixed(2);
    
    // Add highlight effect to show the change (solo si la clase existe)
    if (costLabel.classList) {
        costLabel.classList.add("highlight");
        setTimeout(function() {
            costLabel.classList.remove("highlight");
        }, 500);
    }
}

/****************** model button logic ******************/

// Function to change the model
function changeModel() {
    // Get reference to the model-text span element with error checking
    let modelTextElement = document.getElementById("model-text");
    if (!modelTextElement) {
        console.error("Error: model-text element not found");
        return;
    }
    
    // Toggle between models
    if (modelName === "XYZ") {
        modelName = "CPRG"; // Change model name variable
        modelTextElement.innerHTML = "Model CPRG"; // Update display text
    } else if (modelName === "CPRG") {
        modelName = "XYZ"; // Change model name variable
        modelTextElement.innerHTML = "Model XYZ"; // Update display text
    }
    
    // Add highlight effect to show the change
    if (modelTextElement.classList) {
        modelTextElement.classList.add("highlight");
        setTimeout(function() {
            modelTextElement.classList.remove("highlight");
        }, 500);
    }
    
    // Recalculate the total cost with new model
    recalculate();
}

/****************** duration button logic ******************/

// Function to change the duration
function changeDuration() {
    // Get reference to the duration-text span element with error checking
    let durationTextElement = document.getElementById("duration-text");
    if (!durationTextElement) {
        console.error("Error: duration-text element not found");
        return;
    }
    
    // Prompt user for new duration
    let userInput = prompt("Enter the rental duration (number of days):", duration);
    
    // Validate and process the input
    if (userInput !== null && userInput.trim() !== "") { // User didn't cancel and provided input
        // Validación más estricta
        let newDuration = parseFloat(userInput.trim());
        
        // Check if the input is a valid positive number
        if (!isNaN(newDuration) && newDuration > 0 && Number.isFinite(newDuration)) {
            duration = Math.round(newDuration); // Redondear a días completos
            durationTextElement.innerHTML = duration; // Update display
            
            // Add highlight effect to show the change
            if (durationTextElement.classList) {
                durationTextElement.classList.add("highlight");
                setTimeout(function() {
                    durationTextElement.classList.remove("highlight");
                }, 500);
            }
            
            // Recalculate the total cost with new duration
            recalculate();
        } else {
            // Show error message for invalid input
            alert("Please enter a valid number of days greater than 0.");
        }
    }
}

/****************** initialization ******************/
// Initialize the page with default values when it loads
document.addEventListener("DOMContentLoaded", function() {
    // Set initial display values with error checking
    let modelTextElement = document.getElementById("model-text");
    let durationTextElement = document.getElementById("duration-text");
    
    if (modelTextElement) {
        modelTextElement.innerHTML = "Model " + modelName;
    } else {
        console.error("Error: model-text element not found");
    }
    
    if (durationTextElement) {
        durationTextElement.innerHTML = duration;
    } else {
        console.error("Error: duration-text element not found");
    }
    
    // Set up event listeners with error checking
    let modelButton = document.getElementById("model-button");
    if (modelButton) {
        modelButton.addEventListener("click", changeModel);
    } else {
        console.error("Error: model-button element not found");
    }
    
    let durationButton = document.getElementById("duration-button");
    if (durationButton) {
        durationButton.addEventListener("click", changeDuration);
    } else {
        console.error("Error: duration-button element not found");
    }
    
    // Calculate and display initial cost
    recalculate();
    
    console.log("Robot Rental Calculator initialized successfully!");
    console.log("Current model:", modelName);
    console.log("Current duration:", duration);
});
