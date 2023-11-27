const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

const qtyMinusBtn = document.querySelectorAll(".quantity-minus");
const qtySumBtn = document.querySelectorAll(".quantity-sum");

const cart = document.querySelector(".cart ul");
const clearCartBtn = document.querySelector(".clear-cart-btn");

const totalPrice = document.querySelector(".total-price");


/**
 * 
 * @param {Element} btn 
*/
const addProductToCart = (btn) => {
  const item = document.createElement("li");
  
  const body = btn.closest(".card-body");
  const name = body.querySelector(".product-description").textContent;
  const price = parseInt(body.querySelector(".product-price").textContent);
  const qty = parseInt(body.querySelector(".quantity").textContent);
  
  if (qty <= 0) {
    alert("Debe seleccionar por lo menos una unidad");
    return;
  }
  
  item.innerHTML = `
  <hr>
  <article>
  <h2>${name}</h2>
  <p>Precio de producto: $${price}</p>
  <p>Precio total: $${price * qty}</p>
  <p>Cantidad: ${qty}</p>
  </article>
  <hr>`;
  
  
  item.dataset.aos = "fade-right";
  changeTotalPrice(price * qty);
  
  body.querySelector(".quantity").textContent = 1;
  
  cart.append(item);
};

const changeTotalPrice = (newPrice) => {
  totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + newPrice;
}

const resetTotalPrice = () => {
  totalPrice.innerHTML = 0;
}

qtyMinusBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    const qty = btn.closest("div").querySelector(".quantity");

    if (parseInt(qty.textContent) <= 2)
      btn.disabled = true;

    qty.innerHTML = parseInt(qty.innerHTML) - 1;
  })
);

qtySumBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    const qty = btn.closest("div").querySelector(".quantity");
    const btnMinus = btn.closest("div").querySelector(".quantity-minus");

    if (qty.innerHTML > -1)
      btnMinus.disabled = false;

    if (qty.innerHTML > 20)
      btn.disabled = true;

    qty.innerHTML = parseInt(qty.innerHTML) + 1;
  })
);

addToCartBtn.forEach(btn => btn.addEventListener("click", () => addProductToCart(btn)));


clearCartBtn.addEventListener("click", () => {
  cart.innerHTML = "";
  resetTotalPrice();
});
