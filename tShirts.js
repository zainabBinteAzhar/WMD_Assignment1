"use strict";
//Question # 36
function make_shirt(size, text) {
    console.log("Message:", text, " on shirt having size:", size);
}
make_shirt(36, "Explore and Express yourself");
//Question # 37
function make_other_shirts(size = "large", msg = "I Love TypeScript") {
    console.log("Message:", msg, " - on shirt having size:", size);
}
make_other_shirts();
make_other_shirts("medium");
make_other_shirts("small", "TypeScript is easy");
