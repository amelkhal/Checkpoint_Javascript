/* Prime Number Check: 
Create a function to check if a number is prime or not */

function primeNumber (p){
    res = true
    for (let i=2; i<p; i++ ){
        if (p % i == 0){
            res = false
            return (`${p} is not a prime number`)
        }
        else {
            return (`${p} is a prime number`)
        }
    }
}
console.log(primeNumber(7)); //Example (7 is a prime number)
console.log(primeNumber(88)); //(88 is a prime number)