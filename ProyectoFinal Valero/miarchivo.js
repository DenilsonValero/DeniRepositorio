let formulario = document.getElementById("formulario")

fetch("./data.json")
.then(traer => traer.json())
.then(data => {
    const formularios = data;

    formulario.addEventListener("submit", (e)=>{
        e.preventDefault()

        let gmail = document.getElementById("gmail").value;
        let clave = document.getElementById("clave").value;

        let formu = formularios.find((item)=> item.gmail === gmail)
        let formu2 = formularios.find((item) => item.clave === parseInt(clave)) 

        if (formu && formu2) {
            window.location ="./buscarProducto/index.html"
        }else{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Usuario y/o Clave incorrectas",
                showConfirmButton: false,
                timer: 1500
              });
           formulario.reset()
        }
    });
});
/* script que a traves de un json obtiene los datos registrados para acceder a la tienda
 en caso de error tira un sweetalert */
