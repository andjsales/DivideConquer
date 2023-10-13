function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let middle = Math.floor((low + high) / 2);

    if (middle < high && arr[middle + 1] < arr[middle])
        return middle + 1;

    if (middle > low && arr[middle] < arr[middle - 1]) {
        return middle;
    }

    if (arr[high] > arr[middle]) {
        return findRotationCount(arr, low, middle - 1);
    }
    return findRotationCount(arr, middle + 1, high);
}

module.exports = findRotationCount;