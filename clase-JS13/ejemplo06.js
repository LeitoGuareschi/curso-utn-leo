const mes = parseInt(prompt('Ingrese mes del año' ))

if (mes == 1 || mes == 2 || mes == 3) {
    console.lof('corrsponde al primer trimestre del año')
} else if (mes == 4 || mes == 5 || mes == 6) {
    console.log('corresponde al segundo trimestre del año')
} else if (mes == 7 || mes == 8 || mes == 9) {
    console.log('correponde al trecer trimestre del año')
} else if (mes == 10 || mes == 11 || mes == 12) {
    console.log('corresponde la cuarto trimestre del año')
}