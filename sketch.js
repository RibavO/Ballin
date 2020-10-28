// HELP I REALLY NEED HELP, ALMOST NONE OF MY SPRITES ARE NOT APPEARING



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinSide1 = new Dustbin(700, 590, 20, 50);
	dustbinSide2 = new Dustbin(600, 590, 20, 50);
	dustbinBottom = new Dustbin(650, 620, 120, 20);
	ground1 = new Ground(400, 640, 800, 20);
	paper1 = new Paper(200, 550, 10);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground1.display();    
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinBottom.display();
  paper1.display();
}

/*function boxThing()
{
	fill("lime");
	rect(700, 590, 20, 50);
	rect(600, 590, 20, 50);
	rect(650, 620, 120, 20);
}
*/

function keyPressed()
{
    if (keyCode == UP_ARROW)
    {
        Matter.Body.applyForce(paper1.body, paper1.body.position, {x:9, y:-20});
    }
}

