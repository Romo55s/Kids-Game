var fondo = new Audio("recursos/fondo.mp3")



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let w,
    h,
    particles,
    particleAmount = 150,
    particleColor = "rgba(255,255,0,.7)";
      

function init(){
  fondo.loop = true;
fondo.volume = 0.4;
fondo.play();
  resizeReset();
  particles = [];
  for(let i=0;i<particleAmount; i++){
    particles.push(new Particle());
  }
  requestAnimationFrame(animationLoop);
}  

function resizeReset(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function animationLoop(){
  ctx.clearRect(0,0,w,h);
  drawScene();
  requestAnimationFrame(animationLoop);
}

function drawScene(){
  for(let i=0;i<particles.length; i++){
    particles[i].update();
    particles[i].draw();
  }
}

function getRandomNumber(min,max){
  return Math.random()*(max-min)+min; 
}

document.addEventListener("DOMContentLoaded", init);

class Particle{
  constructor(){
    this.radius = getRandomNumber(1,8);
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.color=particleColor;
    this.directionAngle = getRandomNumber(1,360);
    this.speed = getRandomNumber(1,2);
    this.vector = {
      x:Math.cos(this.directionAngle)* this.speed,
      y:Math.sin(this.directionAngle)* this.speed
    }
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius, 0, Math.PI*2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update(){
    if(this.x > w || this.x < 0){
      this.vector.x*=-1;
    }
    if(this.y > h || this.y < 0){
      this.vector.y*=-1;
    }
    if(this.x>w) this.x = w;
    if(this.y>h) this.y = h;
    if(this.x<0) this.x = 0;
    if(this.y<0) this.y = 0;
    
    this.x+=this.vector.x;
    this.y+=this.vector.y;
  }
}

function playMusic() {

  fondo.loop = true;
  fondo.volume = 0.4;
  fondo.play();

}

function pauseMusic() {

  fondo.pause();

}



