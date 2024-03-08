/*Reverse a String: 
Write a function that reverses a given string.*/

function reverse(c){
    let char="";
    for (let i=c.length-1;i>=0;i--){
         char += c[i];
       
    }
    console.log(char);
}

reverse("HelloWorld"); //Example (dlroWolleH) 