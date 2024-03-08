/*Capitalize Words: 
Implement a function that capitalizes the first letter of each word in a sentence.*/

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
       
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 console.log(titleCase("what's up folks")); //Example (What's Up Folks)