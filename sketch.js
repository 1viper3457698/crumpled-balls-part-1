
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Ground = new ground(400,680,800,20);
  Paper = new paper (100,600,10);
  leftSide = new trashcan (550,620,20,100);
  bottom = new trashcan (610,660,100,20);
  rightSide = new trashcan (670,620, 20,100 );
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  Paper.display();

  Ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW ) {
	Matter.Body.applyforce(paper.body.position,paper.body.position,{x:85,y:-85});
}

}

