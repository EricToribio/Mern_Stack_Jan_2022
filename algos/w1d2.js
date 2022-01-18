
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function selectionSort(nums) {
    //given an unsorted array, sort the array using selectionSort
    // i.e. find the largest value and put it at the end
    for (let i = 0; i < nums.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    return nums;
}
