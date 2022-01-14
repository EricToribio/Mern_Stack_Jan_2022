// const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
// const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// const nums4 = [2, 1];

// function partition(nums, left, right) {
//     let pivot = nums[Math.floor((left + right) / 2)]
//     console.log(pivot)
//     while (left != right) {
//         while (nums[left] < pivot) {
//             left++
//         }
//         while (nums[right] > pivot) {
//             right--
//         }
//         console.log(`before: ${nums}`)
//         let temp = nums[right]
//         nums[right] = nums[left]
//         nums[left] = temp
//         console.log(`after: ${nums}`)
//     }
//     return right
// }

// console.log(partition(nums1, 0, nums1.length - 1))

// function quickSort(nums, left, right) {
//     if (left < right) {
//         let p = partition(arr, left, right);
//         quicksort(arr, left, p - 1);
//         quicksort(arr, p + 1, right);
//     }
//     return arr
// }

const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];


function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivotIndex = partition(nums, left, right);
        quickSort(nums, left, pivotIndex);
        quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
}


function partition(nums, left = 0, right = nums.length - 1) {
    //Step 1: choose any number from the arr as the pivot
    //Step 2: move the nums smaller than the pivot on the left
    // and nums greats than pivot on the right
    //Step 3: return the pivot index
    let pivot = nums[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i != j) {
        while (nums[i] < pivot) {
            i++;
        }
        while (nums[j] > pivot) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];


    }
    console.log(nums);
    console.log(pivot);
    console.log(i)
    return i;
}

console.log(quickSort(nums1))