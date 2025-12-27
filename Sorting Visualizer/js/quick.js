async function quickSort(start = 0, end = array.length - 1) {
    const bars = document.querySelectorAll(".bar");
    if (start >= end) return;

    let pivot = parseInt(bars[end].style.height);
    let i = start - 1;

    for (let j = start; j < end; j++) {
        bars[j].style.background = "blue";
        await sleep(delay);

        if (parseInt(bars[j].style.height) < pivot) {
            i++;
            swap(bars[i], bars[j]);
        }
        bars[j].style.background = "cyan";
    }
    swap(bars[i + 1], bars[end]);
    bars[i + 1].style.background = "green";

    await quickSort(start, i);
    await quickSort(i + 2, end);
}

document.querySelector(".quickSort").addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
