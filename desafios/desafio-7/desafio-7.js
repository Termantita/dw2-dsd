/*
Consigna:

En el proyecto e-commerce que estás desarrollando, crear un array llamado "productos" que contengan objetos con información sobre diferentes productos. 
Cada objeto debe tener las propiedades "nombre" y  "precio" (si tenés productos como indumentaria podes agregar talla o tamaño, por ejemplo) Recorre el array con un bucle for para lograr mostrar la información de cada producto en un mensaje de alerta, es decir, mostrar el nombre, precio o algún otro dato que hayas agregado. 

¿Te acordás para qué sirve la propiedad length? Podría serte útil para este desafío.

Dato extra: ¿Cómo agregarías un descuento en los productos?

*/

const forma1 = () => {
  let products = [
    {
      _id: Math.floor(Math.random() * 9999999999),
      name: "Telas viejas",
      price: 650,
      quantity: 5,
    },
    {
      _id: Math.floor(Math.random() * 9999999999),
      name: "Botellas reutilizables",
      price: 2000,
      quantity: 6,
    },
    {
      _id: Math.floor(Math.random() * 9999999999),
      name: "Elementos reciclables",
      price: 1200,
      quantity: 15,
    },
    {
      _id: Math.floor(Math.random() * 9999999999),
      name: "Elementos reutilizables",
      price: 2000,
      quantity: 6,
    },
    {
      _id: Math.floor(Math.random() * 9999999999),
      name: "Composta",
      price: 2000,
      quantity: 1,
    },
    {
      _id: Math.floor(Math.random() * 9999999999),
      name: "Pantalón 2da mano",
      price: 6500,
      quantity: 1,
    },
    {
      _id: Math.floor(Math.random() * 9999999999),
      name: "Campera 2da mano",
      price: 13000,
      quantity: 1,
    },
  ];

  console.info(
    "---------------------------------------------------------------------------- Forma 1: Uso de objeto literal ----------------------------------------------------------------------------"
  );

  for (let product in products) {
    let i = parseInt(product) + 1;
    console.log(`Producto ${i}`);
    console.table(products[product]);

    alert(`Producto ${i}:
      Nombre: ${products[product].name}
      Precio: ${products[product].price}`);
  }
};

const forma2 = () => {

  /*
  Creo un objeto literal usando la "plantilla" del constructor
  Product: {
    id: id,
    name: name,
    price: price,
    quantity: quantity
  }
  */
  class Product {
    constructor(id, name, price, quantity) {
      this._id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }

  let products = new Array(); // Otra manera de crear un Array, como usar "[]" pero invocando un objeto

  // Se encarga de insertar el objeto en el array, guardando un dato de tipo Product, el cual es mi objeto. Se puede no mandar como argumento "price" o "quantity" y se toma sus valores por defecto (1)
  const pushObj = (name, price = 1, quantity = 1) => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max); // Obtiene un numero random entero (no decimal)
    }

    products.push(new Product(getRandomInt(99999999999), name, price, quantity)); // En este caso, el numero random va de 0 a 99999999999, como seria un UUID, o un ID unico basicamente
  }

  pushObj("Telas viejas", 650, 5);
  pushObj("Botellas reutilizables", 2000, 6);
  pushObj("Elementos reciclables", 800, 15);
  pushObj("Elementos reutilizables", 2000, 6);
  pushObj("Composta", 2000);
  pushObj("Pantalón 2da mano", 6500);
  pushObj("Campera 2da mano", 13000);

  console.info(
    "---------------------------------------------------------------------------- Forma 2: Uso de constructor ----------------------------------------------------------------------------"
  );

  for (let product in products) {
    let i = parseInt(product) + 1;
    console.log(`Producto ${i}`);
    console.table(products[product]);

    // alert(`Producto ${i}:
    //   Nombre: ${products[product].name}
    //   Precio: ${products[product].price}`);
  }
};

forma1();
forma2();
