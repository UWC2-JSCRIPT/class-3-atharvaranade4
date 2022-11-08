// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = function(...menuItems){
  let totalPrice = 0;
  let taxedPrice = 0;
  const TAX = 0.065;

  menuItems.forEach((menuItem)=>{
    // Log each item to console
    console.log(`${menuItem.descr} - $${menuItem.price}`)

    // Total price without tax
    totalPrice += menuItem.price

    //Price taxed
    taxedPrice = (totalPrice*TAX) + totalPrice
  })

  console.log(`Subtotal without tax - $${totalPrice.toFixed(2)}`)
  console.log(`Subtotal with tax - $${taxedPrice.toFixed(2)}`)
}


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
