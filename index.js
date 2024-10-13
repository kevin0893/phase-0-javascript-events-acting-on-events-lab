// Select the dodger element
const dodger = document.getElementById("dodger");

// Function to move the dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Move left if it's greater than 0
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Function to move the dodger right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const gameWidth = document.getElementById("game").offsetWidth;
    const dodgerWidth = dodger.offsetWidth;
    const dodgerRightEdge = left + dodgerWidth;

    // Move right if it doesn't exceed the game width
    if (dodgerRightEdge < gameWidth) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Attach functions to the window object for testing
window.moveDodgerLeft = moveDodgerLeft;
window.moveDodgerRight = moveDodgerRight;

// Event listeners for keydown events
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
