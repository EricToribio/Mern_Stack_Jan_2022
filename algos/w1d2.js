// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++){
    if (nums.length == 1){
      return nums
    }
    for (let j = i; j > 0; j--){
      if (nums[j] < nums[j-1]){
        let temp = nums[j];
        nums[j]= nums[j-1];
        nums[j-1] = temp;
      }
    }
  }
    return nums
}

  //given an unsorted array, sort the array using insertSort
  // i.e. sort the first element. When it goes the a new element, move the element to the right position. 

  // step1: [9, 2, 5, 6, 4]; (9 is sorted)
  // step2: [2, 9, 5, 6, 4]; ([2,9] is sorted)
  // step3: [2, 5, 9, 6, 4]; ([2,5,9] is sorted)
  // 5 is smaller than 9, so we move 5 to the right position.
  // step4: [2, 5, 6, 9, 4]; ([2,5,6,9] is sorted) 
  // step5: [2, 4, 5, 6, 9]; ([2,4,5,6,9] is sorted) 
console.log(insertionSort(numsOrdered))
console.log(insertionSort(numsRandomOrder))
console.log(insertionSort(numsReversed))



// BONUS 
function merge(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    arr2.push(arr1[i])
  }
  return insertionSort(arr2)
  // given 2 sorted array, combine them and return 1 sorted array. 
}
const sortedA1 = [];
const sortedB1 = [];
//expected output: [];

const sortedA2 = [5];
const sortedB2 = [2];
//expected output: [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
//expected output: [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 6, 9];
const sortedB4 = [3, 7, 8, 10];
//expected output: [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(merge(sortedA4,sortedB4))