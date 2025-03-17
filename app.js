// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
    let campoNombre = document.getElementById('amigo');
    if (campoNombre.value.trim() === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        nombres.push(campoNombre.value.trim());
        console.log(nombres);
    }
    return;
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for(let i = 0; i < nombres.length; i++) {
        let item = document.createElement('li');
        item.textContent = nombres[i];
        listaAmigos.appendChild(item);
    }
    return;
}