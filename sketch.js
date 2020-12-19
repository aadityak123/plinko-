const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine;
var world;
var ground1;
var particle = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,795,480,10);

  for(var k = 0; k <=width ;k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <=width; j=j+50){
    plinko.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175));
  }

  for(var j = 40; j <=width; j=j+50){
    plinko.push(new Plinko(j,275));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,375));
  }
  

  Engine.run(engine)
}



function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount%60===0){
particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for( var j = 0; j < particle.length; j++){
    particle[j].display();
  }

  for( var j = 0; j < divisions.length; j++){
    divisions[j].display();
  }

  for( var j = 0; j < plinko.length; j++){
    plinko[j].display();
  }



  ground1.display()


}