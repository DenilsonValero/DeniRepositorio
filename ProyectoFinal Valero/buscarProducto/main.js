const contenedor = document.getElementById("contenedor");
const btncarrito = document.getElementById("vCarrito");
const productosContainer = document.getElementById("productosContener");
/* aca todo el algoritmo utlizado para para crear los productos a traves de los datos de un json
 aparte de que guarda la fecha en que se añadio al carrito */

fetch("./data.json")
  .then(traer => traer.json())
  .then(data => {
    const productos = data;

    // Generar todos los productos
    productos.forEach(item => {
      let div = document.createElement("div");
      div.innerHTML = `
            <div class="estructura">
              <h2> Nombre: ${item.nombre} </h2>
              <h3> ID: ${item.id} </h3>
              <p>Marca: ${item.marca}</p>
              <img src="${item.img}" alt="">
              <p> Precio: ${item.precio} </p>
              <b> Stock: ${item.stock} </b>
              <input type="submit" value="agregar" id="agre${item.id}">
            </div>
        `;
      contenedor.append(div);

      // guarda los datos en el local storage
      let agregarBoton = div.querySelector(`#agre${item.id}`);
      agregarBoton.addEventListener("click", () => {
        let fechadeguardado = new Date().toLocaleDateString();
        let productoGuardado = { ...item, fechaGuardado: fechadeguardado };
        let productosGuardados = JSON.parse(localStorage.getItem("productosGuardados")) || [];

        productosGuardados.push(productoGuardado);
        localStorage.setItem("productosGuardados", JSON.stringify(productosGuardados));
        Swal.fire({
          title: "Agregado!",
          text: "Continuar",
          icon: "success"
        });
      });
    });
  });

// Función para reiniciar la página
const reiniciar = () => {
  location.reload();
};

// Función para generar los productos guardados en el carrito
const vercarrito = () => {
  let productosGuardados = JSON.parse(localStorage.getItem("productosGuardados")) || [];

  if (productosGuardados.length > 0) {
    // Ocultar los productos en el contenedor principal
    contenedor.style.display = "none";

    // Crear el contenedor de productos del carrito
    const carritoDiv = document.createElement("div");
    carritoDiv.id = "productosContener";
    carritoDiv.classList.add("carritoDiv");

    // Generar los productos guardados en el carrito
    productosGuardados.forEach(item => {
      let productoDiv = document.createElement("div");
      productoDiv.className = "productoDiv";
      productoDiv.innerHTML = `
                <h2> Nombre: ${item.nombre} </h2>
                <h3> ID: ${item.id} </h3>
                <p>Marca: ${item.marca}</p>
                <img src="${item.img}" alt="">
                <p> Precio: ${item.precio} </p>
                <b> Stock: ${item.stock} </b>
                <p> Fecha de agregado: ${item.fechaGuardado} </p>
            `;
      carritoDiv.appendChild(productoDiv);
    });

    // Inserta al contenedor del carrito en el documento
    document.body.appendChild(carritoDiv);
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "carrito vacio",
      showConfirmButton: false,
      timer: 1500
    });
  }
};

// Agrega un evento al botón de Carrito
btncarrito.addEventListener("click", () => {
  vercarrito();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Gracias por escojer nuestra tienda",
    text:"vuelva despues del mantenimiento para comprar",
    showConfirmButton: false,
    timer: 3000
  });
});

// Agrega el evento para eliminar el carrito
const eliminar = document.createElement("button");
eliminar.textContent = "Eliminar";
eliminar.addEventListener("click", () => {
  localStorage.removeItem("productosGuardados");
  reiniciar();
});

// Inserta el boton de eliminar el carrito a la barra de navegacion
document.querySelector(".navbar").appendChild(eliminar);