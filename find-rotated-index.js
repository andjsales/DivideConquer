function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        let start = 0;
        let end = pivot - 1;
        return binarySearch(arr, num, start, end); // checking left side of array
    }
    return binarySearch(arr, num, pivot, arr.length - 1); // checking right side of array
}

function binarySearch(arr, num, start, end) {
    if (arr.length === 0) {
        return -1;
    }

    if (num < arr[start] || num > arr[end]) {
        return -1;
    }

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === num) {
            return middle;
        } else if (num < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;

}

function findPivot(arr) {
    // [3, 4, 1, 2]
    // finding where the array pivots

    // 
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) { // 3 < 2
        return 0;
    }

    let start = 0;
    let end = arr.length - 1; // 3
    while (start <= end) {
        let middle = Math.floor((start + end) / 2); // 1
        if (arr[middle] > arr[middle + 1]) { // 4 > 1
            return middle + 1; // 2
        }
        else if (arr[start] <= arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
}

// expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1);
const result = findRotatedIndex([3, 4, 1, 2], 4);
console.log(result);

module.exports = findRotatedIndex;