const nombre = prompt('Ingrese su nombre', ''); // Leo

const metros = parseInt(prompt('Ingrese una distancia', '')); // 1500

console.log(nombre, metros)

if (metros > 0 && metros <= 1000) {
    // alert(`${nombre} por la cantidad de metros: ${metros} te recomiendo ir a pie`);
    console.log(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir a pie `);
    // document.write(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir a pie `);
} else if (metros > 1000 && metros <= 10000) {
    console.log(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir en bici `);

} else if (metros > 10000 && metros <= 30000) {
    console.log(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir en colectivo `);
} else if (metros > 30000 && metros <= 100000) {
    console.log(`${nombre}, por la cantidad de metros: ${metros} te recomiendo ir en auto `);
} else if (metros > 100000) {
    console.log(`${nombre}, por la cantidad de metros: ${metros} te recominedo ir en avión`);
}