let products = [
  {
    _id: new Date().getTime(),
    name: "Pantalon café",
    price: 4500,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETz8_BaJokmCRB-BP17Fgo579_F3YSXFo6g&usqp=CAU",
  },
  {
    _id: new Date().getTime(),
    name: "Remera verde",
    price: 4100,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/719/894/products/remera_lisa_verde_manzana11-1fe20c91494ac6af9916252578971427-640-0.png",
  },
  {
    _id: new Date().getTime(),
    name: "Zapatillas de cuero",
    price: 15000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbNJihFGWTQ4XH2d6thIk9AEzicQauRdF9A&usqp=CAU",
  },
  {
    _id: new Date().getTime(),
    name: "Gorro azul",
    price: 800,
    img: "https://www.cheeky.com.ar/uploads/picture/image/80999/I2107531_29_1.jpg",
  },
];

const cardSection = document.querySelector(".contenedorCards");

const addProduct = (product) => {
  const html = `
          <img
            src="${product.img || "../img/imgPlano.png"}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5>$<span class="product-price">${product.price || 0}</span></h5>
            <p class="product-description">
              ${product.name || "Sin nombre"}
            </p>

            <div class="container">
              <button class="add-to-cart-btn">Agregar</button>
              <div class="div-quantity">
                <button class="quantity-minus" disabled="true">
                  <i class="bx bx-minus"></i>
                </button>
                <p class="quantity">1</p>
                <button class="quantity-sum">
                  <i class="bx bx-plus"></i>
                </button>
              </div>
            </div>
          </div>`;

  const item = document.createElement("article");
  item.classList = "card product";
  item.innerHTML = html;
  item.dataset.aos = "fade-up";

  cardSection.appendChild(item);
};

products.forEach(product => addProduct(product));