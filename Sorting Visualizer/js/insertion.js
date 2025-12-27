async function insertionSort() {
    const bars = document.querySelectorAll(".bar");
    bars[0].style.background = "green";

    for (let i = 1; i < bars.length; i++) {
        let key = bars[i].style.height;
        let j = i - 1;
        bars[i].style.background = "blue";

        await sleep(delay);

        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
            bars[j + 1].style.height = bars[j].style.height;
            j--;
            await sleep(delay);
        }
        bars[j + 1].style.height = key;

        for (let k = 0; k <= i; k++) bars[k].style.background = "green";
    }
}

document.querySelector(".insertionSort").addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
