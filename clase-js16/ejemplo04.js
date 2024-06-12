const parrafo = document.getElementById('parrafo');
const menos = document.getElementById('menos');
const mas = document.getElementById('mas');


menos.addEventListener('click', function(){
    parrafo.style.fontSize = '10PX';
})

mas.addEventListener('click', function(){
    parrafo.style.fontSize = '30PX';
})