// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
let allPrice = (products[0].price * products[0].quantity) + (products[1].price * products[1].quantity) + (products[2].price * products[2].quantity) ;

function calculateTotalPrice (products,promotionCode){
  if(promotionCode === "SALE20"){
   return allPrice = allPrice * 20%;
  }
  else if(promotionCode === "SALE50"){
    return allPrice = allPrice * 50%;
   }
  else{
    return allPrice
  }
}

console.log(allPrice);
