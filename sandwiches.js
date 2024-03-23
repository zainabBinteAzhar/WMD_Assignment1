"use strict";
function make_sandwich(...ingredients) {
    if (ingredients.length == 0) {
        console.log("No ingredients sandwich");
    }
    else {
        console.log("Make sanddwich with following ingredients: " + ingredients);
    }
}
make_sandwich('ham');
make_sandwich('turkey', 'avocado', 'swiss cheese');
make_sandwich();
