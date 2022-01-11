
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < (nums.length - i); j++) {
            if (nums[j] > nums[j + 1]) {
                // var temp = nums[j]
                // nums[j] =  nums[j + 1]
                // nums[j + 1] = temp
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    console.log(nums);
    return nums
    //given an unsorted array, sort the array using bubbleSort
    // i.e. keep swapping the largest value and put it at the end
}
// bubbleSort(nums);
//we need to do a temp swap 
bubbleSort(numsRandomOrder);