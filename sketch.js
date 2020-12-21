var wall, bullet;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1000,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83 );
  bullet = createSprite(50,200,70,10);
  wall = createSprite(800, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}


function draw() {
  background(255,255,255);  

  drawSprites();
  if(wall.x-bullet.x <= wall.width/2+bullet.width/2){
    bullet.velocityX = 0;
    damage =   (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage < 10){
      wall.shapeColor = "green"
    }
    else{
      wall.shapeColor = "red"
    }
  }
}
