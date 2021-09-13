const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var ground,bgImg,tower,cannon,cannonball;

function preload() {
  bgImg = loadImage("./assets/background.gif")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,580,1200,20);

  tower = new Tower(160,350,160,310);
  
  angleMode(DEGREES)
  angle = 20 ;

  cannon = new Cannon(180,110,130,100,angle);

  cannonball = new CannonBall(cannon.x,cannon.y)
}

function draw() {
  background(189);

  image(bgImg,0,0,1200,600);

  tower.display();

  cannon.display();
  cannonball.display();
 
  Engine.update(engine);
  
}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
      cannonball.shoot();
    }
}
