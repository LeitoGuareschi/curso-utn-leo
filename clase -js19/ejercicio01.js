const nombre = prompt('Ingrese su nombre','');
const edad = parseInt(prompt('Ingrese su edad' , ''));

if(Number.isNaN(edad)){
    console.log('Debes ingresar un número')
} else if (edad > 18) {
    console.log(`${nombre}n que tienes ${edad} años , puedes conducir`)
} else{
    console.log(`${nombre}, al tener ${edad} años No puedes conducir`)
}