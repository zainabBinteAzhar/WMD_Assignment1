"use strict";
//Question# 41
const magicians = ["Zainab", "Areeba", "Areej"];
function show_magicians(names) {
    console.log(names);
}
show_magicians(magicians);
//Question# 42 && 43const oldNames=magicians;
function make_great(magicians) {
    const great_magicians = [...magicians];
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = "Great " + great_magicians[i];
    }
    return great_magicians;
}
const oldNames = magicians;
const newNames = make_great(magicians);
console.log("With Great title:");
show_magicians(newNames);
console.log("Original names:");
show_magicians(oldNames);
