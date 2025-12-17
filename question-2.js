// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0].quantity = 200;
inventory.push({name: "Orange", price: 20, quantity: 300});

let ApplePrice = inventory[0].price * inventory[0].quantity;
let BananaPrice = inventory[1].price * inventory[1].quantity;
let OrangePrice = inventory[2].price * inventory[2].quantity;

let TotalPrice = ApplePrice + BananaPrice + OrangePrice ;
console.log(inventory);
console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก " + TotalPrice + " บาท");
