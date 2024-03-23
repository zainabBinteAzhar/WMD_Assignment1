"use strict";
//Question # 30
var userNames = ["Zainab", "Binte", "Azhar", "Admin", "Abdul"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] == "Admin") {
        console.log("Hello Admin! would you like to see a status report?");
    }
    else {
        console.log("Hello ", userNames[i], "! thank you for logging in again");
    }
}
//Question # 31
userNames.length = 0;
if (userNames.length == 0) {
    console.log("We need to find more users");
}
else {
    console.log("We already have some users");
}
//Question # 32
var currentUsers = ["Zainab", "Ayesha", "Hadia", "Huzaifa", "Sarwat"];
var newUsers = ["Areeba", "Areej", "ZAINAB", "Kikii", "Huzaifa"];
for (let i = 0; i < newUsers.length; i++) {
    let isFound = false;
    for (let j = 0; j < currentUsers.length; j++) {
        if (newUsers[i].toLowerCase() == currentUsers[j].toLowerCase()) {
            isFound = true;
            console.log("User " + newUsers[i] + " is already registered. You need to have a new user name");
            break;
        }
    }
    if (isFound == false) {
        console.log(newUsers[i], ": this user name is available");
    }
}
