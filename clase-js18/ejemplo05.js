//let now = new Date();
//alert(now) // se muestra en pantalla la fecha y la hora actual

//var dia = new Date();
//var hours = dia.getHours();

//console.log(hours);

const nombre = prompt('Escribir tu nombre', '');

const today = new Date();

const hrs = today.getHours();

if (hrs >= 6 && hrs < 12) {
    document.write('Buenos dias ' + nombre + '!!')
    console.log(`Buenos días ${nombre} !!`)
} else if (hrs >= 12 && hrs <= 19) {
    document.write('Buenas tardes ' + nombre + '!!')
    console.log(`Buenas tardes ${nombre} !!`)
} else {
    document.write('Buenas noches ' + nombre + '!!')
    console.log(`Buenas noches ${nombre} !!`)
}