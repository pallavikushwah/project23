var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1=createSprite(width/2,height-45,200,20);
	box1.shapeColor="red";
   
	box2=createSprite(100,height-80,20,100);
	box2.x=box1.x+90;
	box2.shapeColor="red";
	
	box3=createSprite(100,height-80,20,100);
	box3.x=box1.x- 90;
	box3.shapeColor="red";

	
	ground=createSprite(width/2, height-30, width,10);
	ground.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,friction:2000000,density: 10,isStatic:true});
	World.add(world, packageBody);
 
	box1 = Bodies.rectangle(width/2,height-60,200,20, {isStatic:true} );
 	World.add(world, box1);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



