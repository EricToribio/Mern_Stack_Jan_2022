
// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];
/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */

  //given 2 sorted array in different length, find the nums that are intersect and return the array 
  //****  nums that appeared in both array.
  // nested for loops
  // first loop to run the array at each index compare values to the other array
  //  
// for ternary operator, if it is multiple lines, you can use () to wrap it. 
// a>b?(a=1, b=2, c=3) : (a=10, b=20, c=30)
function orderedIntersection(sortedA, sortedB) {
  sortedA.length > sortedB.length ? 
  (longest = sortedA,
   shortest  = sortedB)
  : (longest = sortedB, shortest = sortedA)


  intersectList = []
  for(let i = 0; i < shortest.length; i++){
    for(let j = 0; j < longest.length; j++){
    // console.log(shortest[i])
    // console.log(longest[j])
    if (shortest[i] === longest[j]) {
      // console.log('same')
      if(intersectList.includes(shortest[i])){
        continue
        // console.log('here')
      }else{
        intersectList.push(shortest[i])
        // console.log("hello")
      }
    }
    }
  }
  return intersectList
}
console.log(orderedIntersection(numsA3, numsB3))

// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
// if you still see red line, refresh the page. 
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
function orderedMultisetUnion(sortedA, sortedB) {
   sortedA.length > sortedB.length ? 
  (longest = sortedA,
   shortest  = sortedB)
  : (longest = sortedB, shortest = sortedA)

  const tableLong = frequencyTableBuilder(longest)
  const tableShort = frequencyTableBuilder(sortest)
  
  for (let [key, val] of tableLong ) {
    
  }
  
  
  

  

}
console.log(orderedMultisetUnion(numsA4, numsB4))
console.log(orderedMultisetUnion(numsA5, numsB5))


  //given 2 sorted array in different length, find the union of both set and return the array 
  //**** all nums that appeared in either array.