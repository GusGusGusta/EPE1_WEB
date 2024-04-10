
function contacto() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var direccion = document.getElementById("direccion").value;
    var comuna = document.getElementById("comuna").value;

    alert("Nombre: " + nombre + "\nCorreo: " + correo + "\nDirección: " + direccion + "\nComuna: " + comuna);


    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("comuna").selectedIndex = 0;

}




function filtrarProductos() {
    var categoria = document.getElementById("categoria").value;
    var nombre = document.getElementById("nombre").value.toLowerCase();

    var productos = [
        { nombre: "🍊 Naranja", categoria: "Fruta" },
        { nombre: "🍎 manzana", categoria: "Fruta" },
        { nombre: "🍍 piña", categoria: "Fruta" },
        { nombre: "🍇 uva", categoria: "Fruta" },
        { nombre: "🍉 zandia", categoria: "Fruta" },
        { nombre: "🥔 papa", categoria: "Verdura" },
        { nombre: "🧅 cebolla", categoria: "Verdura" },
        { nombre: "🥕 Zanahoria", categoria: "Verdura" },
        { nombre: "🌶️ aji", categoria: "Verdura" },
        
        // Agrega más datos según sea necesario
    ];

    var resultados = productos.filter(function(producto) {
        return (producto.categoria === categoria || categoria === "Todos") &&
               (producto.nombre.toLowerCase().includes(nombre) || nombre === "");
    });

    mostrarResultados(resultados);
}

// Función para mostrar resultados de filtrado de productos
function mostrarResultados(resultados) {
    var output = document.getElementById("output");
    output.innerHTML = "";

    resultados.forEach(function(producto) {
        output.innerHTML += "<p>" + producto.nombre + " - " + producto.categoria + "</p>";
    });
}
