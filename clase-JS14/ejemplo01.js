const nombre = prompt('Ingrese su nomre')
const nota = parseInt(prompt('Ingrese su nota', ''))

console.log(nombre);
console.log(nota);

if(Number.isNaN(nota)){
    document.write(`La nota ingresada no es válida`)
} else if(nota >=4){
    document.write(`${nombre} estas aprobada/o con un ${nota}`);
} else{
    document.write(`$(nombre) estas desaprobada/o con un $(nota)`)
}