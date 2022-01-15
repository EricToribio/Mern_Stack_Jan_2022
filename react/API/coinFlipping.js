function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );



const fiveHeads = new Promise((resolve, reject) => {
        let headCount = 0
        let attempts = 0
        while (headCount < 5) {
            attempts++
            // console.log(attempts)
            let result = tossCoin()
            // console.log(`${result} was flipped`);
            if (result === "heads") {
                headCount++;
            } else {
                headCount = 0;
            }
            if (attempts >= 100) {

                break
            }

        }
        if(attempts >= 100){

            reject(console.log('100 tosses and 5 heads in a did not happen. Try again!!'))
        }else {
            resolve(`It took ${attempts} tries to flip five "heads"`)

        }
        
    })


// your code here!


fiveHeads
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");

