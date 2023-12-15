/*
    Cliente
*/
// Modal
// Evento que oculta el modal al hacer clic en el botón 'Salir'
const quitButton = document.querySelector('#quit-button');
quitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que se envíe el formulario
    hideModal(); // Ocultar el modal
});

function PlayerSession(){
    var modalLogin = document.querySelector(".modal-login");
    modalLogin.style.display = 'block';
}

/* Obtenemos el modal */
var modal = document.querySelector(".modal-start");

/* Obtenemos el botón de cerrar el modal */
var closeBtn = document.querySelector(".close");
// Función que muestra el modal
function showModal() {
    modal.style.display = 'block';
}

// Función que oculta el modal
function hideModal() {
    modal.style.display = 'none';
}

function RegisterStart() {
    showModal();
}

document.getElementById("start-button").addEventListener('click', function (e) {
    e.preventDefault(); // Evita que se recarge la pagina al enviar el formulario
    var score = 0;
    var bestTime = 0;
    var time = 0;

    const aliasInput = document.getElementById("name").value;
    const player = { alias: aliasInput, time: time, score: score, bestTime: bestTime }; // Creamos un objeto player

    // Si el alias está vacío, se vuelve a solicitar
    if (aliasInput.trim() === "") {
        alert("El alias no puede estar vacío. Intenta de nuevo.");
    } else {
        // Agregamos el player al arreglo
        addPlayer(player);
    }

});

//evento para reedirigir a la tabla
document.getElementById("tabla-score").addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "../html/scores.html";
});

function addPlayer(player) {
    //Obtenemos el arreglo de usuarios almacenado en LocalStorage
    const playerJSON = localStorage.getItem("Players");
    let players = JSON.parse(playerJSON) ?? [];

    if (playerJSON !== null) {
        players = JSON.parse(playerJSON);
    }

    // Validar si el usuario ya existe en el arreglo
    const playerExists = players.find(existingPlayer => existingPlayer.alias === player.alias);

    if (playerExists !== undefined) {
        alert('El usuario ya existe');
        window.location.href = "../principal.html";
        //return;
    } else {
        // Agregar el nuevo usuario al arreglo
        players.push(player);
        const newPlayerJSON = JSON.stringify(players);

        // Actualizamos el LocalStorage
        localStorage.setItem("Players", newPlayerJSON);
        alert("Jugador Agregado");
        hideModal();
    }
}

document.querySelector(".btn-credits").addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "../html/creditos.html";
});

document.querySelector(".records").addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "../html/scores.html";
});

// ------------------------------- Logica Chava ------------------------------ //

function playMusic() {

    fondo.loop = true;
    fondo.volume = 0.4;
    fondo.play();
}

function pauseMusic() {
    fondo.pause();
}
