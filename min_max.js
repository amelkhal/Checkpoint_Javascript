/*
Find Maximum and Minimum: 
Write functions to find the maximum and minimum values in an array of numbers.
*/
 function maximum(tab){
    let mx= tab[0];
    for (let i=1; i<tab.length;i++){
        
        if(mx<tab[i]){
            mx= tab[i];
        }
        
    }
    return "the max is " + mx ;
 }
function minimum(tab){
    let mn=tab[0];
    for (let i=1; i<tab.length;i++){
        
        if(mn>tab[i]){
            mn = tab[i];
        }
        
    }
    return " the min is " + mn ;
 }
 const table= [0,1,2,3,4,5,6,88] //Example
 console.log(maximum(table)); //88
 console.log(minimum(table)); //0
