"use strict";
let myFriends = ["Ayesha", "Areeba", "Alishba", "Shahab", "Areej"];
console.log("my Friend list:");
//Method# 01
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
console.log("\n");
//Method# 02
myFriends.forEach(myFriends => console.log(myFriends));
