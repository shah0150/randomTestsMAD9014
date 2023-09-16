// Problem: The Lemonade Stand

// You have a lemonade stand, and you want to keep track of how much money you make each day. You sell lemonade for $2 per cup, and you want to know how much you'll earn after selling a certain number of cups.

// Write a JavaScript program that calculates your earnings for the day. You should:

// Create a variable to represent the price per cup of lemonade.
// Create another variable to represent the number of cups you sell.
// Write a function called 'calculateEarnings' that takes two arguments: price and quantity. Inside the function, calculate the total earnings by multiplying the price by the quantity.
// Call the 'calculateEarnings' function with the pricePerCup and cupsSold variables as arguments.
// Print the total earnings for the day to the console using 'console.log'.


// STARTER CODE

// Step 1: Define the price per cup
let pricePerCup = 5;

// Step 2: Define the number of cups sold
let numberOfCupsSold = 10;
// Step 3: Create a function to calculate earnings
function calculateEarnings(price, quantity) {
    return (price * quantity);
}
// Step 4: Calculate earnings and store the result in a variable
let result = calculateEarnings(pricePerCup, numberOfCupsSold);
// Step 5: Display the total earnings
console.log("Total earnings: $" + result);