const listProducts = document.getElementById("listProducts");
const form = document.getElementById("form");

import { servicesProducts } from "./service/product-service.js";

//* Lista de productos
servicesProducts.productList().then((products) => {
  products.forEach((product) => {
    listProducts.innerHTML += htmlSctructure(
      product.nombre,
      product.precio,
      product.imagen,
      product.id
    );
  });
  loadButtons();
});

//* Producto
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const nuevoProducto = await servicesProducts.crearProducto(
    e.target.nombre.value,
    e.target.precio.value,
    e.target.imagen.value
  );
  
  mostrarProductoNuevo(
    e.target.nombre.value,
    e.target.precio.value,
    e.target.imagen.value,
    nuevoProducto.id
  );
  form.reset();
  loadButtons();
});


const mostrarProductoNuevo = (nombre, precio, imagen, id) => {
  listProducts.innerHTML += htmlSctructure(nombre, precio, imagen);
};


const htmlSctructure = (nombre, precio, imagen, id) => {
  return `
    <li id="${id}">
        <img src="${imagen}" alt="${nombre} image">
        <h2>${nombre}</h2>
        <div class="productInfo">
            <p>$ ${precio}</p>
            <img id="buttonDelete" src="./assets/trashIcon.png" alt="trash Icon">
        </div>
    </li>
    `;
};


const loadButtons = () => {
  const buttonDelete = document.querySelectorAll("#buttonDelete");
  buttonDelete.forEach((button) => {
    button.addEventListener("click", (e) => {
      servicesProducts.borrarProducto(e.target.parentElement.parentElement.id);
      e.target.parentElement.parentElement.remove();
    });
  });
};