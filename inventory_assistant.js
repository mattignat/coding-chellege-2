// Output results clearly
console.log(`Item: ${itemName}`);
console.log(`Weeks of Cover: ${weeksOfCover === Infinity ? 'Infinity' : weeksOfCover.toFixed(2)}`);
console.log(`Reorder Now?: ${reorderNow}`);
console.log(`Recommended Reorder Quantity: ${reorderQuantity}`);
console.log(`Estimated Cost: $${estimatedReorderCost.toFixed(2)}`);
// Inventory calculations
const weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
const stockDeficit = Math.max(0, targetStock - currentStock);
const reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
const estimatedReorderCost = reorderQuantity * unitCost;
const reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;
// Inventory variables
const unitCost = 3.25; // number, cost per unit in dollars
const currentStock = 120; // number, current inventory
const reorderLevel = 40; // number, threshold for reorder
const targetStock = 200; // number, desired stock after reorder
const weeklyDemand = 25; // number, units sold per week
const supplierLeadTimeWeeks = 2; // number, weeks to receive order
// Inventory Assistant

// Explicit variable declarations
const itemName = "USB-C Cable"; // string
const totalStock = 120; // number
const soldUnits = 45; // number
const reorderThreshold = 30; // number
const packSize = 10; // number

// Calculate remaining stock
const remainingStock = Math.max(0, totalStock - soldUnits);

// Calculate number of packs needed to restock to full
const packsNeeded = Math.ceil((totalStock - remainingStock) / packSize);

// Calculate coverage (guard against division by zero)
let coverage = 0;
if (soldUnits > 0) {
    coverage = remainingStock / soldUnits;
} else {
    coverage = 0; // or set to null/undefined if preferred
}

// Output results clearly
console.log(`Item: ${itemName}`);
console.log(`Total Stock: ${totalStock}`);
console.log(`Sold Units: ${soldUnits}`);
console.log(`Remaining Stock: ${remainingStock}`);
console.log(`Reorder Threshold: ${reorderThreshold}`);
console.log(`Pack Size: ${packSize}`);
console.log(`Packs Needed to Restock: ${packsNeeded}`);
console.log(`Coverage (remaining/sold): ${soldUnits > 0 ? coverage.toFixed(2) : 'N/A'}`);
