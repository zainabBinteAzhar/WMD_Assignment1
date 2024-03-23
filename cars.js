"use strict";
function carInformation(manufacturer, model, ...additionalDetails) {
    const car = {
        manufacturer,
        model,
    };
    if (additionalDetails !== undefined) {
        car.additionalDetails = additionalDetails;
    }
    return car;
}
console.log(carInformation("zainab", "2018"));
console.log(carInformation("zainab", "2018", "pink", "GT667"));
console.log(carInformation("zainab", "2018", "maroon"));
