const items = document.getElementsByClassName('item');

function cambiarVisibilidad() {

    const item = items[3];

    if (item.style.visibility == '') {
        item.style.visibility = 'hidden'
    } else {
        item.style.visibility = ''
    }

}


setInterval(cambiarVisibilidad, 200);