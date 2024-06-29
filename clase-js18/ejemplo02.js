function getNameDias(mes) {

    // NaN > not a number
    // si no es un numero da falso > en un futuro diria "Mes Invalido"

    if (Number.isNaN(mes)) return false;

    // si es menor a 1 y mayo a 12 > mes invalido
    if (mes < 1 || mes > 12) return false;

    mes--; // ej: 12 ------- 12-1 posic 11 (dicienbre)


    const data = [
        {
            nombre: "Enero", // pos 0
            dias: 31
        },

        {
            nombre: "Febrero", // pos 1
            dias: 29
        },

        {
            nombre: "Marzo", // pos 2
            dias: 31
        },

        {
            nombre: "Abril",
            dias: 30
        },

        {
            nombre: "Mayo",
            dias: 31
        },

        {
            nombre: "Junio",
            dias: 30
        },

        {
            nombre: "Julio",
            dias: 31
        },

        {
            nombre: "Agosto",
            dias: 31
        },

        {
            nombre: "Septiembre",
            dias: 30
        },

        {
            nombre: "Octubre",
            dias: 31
        },

        {
            nombre: "Nobiembre",
            dias: 30
        },

        {
            nombre: "Diciembre", // pos 11
            dias: 31
        }

    ];

    return data[mes];

}

const numMes = parseInt(prompt('ingrese el mes del año en números', ''));

const resultado = getNameDias(numMes);

if (resultado) {
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias} días.`)
} else {
    alert('Mes Inválido')
}