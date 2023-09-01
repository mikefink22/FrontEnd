
var persona = {
    apellido: "Flores",
    nombre: "Miguel",
    dni: 55687153,
    nacimiento: new Date("5/5/1995"),
    mascotas : [{
        apodo: "Luna",
        numeroId: 1,
        nacimiento: new Date("06/07/2023"),
    },
{apodo: "Anastasio",
numeroId: 2,
nacimiento: new Date("5/12/2018"),

}
]
};

console.log(persona.mascotas);
console.log(persona.mascotas[1].apodo);