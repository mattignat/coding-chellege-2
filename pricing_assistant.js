// Calculate discounted price
const discountedPrice = basePrice * (1 - discountRate);

// Calculate final price with sales tax
const finalPriceWithTax = discountedPrice * (1 + salesTaxRate);

// Calculate profit per unit
const profitPerUnit = finalPriceWithTax - costPerUnit;

// Calculate break-even units
const breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);

// Determine if profitable per unit
const isProfitablePerUnit = profitPerUnit > 0;
// Coding Challenge 00

// Declare product name
const productName = "SuperWidget";


// Declare variables for costs and rates
const costPerUnit = 12.50; // dollars
const basePrice = 19.99; // dollars
const discountRate = 0.15; // 15% discount
const salesTaxRate = 0.07; // 7% sales tax
const fixedMonthlyCosts = 1000; // dollars (rent, utilities, platform fees)

// Example values for break-even calculation
const fixedCosts = fixedMonthlyCosts;
const variableCostPerUnit = costPerUnit;
const pricePerUnit = basePrice;




// Output results clearly
console.log(`Product: ${productName}`);
console.log(`Discounted Price (before tax): $${discountedPrice.toFixed(2)}`);
console.log(`Final Price with Tax: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per Unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-even Units: ${breakEvenUnits}`);
console.log(`Per-unit Profitability: ${isProfitablePerUnit}`);
git remote add origin https://github.com/mattignat/coding-chellege-2.git
git branch -M main
git push -u origin main