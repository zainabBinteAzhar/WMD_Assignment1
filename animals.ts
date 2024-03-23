var animals=["hen","cow","goat"];
for(let i=0;i<animals.length;i++)
{
    console.log(animals[i]);
}
//statements

console.log("A",animals[0],"is of bubbly nature kinda");
console.log("A",animals[1],"is innocent by nature");
console.log("A",animals[2],"is angrp all the time, but is cute");

var ans="";
for(let i=0;i<animals.length;i++)
{
    ans+=animals[i]+" ";
}
console.log(ans+"are cute animals");