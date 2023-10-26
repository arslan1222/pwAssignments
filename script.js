// Get the HTML elements
const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let count = 0;

// Event listener for the increment button
incrementButton.addEventListener("click", () => {
    count += 1;
    countDisplay.textContent = count;
});

// Event listener for the decrement button
decrementButton.addEventListener("click", () => {
    count -= 1;
    countDisplay.textContent = count;
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});
