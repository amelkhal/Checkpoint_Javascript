/*Sum of Array: 
Create a function that calculates the sum of all elements in an array. */

function sum(tab){
    s = 0;
    for (let i=0;i<tab.length;i++){
        sum += tab[i]
    }
    return s
}
const table=[1,2,3,6,9,85]; //Example
console.log(sum(table)); //106