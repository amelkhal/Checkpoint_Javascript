/* Fibonacci Sequence:
 Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net ) */
 
 function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}
 
console.log(fib(9)); //Example (34)