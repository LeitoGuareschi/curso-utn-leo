const alumnos = [
    {
        nombre: "Leo",
        edad: 3
    },

    {
        nombre: "Gladys",
        edad: 7
    },

    {
        nombre: "Vanina",
        edad: 9
    },

    {
        nombre: "Careli",
        edad: 2
    },

    {
        nombre: "Daniel",
        edad: 4
    },

    {
        nombre: "Timoteo",
        edad: 12
    }

]


console.log(alumnos)

const chicos = alumnos.filter(alumno => alumno.edad >= 4);

console.log(chicos)

for (let i = 0; i < chicos.length; i++) {
    document.write(`<li> Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}</li>`)
}