
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2, rope3, rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(400,200,195,25);

	bob1 = new Bob(325,500,25);
	bob2 = new Bob(350,500,25);
	bob3 = new Bob(375,500,25);
	bob4 = new Bob(400,500,25);
	bob5 = new Bob(425,500,25);

	rope1 = new Rope(bob1.body,roof1.body,-40*2,0);
	rope2 = new Rope(bob2.body,roof1.body,-20*2,0);
	rope3 = new Rope(bob3.body,roof1.body, 0*2,0);
	rope4 = new Rope(bob4.body,roof1.body, 20*2,0);
	rope5 = new Rope(bob5.body,roof1.body, 40*2,0);


	//Create the Bodies Here.
	var render = Render.create({
		element: document.body,
		engine : engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {

  rectMode(CENTER);
  background(255);
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed() {
	//Matter.Body.setStatic()
	if (keyCode === UP_ARROW) {
	  //Matter.Body.setStatic(bob1,true)
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:65});

	}
}



