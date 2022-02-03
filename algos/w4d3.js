
/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10"; // b:70 a:164 c:32 a:20 c:10
const expected1 = "a184b70c42"; //a:184 b:70 c:42
//70

  //given an incorrectly string by combining letter count occurences
  // return the correctly rehashed string alphabetized.
function rehash(s) {
  let hashtable = {}
  let temp 
  let key 
  for ( let i = 0; i < s.length; i++){
    if(isNaN(s[i])){
      if(hashtable.hasOwnProperty(s[i]) === false) {
        if( key && temp!=0){

        hashtable[key] += parseInt(temp)
        }
        key = s[i]
        temp = 0
        hashtable[s[i]] = 0
      }else{
        if(key && temp != 0){
        hashtable[key] += parseInt(temp)

        }
        temp = 0
        key = s[i]

      }
    }else{
      temp += s[i]
    }
  }


hashtable[key] += parseInt(temp)
// sortedTable = Object.entries(hashtable).sort((a,b) => b[1]-a[1])
   let sortedTable =Object.keys(hashtable).sort().reduce((r, k) => (r[k] = hashtable[k], r), {})
//   console.log(sortedTable)
  let newHash =''
  for(let [key,val] of Object.entries(sortedTable)){
    newHash+=key+val
    

  }
//   console.log(newHash)
  return(newHash)
}
console.log(rehash(str1))
// HINTS: isNaN(num) , parseInt(str)





   
// BONUS  -- longest substring without repeating characters


// const str1 = "abcabcbb";
// const expected1 = 3;
// // Explanation: The answer is "abc", with the length of 3.

// const str2 = "bbbbb";
// const expected2 = 1;
// // Explanation: The answer is "b", with the length of 1.

// const str3 = "pwwkew";
// const expected3 = 3;
// /* Explanation: The answer is "wke", with the length of 3. 
//   Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

// const str4 = "dvadf"; 
// const expected4 = 4;
// // Explanation: "vadf"

// //Given a string, find the length of the longest substring without repeating characters.
// function lengthOfLongestSubString(str) {}