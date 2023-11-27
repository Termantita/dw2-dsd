const addToCartBtn = document.querySelector(".add-to-cart-btn");
const totProducts = document.querySelector("#products");
productsC = 0;

addToCartBtn.addEventListener("click", () => {
  alert("Un producto nuevo ha sido agregado");

  totProducts.innerHTML = ++productsC;
});
