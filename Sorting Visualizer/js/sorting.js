let barsContainer = document.getElementById("bars");
let delay = 50;
let array = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableSortingBtn() {
    document.querySelectorAll(".bubbleSort,.selectionSort,.insertionSort,.mergeSort,.quickSort")
        .forEach(btn => btn.disabled = true);
}

function enableSortingBtn() {
    document.querySelectorAll(".bubbleSort,.selectionSort,.insertionSort,.mergeSort,.quickSort")
        .forEach(btn => btn.disabled = false);
}

function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}

// Create New Array
function createNewArray(size = 40) {
    barsContainer.innerHTML = "";
    array = [];

    for (let i = 0; i < size; i++) {
        let val = Math.floor(Math.random() * 300) + 20;
        array.push(val);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = val + "px";
        barsContainer.appendChild(bar);
    }
}

// Event Listeners
document.getElementById("arr_sz").addEventListener("input", e => createNewArray(parseInt(e.target.value)));
document.getElementById("speed_input").addEventListener("input", e => delay = 320 - parseInt(e.target.value));
document.querySelector(".newArray").addEventListener("click", () => {
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(document.querySelector("#arr_sz").value);
});

// Initialize
createNewArray();
