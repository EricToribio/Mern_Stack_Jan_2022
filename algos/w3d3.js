const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
    { firstName: "John", lastName: "Fawn" },
    { firstName: "Edward", lastName: "Kim" }
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "John", lastName: "Fawn" },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
];
// Filters the given items based on the search criteria using a startsWith

function filterByKeyStartsWith(items, searchFor, searchBy) {
    let matches = []
    let l = searchFor.length
    for (const obj of items) {
        if (obj.hasOwnProperty(searchBy) && obj[searchBy].substring(0, l) === searchFor) {
            matches.push(obj)

        } else {
            console.log("no match in " + obj[searchBy])
        }
    }
    return matches
}

// console.log(filterByKeyStartsWith(people, searchFor3, searchBy3))

// Filters the given items based on the search criteria using different search method
function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    let matches = []

    let l = searchFor.length
    for (const obj of items) {
        if (searchMethod == "startsWith") {
            if (obj.hasOwnProperty(searchBy) && obj[searchBy].substring(0, l) === searchFor) {
                matches.push(obj)

            } else {
                console.log("Starts With: no match in " + obj[searchBy])
            }
        }
        else if (searchMethod == "includes") {
            if (obj.hasOwnProperty(searchBy) && obj[searchBy].toUpperCase().includes(searchFor.toUpperCase())) {
                matches.push(obj)
            } else {
                console.log("Includes: no match in " + obj[searchBy])
            }
        }
    }
    return matches
}

// console.log(filterByKey(people, searchFor1, searchBy1))
// console.log(filterByKey(people, searchFor2, searchBy2))
// console.log(filterByKey(people, searchFor3, searchBy3))
console.log(filterByKey(people, searchFor4, searchBy4, searchMethod4))

function filterByKey2(items, searchFor, searchBy, searchMethod = "startsWith") {
    let matches = []

    let l = searchFor.length
    for (const obj of items) {
        if (searchMethod == "startsWith" && obj.hasOwnProperty(searchBy) && obj[searchBy].substring(0, l) === searchFor) {
            matches.push(obj)
        }
        else if (searchMethod == "includes" && obj.hasOwnProperty(searchBy) && obj[searchBy].toUpperCase().includes(searchFor.toUpperCase())) {
            matches.push(obj)
        } else {
            console.log(searchMethod + " : no match in " + obj[searchBy])
        }
    }
    return matches
}
console.log(filterByKey2(people, searchFor4, searchBy4, searchMethod4))
console.log(filterByKey2(people, searchFor1, searchBy1))
console.log(filterByKey2(people, searchFor2, searchBy2))
console.log(filterByKey2(people, searchFor3, searchBy3))