let usuario = prompt("ingrese usuario");
let clave = prompt("Ingrese Clave");

/* algoritmo que pide usuario y clave */

/* objetos dentro de una aaray  para el algoritmo de compra */
    const productos =[
        {nombre:"camara" , precio:2000 , moneda:"ars"},
        {nombre:"paralante" , precio:200000 , moneda:"ars"},
        {nombre:"celular" , precio: 350000, moneda:"ars"},
        {nombre:"tele", precio:4000000 , moneda:"ars"},
    ];
 /* usuario = persona */
 /* clave = programar */
/* algoritmo de registro de usuario y contraseña */
const  registro = () => {
    while (usuario != "persona"  &&  clave != "programar") {
        alert(`Clave y usuario Incorecto`);
        
        usuario = prompt("Ingrese usuario correcto");
        clave = prompt("ingrese clave correcta");
    }
    
}
/* saludo al usuario al ingresar */
const saludo = () => {
    registro()
    if (usuario === "persona" && clave === "programar") {
        alert(`Bienvenido ${usuario}`)
    }
}
/* algoritmo de compra y busqueda con el metodo find*/
/* productos camara,celular,parlante y tele */
const compras = () => {
    saludo()
    /* este forEach sirve para mostrale a la persona que producto estan disponibles y cuanto cuestan */
productos.forEach(item => {
    alert(`los producctos disponibles son ${item.nombre} y su precio es de ${item.precio}`)
});
    let compra = prompt("Que producto quiere comprar");
    let produc = productos.find((item) => item.nombre === compra);
   
    if (produc.nombre === "camara" || produc.nombre === "parlante" || produc.nombre === "celular" || produc.nombre === "tele") {
        alert(`El producto que quiere comprar es ${produc.nombre} y cuesta ${produc.precio}`)
    }else{
        alert("producto no encontrado")
    }

}

compras()