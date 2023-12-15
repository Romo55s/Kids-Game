
// Recuperamos las variables de la pagina anterior
var players=localStorage.getItem("Players");
players=JSON.parse(players);

if(players==null) players=[];


players.sort(function(a,b){
    return a.bestTime - b.bestTime;
});
function lista(){

    document.getElementById("listado").innerHTML="";

    var tabla = "<tr><th>Jugador</th><th>Puntos</th><th>Mejor tiempo</th></tr>";

    for(var i in players){

        var x = players[i];

        tabla += "<tr><td>"+x.alias+"</td>";
        tabla += "<td>"+x.score+"</td>";
        tabla += "<td>"+x.bestTime+"</td>";
        tabla += "</tr>";

    }
    document.getElementById("listado").innerHTML=tabla;
}

window.onload = function(){
    lista();
}

document.getElementById("salir").addEventListener('click' , function(e){
    e.preventDefault();
    window.location.href = "../principal.html";
});
