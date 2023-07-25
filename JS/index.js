class camiseta {
    constructor(id, modelo, precio, talles) {
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
        this.talles = talles;
    }
}

class Total {
    constructor(articulo) {
        this.carrito = articulo;
    }
    sumarTotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, camisetas) => acc + camisetas.precio, 0);
        }
    }
}

const camiseta1 = new camiseta(1, "camiseta argentina", 11999, [1, 2, 3]);
const camiseta2 = new camiseta(2, "camiseta argentina suplente", 10999, [1, 2, 3]);
const camiseta3 = new camiseta(3, "camiseta de Boca Juniors", 12500, [1, 2, 3, 4]);
const camiseta4 = new camiseta(4, "camiseta brasil", 13999, [2, 3, 4]);

const camisetas = [camiseta1, camiseta2, camiseta3, camiseta4];

const carrito = [];

function solicitarModelo(id) {
    let modelo = camisetas.find((camiseta) => camiseta.id === id);
    return modelo;
}

function solicitarTotal() {
    const total = new Total(carrito);
    console.log(`El precio final de la compra sería 💸${total.sumarTotal()}💸. ¡Muchas Gracias por confiar en nosotros 😉`);
}

function solicitarAyuda() {
    let numeroId = parseInt(prompt("Ingresa el número verde que aparece en el nombre de la camiseta que te gustó 😁"));
    let idSeleccionado = solicitarModelo(numeroId);
    if (idSeleccionado !== undefined) {
        alert(`Estos son los talles disponibles de ${idSeleccionado.modelo.toUpperCase()} que has seleccionado: ${idSeleccionado.talles} y están en $${idSeleccionado.precio}`);
        let confirmarPedido = confirm("¿Deseas agregar al carrito esta camiseta?");
        if (confirmarPedido == true) {
            carrito.push(idSeleccionado);
        } else {
            solicitarAyuda();
        }
    } else {
        alert("⚠️ El artículo que seleccionaste no existe. Inténtalo nuevamente. ⚠️");
    }
    let seguirComprando = confirm("¿Deseas agregar otro artículo al carrito?");
    if (seguirComprando == true) {
        solicitarAyuda();
    } else {
        console.table(carrito);
        solicitarTotal();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    solicitarAyuda();
});

