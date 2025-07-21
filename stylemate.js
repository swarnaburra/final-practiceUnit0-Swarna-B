const readline = require("readline-sync");

// ------------------------------------------------------------
// StyleMate - Fashion App
// ------------------------------------------------------------

// 💡 Pseudocode:
// 1. Ask user for dress details
// 2. Suggest accessories using logic
// 3. Loop through accessory sets for price check
// 4. Filter accessories that match user input
// 5. Use string concatenation for clean outputs

// --------------------------------------------------
// Values, Data Types, and Operations
// --------------------------------------------------
// Stylemate asks user questions about outfit using readline-sync
// We are using strings and numbers to store outfit data and do comparisons.

let outfitColor = readline.question("What's the color of your outfit? (e.g., beige, black, pastel blue): ");
let outfitType = readline.question("What is your outfit type? (e.g., casual, datenight, work): ");
let budget = parseFloat(readline.question("What is your accessory budget? "));

console.log("Your dress is a " + outfitColor + " for " + outfitType + " and your accessory budget is $" + budget);

// --------------------------------------------------
// Stringing Characters Together
// --------------------------------------------------
// Using + to concat strings and display a personalized message to the user.

let introMessage = "StyleMate is styling your " + outfitColor + " " + outfitType + " right now!";
console.log(introMessage);

// --------------------------------------------------
// Control Structures and Logic
// --------------------------------------------------
// Using if/else logic to recommend accessories based on color, type, and budget.

let earrings, necklace, purse, footwear, storeOption;

if (outfitType === "datenight" && outfitColor === "black" && budget < 100) {
    earrings = "fresh water pink pearl earrings";
    necklace = "thin pink seed bead necklace";
    purse = "silver glitter clutch";
    footwear = "silver heels";
    storeOption = "Amazon";
} else if (outfitType === "casual" && outfitColor === "beige" && budget < 50) {
    earrings = "hoops";
    necklace = "colorful wood boho necklace";
    purse = "canvas bag";
    footwear = "sandals";
    storeOption = "Kohl's";
} else {
    earrings = "studs";
    necklace = "lace choker";
    purse = "tote bag";
    footwear = "pumps";
    storeOption = "Macy's";
}


console.log("Recommended Accessories:");
console.log("Earrings: " + earrings);
console.log("Necklace: " + necklace);
console.log("Purse: " + purse);
console.log("Footwear: " + footwear);
console.log("Store: " + storeOption);

// --------------------------------------------------
// Working with Loops
// --------------------------------------------------
// Loop through accessory bundles to see which are within the budget.

let inBudgetAccessoriesList = [
    [5, ["earrings"]],
    [15, ["earrings", "necklace"]],
    [35, ["earrings", "necklace", "footwear"]],
    [60, ["earrings", "necklace", "footwear", "purse"]],
    [100, ["earrings", "necklace", "purse"]],
];

console.log(" Checking accessory bundles within budget:");

for (let i = 0; i < inBudgetAccessoriesList.length; i++) {
    let price = inBudgetAccessoriesList[i][0];
    let items = inBudgetAccessoriesList[i][1];

    if (price <= budget) {
        console.log(` Accessories ${items.join(", ")} for $${price} are within budget.`);
    } else {
        console.log(` Accessories ${items.join(", ")} for $${price} are over budget.`);
    }
}

// --------------------------------------------------
// Building Arrays
// --------------------------------------------------
// Creating an array of accessory objects with multiple properties.

let accessories = [
    { name: "thin pink seed bead necklace", style: "datenight", price: 30 },
    { name: "fresh water pink pearl earrings", style: "datenight", price: 20 },
    { name: "bead hoop earrings", style: "casual", price: 10 },
    { name: "gemstone chain neclace", style: "casual", price: 12 },
    { name: "cross body purse", style: "casual", price: 10 },
];

//console.log(" Accessories array created:", accessories);

// --------------------------------------------------
// Using Arrays
// --------------------------------------------------
// Filtering accessory list based on style and budget.

let matchingAccessories = accessories.filter(function (item) {
    return item.style === outfitType && item.price <= budget;
});

console.log(" Matching accessories for your dress:");
for (let i = 0; i < matchingAccessories.length; i++) {
    console.log("- " + matchingAccessories[i].name + " ($" + matchingAccessories[i].price + ")");
}
