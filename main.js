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


function mostrarPizzas() {
    for (let i = 0; i < pizzas.length; i++) {
        $ul = document.querySelector("ul");
        $li = document.createElement("li");
        $liTexto = document.createTextNode(`${pizzas[i].nombre}`);
        $ul.appendChild($li);
        $li.appendChild($liTexto);
        $li.classList.add(`${i}`);
    }
}

mostrarPizzas();


function validarInput() {

    for (let i = 0; i < pizzas.length; i++) {
        if (document.querySelector("input").value === pizzas[i].nombre) {
            $h2 = document.querySelector("h2");
            $p = document.createElement("p");
            $pText = document.createTextNode(`Pizza en stock y vale ${pizzas[i].precio}$`);
            $h2.appendChild($p);
            $p.appendChild($pText);
            $p.style.color = "green";
            document.getElementsByClassName(`${i}`)[0].style.backgroundColor="green";
            return
        }
       
    }

    $h4 = document.querySelector("h4");
    $p = document.createElement("p");
    $pText = document.createTextNode("Pizza NO encontrada");
    $h4.appendChild($p)
    $p.appendChild($pText)
    $p.style.color = "red";
}

document.addEventListener("click", (e) => {
    if (e.target.matches("#button")) {
        if (document.querySelector("p")) {
            document.querySelector("p").remove()
        }
      
        validarInput()
    }
});
