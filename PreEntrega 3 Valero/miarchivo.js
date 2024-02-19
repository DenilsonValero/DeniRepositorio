let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    let formu = e.target.children;
    if (!formu[0].value.includes("@") && !formu[1].value.includes("123")) {
        alert("debe incluir @ y 123");
        formu[0].value= "";
        formu[1].value= "";
    }else{
        /* si el texto icluido lleva un @ y 123 nos lleva al segundo html y js */
            window.location = "index2.html"
    }

});
