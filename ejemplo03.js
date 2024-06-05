function allParrafo(){

    const all = document.getElementsByTagName('p');
    console.log(all)

    const num = all.length; //7

    console.log(num)

    alert(`Hay ${num} elementos p dentro de allParrafo`)

}

function caja1P() {

    const caja1 = document.getElementById('caja1');
    console.log(caja1) // caja con el borde azul
    
    const caja1p = caja1.getElementsByTagName('p');
    console.log(caja1p) // las p de la caja borde azul

    const num = caja1p.length;
    console.log(num); //5

    alert(`Hay ${num} elementos p dentro de la caja 1`)


}

function caja2P() {

    const caja2 = document.getElementById('caja2');
    console.log(caja2) // caja con el borde rojo
    
    const caja2p = caja2.getElementsByTagName('p');
    console.log(caja2P) // las p de la caja borde rojo

    const num = caja2p.length;
    console.log(num); //2

    alert(`Hay ${num} elementos p dentro de la caja 2`)


}

//caja2P();