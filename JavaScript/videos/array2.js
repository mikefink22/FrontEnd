
var personas = [
    {
        nombre: "Miguel",
        apellido: "Flores",
        amiga: "Natu"
    },
    {
        nombre: "Pau",
        apellido: "Luna",
        amigo: "Mike",
    },
    {
        nombre: "Vale",
        apellido: "Cuquita",
        mascota: "Anastasio",
    },

];

console.log(personas);
console.log(personas[1]);
console.log(personas[2]["mascota"]);
console.log("O es lo mismo que:");
console.log(personas[2].mascota);
console.log(personas.length - 1);
personas.forEach((e)=>console.log(e.nombre))

var numeros = [1,1,2,3,4,5,6,8,5];
