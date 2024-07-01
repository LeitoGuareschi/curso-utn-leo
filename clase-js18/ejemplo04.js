let a,b, resto;

[a,b] = [10,20]

console.log(a); // que va a imprimir o mostrar? 10
console.log(b); // 20

[a,b, ...resto] = [10,20,30,40,50]

console.log(resto); // que va a imprimir? 30,40,50

const vovales = ['a', 'e', 'i'];

console.log(vovales); // imprime a,e,i

const vovalesCompletas = [...vovales , 'o', 'u'];

console.log(vovalesCompletas); // imprime .. // a e i o u