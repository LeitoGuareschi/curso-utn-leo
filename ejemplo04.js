const frutas =['manzanas', 'bananas', 'palta', 'pera'];


console.log(frutas);
// document.write(frutas);
console.log(frutas[1])

/*dobjetivo es que imprima -- tenemos manzana-- tenemos bannas ...*/


for(let i = 0; i< frutas.length; i++){
    console.log('Tenemos ' + frutas[i]);
    document.write('Tenemos ' + frutas[i] + "<br/>")
}