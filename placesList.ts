let places=["Finland","Dubai","Swat","Androon Lahore","Seoul"];
console.log("Original order:  ");
console.log(places);

//without modifying original one
let myPlacesFake=places.slice();//copy of original array

console.log("Sorting order:  ");
console.log("Sorted Ordder:  ",myPlacesFake.sort());
console.log("Original order:  ",places);

console.log("Reverse Sorting order:  ");
console.log("reverseSorted Ordder:  ",myPlacesFake.reverse());
console.log("Original order:  ",places);

//Actual reverse
console.log("reverseSorted Ordder:  ",places.reverse());
//back to original order
console.log("Original order:  ",places.reverse());

//Alphabetically sorting
console.log("Sorted Ordder:  ",places.sort());
//Reverse Alphabetically sorting
console.log("reverse sorted Ordder:  ",places.reverse());