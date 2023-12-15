
// Recuperamos el usuario actual
const alias = localStorage.getItem("currentPlayer");

// Obtener el arreglo de jugadores almacenado en el LocalStorage
let players = JSON.parse(localStorage.getItem("Players")) || [];

// Buscar al jugador actual en el arreglo
const playerIndex = players.findIndex(player => player.alias === alias);

if (playerIndex !== -1) {
  var p = players[playerIndex];

  // Variables DOM
  const congratsScreen = document.getElementById("congrats-screen");
  const congratsScore = document.getElementById("congrats-score");
  const congratsTime = document.getElementById("congrats-time");
  const restartButton = document.getElementById("restart-button");
  const returnbtn = document.getElementById("Return-init");
  const alias = document.getElementById("alias");

  congratsScore.innerHTML = p.score;
  congratsTime.innerHTML = p.bestTime;
  alias.innerHTML = p.alias;

  // Función para cerrar el juego
  function closeGame() {
    if (window.confirm("¿Está seguro que desea salir del juego?")) {
      window.close();
    }
  }
  //Evento para volver al inicio
  returnbtn.addEventListener("click",function(){
      window.location.href = "../principal.html";
  });

  // Evento para reiniciar el juego
  restartButton.addEventListener("click", function () {
    // Se reinician las variables globales y se muestra la pantalla de inicio
    score = 0;
    time = 0;
    window.location.href = "../html/game.html";
  });
}
