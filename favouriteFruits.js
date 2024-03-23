"use strict";
var favFruits = ["kiwi", "strawberries", "watermelon"];
for (let i = 0; i < favFruits.length; i++) {
    if (favFruits[i] == "orange") {
        console.log("you really like oranges");
    }
    else if (favFruits[i] == "watermelon") {
        console.log("you really like watermelon");
    }
    else if (favFruits[i] == "banana") {
        console.log("you really like banana");
    }
    else if (favFruits[i] == "apple") {
        console.log("you really like apple");
    }
    else if (favFruits[i] == "kiwi") {
        console.log("you really like kiwi");
    }
    else {
        console.log("you really like " + favFruits[i]);
    }
}
