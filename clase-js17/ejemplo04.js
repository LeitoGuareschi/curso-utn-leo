const frutas = ['palta', 'sandia', 'bananas', 'manzana'];

//console.log(frutas)
console.log(frutas.sort())

const frutasordenadas = frutas.sort();

console.log(frutasordenadas) // de la a, a la z

const frutasordenadasreves = frutas.sort().reverse();

console.log(frutasordenadasreves); // z a la a



const numeros = [56,34,78,3,23,5];

const numerosordenados = numeros.sort(function(a,b){
    return a-b
})

console.log(numerosordenados) // de menor a mayor

const numerosordenadosreves = numeros.sort(function(a,b){
    return b-a
})

console.log(numerosordenadosreves); // de mayor a menor