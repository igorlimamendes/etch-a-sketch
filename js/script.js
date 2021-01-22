// Variables
const btnGridSize = document.querySelector(".gridSize");
const btnClear = document.querySelector(".clear");
const btnColored = document.querySelector(".colored");
const btnBlack = document.querySelector(".black");
const container = document.getElementById("container");
let cellColor = 0; // 0 is default (black) and 1 is colored

// Make rows function
function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");

        container.appendChild(cell).className = "cell";

        cell.addEventListener("mouseover", function(event) { // Change background color when user hover cell div
            if (cellColor === 0) {
                cell.setAttribute("style", "background: var(--black);");
            } else {
                cell.setAttribute("style", `background: rgb(${colored()}, ${colored()}, ${colored()});`); // Call function to return random values to use in rgb
            }

            container.style.boxShadow = `0 .2em 1em ${cell.style.backgroundColor}`; // Change box shadow by the same random color generate in cell div
        });
    }
}

makeRows(10, 10); // Default value when user reload or access page for the first time

// Grid Size Button
btnGridSize.addEventListener("click", () => {
    let size = 0;

    while (size < 1 || size > 100) size = prompt("Select a value between 1 and 100");

    let totLength = container.children.length; // Get total length of container children that have been created in makeRows function
    
    for (let i = 0; i < totLength; i++) {
        let cellClass = document.querySelector(".cell");
        
        container.removeChild(cellClass);
    }

    makeRows(size, size); // Call function to create a grid with new size
});

// Clear Button
btnClear.addEventListener("click", () => {
    let totLength = container.children.length; // Get total length of container children that have been created in makeRows function
    
    for (let i = 0; i < totLength; i++) {
        container.children[i].removeAttribute("style"); // Remove style attribute for each cell div
    }
});

// Colored Button
const colored = () => {
    return Math.floor(Math.random() * 256); // Return a random value between 1 and 255
}

btnColored.addEventListener("click", () => {cellColor = 1;});

// Black Button
btnBlack.addEventListener("click", () => {cellColor = 0;});
