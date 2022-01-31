
const str1 = "";
// expected1 = false;

const str2 = "a";
// expected2 = true;

const str3 = "ddaa"; //
// expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
// expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
// expected5 = true;
// Explanation: "daaad" "adada"

const str6 = "abc";
// expected6 = false;


// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.

//make a key/value map
//check if only one key is odd
//
function frequencyTableBuilder(arr) {
    const freqTable = {};

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];

        if (freqTable.hasOwnProperty(str) === false) {
            // first occurrence found
            freqTable[str] = 1;
        } else {
            freqTable[str]++;
        }
    }
    return freqTable;
}

 
function canStringBecomePalindrome(str) {
  if(str == "") {
    return false
  }  
  let table = frequencyTableBuilder(str)
  // console.log(table)
  let count= 0 
  for(let [key,val] of Object.entries(table)){

    val % 2 != 0 &&
    count++
    
    
    
  }
  return count > 1 ?  false 
  :  true
  

}
console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))
// -----------DROP IT ---------------

// const nums1 = [1, 4, 3, 6, 9, 15];
// const callback1 = (elem) => {
//   return elem > 5;
// };
// // expected1 = [6, 9, 15];

// const nums2 = [...nums1];
// const callback2 = (elem) => {
//   return elem > 2;
// };
// // expected2 = [4, 3, 6, 9, 15];

// const nums3 = [...nums1];
// const callback3 = (elem) => false;
// // expected3 = [];

// /*
//   Input: arr, callback
//   Output: arr (with elements removed)
//   Remove every element in the array, starting from idx 0,
//   until the callback function returns true when passed the
//   iterated element.
//   Return an empty array if the callback never returns true
// */

// function dropIt(arr, callbackFunc) {
//   for (i in arr){
//     if(!callbackFunc(arr[i])) {

//     arr[i] = -1
//     }
//   }
   
//   return arr
// }
// // console.log(callback1(4))
// console.log(dropIt(nums1, callback1))
// console.log(dropIt(nums2, callback2))
// console.log(dropIt(nums3, callback3))