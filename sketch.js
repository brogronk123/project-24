
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100,50);
	ground = new Ground();
	dustbin1 = new Dustbin(591,588,20,100);
	dustbin2 = new Dustbin(650,628,100,20);
	dustbin3 = new Dustbin(700,588,20,100);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}

