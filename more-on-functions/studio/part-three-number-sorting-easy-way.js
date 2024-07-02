//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function sortAscending(arr) {
    return arr.slice().sort((a,b) => a-b);
}

function sortDescending(arr1) {
    return arr1.slice().sort((a, b) => b-a);
}
//Sort each array in ascending order.
let sortedNums1Asc = sortAscending(nums1);
let sortedNums2Asc = sortAscending(nums2);
let sortedNums3Asc = sortAscending(nums3);

console.log("Ascending order:");
console.log("nums1:", sortedNums1Asc);
console.log("nums2:", sortedNums2Asc);
console.log("nums3:", sortedNums3Asc);

//Sort each array in descending order.
let sortedNums1Desc = sortDescending(nums1);
let sortedNums2Desc = sortDescending(nums2);
let sortedNums3Desc = sortDescending(nums3);

console.log("Descending order:");
console.log("nums1:", sortedNums1Desc);
console.log("nums2:", sortedNums2Desc);
console.log("nums3:", sortedNums3Desc);