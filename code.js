function flip(arr, n) {
    if (n > arr.length) n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        let tmp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = tmp;
    }
    return arr;
}

function pancakeSort(arr) {
    for (let arrSubSize = arr.length; arrSubSize > 1; arrSubSize--) {
        let maxPos = 0;
        for (let i = 0; i < arrSubSize; i++) {
            if (arr[i] > arr[maxPos]) { 
                maxPos = i;
            }
        }
        arr = flip(arr, maxPos + 1);
        arr = flip(arr, arrSubSize);
    }
    return arr;
}
