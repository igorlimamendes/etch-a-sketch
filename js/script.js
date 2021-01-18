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

        cell.addEventListener("mouseover", function(event) { // Detect when user hover div (cell)
            event.target.classList.add("grid-item--color"); // Add a class in order to change background color
        });
    }
}

makeRows(10, 10); // Default value when user reload webpage or access for the first time

button.addEventListener("click", () => {
    let size = prompt("Select a value between 1 and 100");

    let gridItemsTotal = container.children.length;

    if (size >= 1 && size <= 100) {
        let container = document.getElementById("container");

        for (let i = 0; i < gridItemsTotal; i++) {
            let gridItem = document.querySelector(".grid-item");
            container.removeChild(gridItem);
        }

        makeRows(size, size);
    } else alert("Only values between 1 and 100 are allowed");
});
