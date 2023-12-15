document.getElementById("login-button").addEventListener('click', function(e) {
    e.preventDefault();

    const aliasInput = document.getElementById("name-login").value;
    const playerJSON = localStorage.getItem("Players");
    let players = [];

    if(playerJSON !== null){
        players = JSON.parse(playerJSON);
    }

    const playerExists = players.find(existingPlayer => existingPlayer.alias === aliasInput);

    if (playerExists === undefined) {
        alert('El usuario no existe. Por favor, regístrese primero.');
        return;
    }else{
        // Mandamos al jugador actual
        localStorage.setItem("currentPlayer",aliasInput);
        // El usuario existe, lo redirigimos a la página de juego
        window.location.href = "../html/game.html";
    }
});

//evento para reedirigir a la tabla
document.getElementById("tabla-score").addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = "../html/scores.html";
});
