/* Factorial: 
Write a function to calculate the factorial of a given number.*/
function factorial(a){
    if (a===0){
        return 1;
    } else if (a<0){
        return "undefined"
    } else {
    let res=1
    for (let i=2; i<=a; i++){
        res *=i
    }
    return res
    }
}


console.log(factorial(4)); //Example (24)