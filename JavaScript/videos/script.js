console.log("Hola desde el script.js");

var edad = prompt("¿Qué edad tenés?", 29);
alert("Hola, tu edad es de "+edad+" años");

alert("el tipo de dato de la 'variable edad' es "+typeof edad);

<script>
    // Selecciona el elemento y le asigna el año actual automáticamente
    document.getElementById("year").textContent = new Date().getFullYear();
</script>