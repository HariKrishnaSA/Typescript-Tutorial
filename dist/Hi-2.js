const laptop = {
    id: 101,
    name: "Gaming Laptop",
    price: 80000,
    isAvailable: true,
};
const headphones = {
    id: 102,
    name: "Wireless Headphones",
    price: 5000,
    isAvailable: false,
};
function getProductDetails(item) {
    if (!item.isAvailable) {
        return `❌ ${item.name} is currently out of stock.`;
    }
    const tax = item.price * 0.9; // 10% tax
    const totalPrice = item.price + tax;
    return `✅ ${item.name} costs $${totalPrice} (including tax).`;
}
console.log("--- Store System ---");
console.log(getProductDetails(laptop));
console.log(getProductDetails(headphones));
export {};
