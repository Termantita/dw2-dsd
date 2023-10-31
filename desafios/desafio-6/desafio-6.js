/* Consigna:
Siguiendo los pasos de los ejercicios vistos en clase, para este desafío 
deberás crear un array que contenga el nombre de varios productos, por ejemplo; 
una lista de productos de supermercado (ej: galletitas, azúcar, fideos, 
detergente, etc), una lista de productos de ropa (remera, pantalón, 
busco campera, etc), lista de productos de calzados 
(ej, botas, zapatillas, sandalias, etc). 

La lista debe ser acorde a la temática de tu sitio e-commerce. Luego, 
muestra los datos de tu arreglo en un alert() recorriendo cada uno de ellos con un for. 
*/

let productosReThink = ["ropa de 2da mano", "telas viejas", "elementos reciclables", "elementos reutilizables", "composta", "botellas retornables"];

for (let producto of productosReThink) {
  alert(`Forma parte de nuestro equipo acercandote a nuestra centro y darnos los siguentes productos : ${producto}`);
  console.log(producto);
}