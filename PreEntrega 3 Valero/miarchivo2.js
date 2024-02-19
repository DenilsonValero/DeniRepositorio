let busuqeda = document.getElementById("buscar")
let contenedor = document.getElementById("contencion")

const productos1 = [
    {id: 1, nombre:"camisa", precio: 1000, stock: 20},
    {id: 2, nombre:"pantalon", precio: 55500, stock: 20},
    {id: 3, nombre:"gorra", precio: 7800, stock: 354},
    {id: 4, nombre:"medias", precio: 2000, stock: 575}
];
// esta funcion es para cuando se le da click al boton buscar aparesca el producto
busuqeda.addEventListener("submit",(e)=>{
    e.preventDefault();
    let busca = productos1.find((item)=> item.nombre === product.value);

    if (busca !== undefined) {
        let div = document.createElement("div");
        div.innerHTML = `
            <h2> Nombre: ${busca.nombre} </h2>
            <h3> ID: ${busca.id} </h3>
            <p> Precio: ${busca.precio} </p>
            <b> Stock: ${busca.stock} </b>
            <input type="submit" value="agregar" id="agre${busca.id}">
        `;
        
        div.className = "estructura";
        contenedor.append(div);
        
    //esta otra funcion le da un evento de guardado al localstorage y guarda su fecha de agregado
    let agregarBoton = div.querySelector(`#agre${busca.id}`);
    agregarBoton.addEventListener("click", () => {

        let fechadeguardado = new Date().toLocaleDateString();
        let productoGuardado = { ...busca, fechaGuardado: fechadeguardado };
        let productosGuardados = JSON.parse(localStorage.getItem("productosGuardados")) || [];

        productosGuardados.push(productoGuardado);
        localStorage.setItem("productosGuardados", JSON.stringify(productosGuardados));
        Swal.fire({
            title: "Agregado!",
            text: "Continuar",
            icon: "success"
          });
    });
} else {
    Swal.fire({
        icon: "error",
        title: "Producto no encontrado",
        text: "Busque otro producto",
      });
}

});




