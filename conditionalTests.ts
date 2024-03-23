//Question #23
let car = 'Thar';

console.log("Is car == 'Thar'? I predict True.");
console.log(car == 'Thar'); // true

console.log("Is car == 'peugeot'? I predict False.");
console.log(car == 'peugeot'); // false

console.log("Is car != 'Thar'? I predict False.");
console.log(car != 'Thar'); // false

console.log("Is car != 'peugeot'? I predict True.");
console.log(car != 'peugeot'); // true

console.log("Is car > 'peugeot'? I predict False.");
console.log(car > 'peugeot'); // false

console.log("Is car < 'peugeot'? I predict True.");
console.log(car < 'peugeot'); // true

console.log("Is car > 'Thar'? I predict False.");
console.log(car > 'Thar'); // false

console.log("Is car < 'Thar'? I predict False.");
console.log(car < 'Thar'); // false

console.log("Is car.length == 6? I predict False.");
console.log(car.length == 6); // false

console.log("Is car.length == 4? I predict True.");
console.log(car.length == 4); // true

//Question #24

//Tests for equality and inequality with strings
let string1="painting";

console.log("Is car== string1? I predict False.");
console.log(car == string1); // false
console.log("Is car!= string1? I predict True.");
console.log(car != string1); // true

//Tests using the lower case function

function isLowerCase(input: string){
    if (input === input.toLowerCase()) {
        return "True";
    } 
    else {
        return "False";
    }
}
console.log("Is string1 in lowercase? I predict True");
console.log(isLowerCase(string1));

console.log("Is car in lowerCase? I predict false.");
console.log(isLowerCase(car)); // false

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

var num1=7,num2=22;

console.log("Is num1 = num2? I predict false.");
console.log(num1==num2);//false.
console.log("Is num1 != num2? I predict true.");
console.log(num1!=num2);//true.

console.log("Is num1 > num2? I predict false.");
console.log(num1>num2);//false.
console.log("Is num1 < num2? I predict true.");
console.log(num1<num2);//true.

console.log("Is num1 >= num2? I predict false.");
console.log(num1>=num2);//false.
console.log("Is num1 <= num2? I predict true.");
console.log(num1<=num2);//true.


//Tests using "and" and "or" operators

var percentage=49,status="present";
if(percentage>=80&&status=="present")
{
    console.log("You are an excellent student");
}
else if(percentage>50 || status !="absent")
{
    console.log("You are promoted to next class.");
}
else
{
    console.log("You have to repeat the class.");
}

//Test whether an item is in a array

var testArray=[36,"hello",true];
console.log("Does 36 exist in the array? The answer should be true.");
console.log(testArray.includes(36)); //returns true.

//Test whether an item is not in a array

console.log("hello does not exist in the array? The answer should be false.");
console.log(!testArray.includes("hello")); //returns false.