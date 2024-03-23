let myName="Zainab binte azhar";// name
console.log(myName.toLowerCase());//convert name to lowerCase
console.log(myName.toUpperCase());//convert name to upperCase

let count=myName.length;//count the number of characters in a variable

//As, there is no built-in function of title case. so we have to create it.
var titleCase=myName.split(" ");//split string by each space

let i=0;
let result="";//variable for ffinal title case result

for(i=0; i<titleCase.length;i++)

{   //titleCaee[i]= splitted word at position i.
    //charAt(0)= 1st letter.
    //substring(1)= a substring of that spcific word starting from 2nd letter.

    result=result+titleCase[i].charAt(0).toUpperCase()+titleCase[i].substring(1).toLowerCase()+" ";
}
console.log(result);