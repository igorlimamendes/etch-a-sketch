// Variables
const button = document.getElementById("button");
const container = document.getElementById("container");

// Make rows function
function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");

        container.appendChild(cell).className = "grid-item";

        cell.addEventListener("mouseover", function(event) {
            event.target.classList.add("grid-item--color"); // Add a class in order to change background color
        });
    }
}

makeRows(10, 10); // Default value when user reload or access page for the first time

// Button function
button.addEventListener("click", () => {
    let size = 0;

    while (size < 1 || size > 100) size = prompt("Select a value between 1 and 100");

    let totLength = container.children.length; // Get total length of container children that have been created in makeRows function
    
    for (let i = 0; i < totLength; i++) {
        let gridItem = document.querySelector(".grid-item");
        
        container.removeChild(gridItem);
    }

    makeRows(size, size); // Call function to create a game with new values
});
