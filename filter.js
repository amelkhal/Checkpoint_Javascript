/* Filter Array: 
Implement a function that filters out elements from an array based on a given condition. */

function filterArray(arr, condition) {
    return arr.filter(condition);
}
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredResult = filterArray(array, isPrime);
console.log(filteredResult); // Output: [2, 3, 5, 7]