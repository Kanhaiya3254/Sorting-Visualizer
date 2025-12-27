async function mergeSort(arr, start = 0, end = array.length - 1) {
    const bars = document.querySelectorAll(".bar");

    if (start >= end) return;

    let mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);

    // Merge
    let left = [];
    let right = [];
    for (let i = start; i <= mid; i++) left.push(parseInt(bars[i].style.height));
    for (let i = mid + 1; i <= end; i++) right.push(parseInt(bars[i].style.height));

    let i = 0, j = 0, k = start;
    while (i < left.length && j < right.length) {
        bars[k].style.background = "blue";
        await sleep(delay);
        if (left[i] <= right[j]) {
            bars[k].style.height = left[i] + "px";
            i++;
        } else {
            bars[k].style.height = right[j] + "px";
            j++;
        }
        bars[k].style.background = "green";
        k++;
    }

    while (i < left.length) {
        bars[k].style.height = left[i] + "px";
        bars[k].style.background = "green";
        i++; k++;
    }
    while (j < right.length) {
        bars[k].style.height = right[j] + "px";
        bars[k].style.background = "green";
        j++; k++;
    }
}

document.querySelector(".mergeSort").addEventListener("click", async () => {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(array);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
