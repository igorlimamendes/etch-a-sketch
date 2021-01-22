// Variables
const btnClear = document.querySelector(".clear");
const container = document.getElementById("container");

// Make rows function
function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");

        container.appendChild(cell).className = "cell";

        cell.addEventListener("mouseover", function(event) {
            cell.setAttribute("style", "background: var(--black);"); // Change background color when user's hovering cell div
        });
    }
}

makeRows(10, 10); // Default value when user reload or access page for the first time

// Button function
btnClear.addEventListener("click", () => {
    let size = 0;

    while (size < 1 || size > 100) size = prompt("Select a value between 1 and 100");

    let totLength = container.children.length; // Get total length of container children that have been created in makeRows function
    
    for (let i = 0; i < totLength; i++) {
        let cellClass = document.querySelector(".cell");
        
        container.removeChild(cellClass);
    }

    makeRows(size, size); // Call function to create a game with new values
});
