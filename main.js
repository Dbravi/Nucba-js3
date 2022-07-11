let pizzas = [
    {
        id: 1,
        nombre: "aceitunas",
        ingredientes: ["aceitunas", "salsa", "queso"],
        precio: 600,

    },

    {
        id: 2,
        nombre: "hawaiana",
        ingredientes: ["salsa", "queso", "piña", "jamon"],
        precio: 800,
    },

    {
        id: 3,
        nombre: "maiz",
        ingredientes: ["salsa", "queso", "aceituna", "maiz", "bacon"],
        precio: 500,
    },
    {
        id: 4,
        nombre: "muzza",
        ingredientes: ["salsa", "queso", "orégano"],
        precio: 450,
    },
    {
        id: 5,
        nombre: "bbq",
        ingredientes: ["salsa", "quesos", "bondiola", "bbq", "cebolla"],
        precio: 1200,
    },
    {
        id: 6,
        nombre: "cuatro quesos",
        ingredientes: ["mozarela", "gongoncina", "fontina", "parmesano"],
        precio: 800,
    }
]
//genero lista de pizzas

function mostrarPizzas() {
    for (let i = 0; i < pizzas.length; i++) {
        $ul = document.querySelector("ul");
        $li = document.createElement("li");
        $liTexto = document.createTextNode(`${pizzas[i].nombre}________id:${pizzas[i].id}`);
        $ul.appendChild($li);
        $li.appendChild($liTexto);
    }
}

mostrarPizzas();

$h2 = document.getElementById("h2");
$h4 = document.getElementById("h4")

//valido input ingresado

function validarInput() {

//si coincide input

    for (let i = 0; i < pizzas.length; i++) {
        if (parseInt(document.querySelector("input").value) === pizzas[i].id) {
            $h2.textContent=(`Pizza en stock y vale ${pizzas[i].precio}$`);
            $h2.style.color = "green";
            return
        }
       
    }
//si no coincide input
    $h4.textContent = ("Pizza NO encontrada");
    $h4.style.color = "red";
}

//boton submnit (resetea campos)

document.addEventListener("click", (e) => {
    if (e.target.matches("#button")) {
        if ($h2.textContent !== "" || $h4.textContent !== "" ) {
            $h2.textContent="";
            $h4.textContent="";
        }
        validarInput()
    }
});
