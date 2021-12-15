const age = 26;
// const age = 30;

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!");
} else {
    console.log("No discount for you!");
}

const firstName = "Sharon";
// const firstName = "Sarah";

if (firstName == "Sarah" || firstName == "Bram") {
    console.log("You get a free beer!");
} else {
    console.log("Pay for your beer!");
}

const totalAmount = 24;
// const totalAmount = 33;
// const totalAmount = 55;
// const totalAmount = 110;

if (totalAmount > 100) {
    console.log("You get a free bottle of Champagne!")
} else if (totalAmount > 50) {
    console.log("You get a free portion of Nachos!");
} else if (totalAmount > 25) {
    console.log("You get free Bitterballs!");
} else {
    console.log("Sorry! Nothing free for you!")
}