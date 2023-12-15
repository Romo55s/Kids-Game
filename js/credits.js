var myFont = new FontFace('myFont', 'url(../recursos/LetraBosque.ttf)');

myFont.load().then(function (font) {
    // with canvas, if this is ommited won't work
    document.fonts.add(font);
    console.log('Font loaded');
});

document.getElementById("regresar").addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "../principal.html"
});

function iniciar(){
   
      const canvas = document.getElementById("creditos");
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "chocolate";
      ctx.clearRect(40, 40, 1270, 620);
      ctx.font = 'bold 40px myFont';
      ctx.textAlign = 'center';
      ctx.fillText("PROGRAMMING AND DESIGN",750,60);
      ctx.font = '30px myFont';
      ctx.fillStyle = "chocolate";
      ctx.textAlign = 'center';
      ctx.fillText("Salvador Gaytan Ponce",750,100);
      ctx.fillText("Luis Humberto Navarrete Balandran",750,150);
      ctx.fillText("Michelle Ruvalcaba Reyes",750,200);
      ctx.fillText("Jose Antonio Jimenez Romo",750,250);
      ctx.fillStyle = "chocolate";
      ctx.font = 'bold 40px myFont';
      ctx.textAlign = 'center';
      ctx.fillText("Tecnologias Web",750,300);
      ctx.font = 'bold 40px myFont';
      ctx.textAlign = 'center';
      ctx.fillText("Universidad Autonoma de Aguascalientes",750,350);
      ctx.font = 'bold 40px myFont';
      ctx.textAlign = 'center';
      ctx.fillText("Semestre 6",750,400);
      ctx.font = 'bold 40px myFont';
      ctx.textAlign = 'center';
      ctx.fillText("Aguascalientes",750,450);
      ctx.font = '30px myFont';
      ctx.textAlign = 'center';
      ctx.fillText("4/Marzo/2023",750,600);
      

      


}











window.addEventListener('load',iniciar,false);
