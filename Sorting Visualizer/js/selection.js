async function selectionSort() {
    const bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length; i++) {
        let min = i;
        bars[i].style.background = "blue";

        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.background = "red";
            await sleep(delay);

            if (parseInt(bars[j].style.height) < parseInt(bars[min].style.height)) {
                if (min !== i) bars[min].style.background = "cyan";
                min = j;
            } else {
                bars[j].style.background = "cyan";
            }
        }

        swap(bars[min], bars[i]);
        bars[min].style.background = "cyan";
        bars[i].style.background = "green";
    }
}

document.querySelector(".selectionSort").addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
