const nombre = prompt('Ingrese su nomre')
const nota = parseInt(prompt('Ingrese su nora', ''))

console.log(nombre);
console.log(nota);

if(Number.isNaN(nota)){
    document.write(`La nota ingresada no es válida`)
} else if(nota >=4){
    document.write(`${nombre} estas aprobada/o con un ${nota}`);

}