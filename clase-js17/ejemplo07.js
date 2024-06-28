const datosUsuarios = [
    {
        nombre: "Flavia",
        password: "1234"
    },

    {
        nombre: "Laura",
        password: "5678"
    },

    {
        nombre: "Sandra",
        password: "9123"
    },

    {
        nombre: "Virginia",
        password: "9456"
    },

    {
        nombre: "Clara",
        password: "9678"
    }

]

console.log(datosUsuarios)

const soloPassword = datosUsuarios.map(function(p){
    return p.password
})

console.log(soloPassword)