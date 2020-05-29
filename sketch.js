const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bob,rope,ground;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	roof = new Ground(400,200,500,20);
	bob = new Bob(400,400,50);
	rope = new Rope({x: 400,y: 200}, bob.body);

	bob2 = new Bob(400,600,50);
	rope2 = new Rope({x: 400,y: 400}, bob2.body);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob.display();
  bob2.display();
  rope.display();
  rope2.display();
  
  textSize(20)
  text("This Project is a New Verion of a Newton's Cradle",20,30);
}

function mouseDragged(){
	Matter.Body.setPosition(bob.body,{x: mouseX,y: mouseY});
	Matter.Body.setPosition(bob2.body,{x: mouseX,y: mouseY}); 
}
function keyPressed(){
	if(keyCode=ENTER){
		mouseConstraint.bob;
		mouseConstraint.bob2;
	}
}



