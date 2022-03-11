
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall1;
var wall2;
var paperBall;
var button1;
var left_wall;
var right_wall;
var top_wall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;

  button1 = createImg('right.png');
  button1.position(100,600,);
  button1.size(50, 50);
  button1.mouseClicked(Hforce);

  button2 = createImg('up.png');
  button2.position(700,600);
  button2.size(50, 50);
  button2.mouseClicked(Vforce);

	//options
	let static_object_options = {
		isStatic: true
	}
	let ball_object_options = {
        restitution: 0.15,
		frictionAir : 0.01
	}
	//Create the Bodies Here.
    ground = Bodies.rectangle(400,690,800,20,static_object_options);
	World.add(world,ground);

	wall1 = Bodies.rectangle(600,630,20,100,static_object_options);
	World.add(world,wall1);

	left_wall = Bodies.rectangle(10,350,20,700,static_object_options);
	World.add(world,left_wall);
	
	right_wall = Bodies.rectangle(790,350,20,700,static_object_options);
	World.add(world,right_wall);

	top_wall = Bodies.rectangle(400,10,800,20,static_object_options);
	World.add(world,top_wall);

	wall2 = Bodies.rectangle(750,630,20,100,static_object_options);
	World.add(world,wall2);

	paperBall = Bodies.circle(400,400,30,ball_object_options);
    World.add(world,paperBall);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  fill("red"); 
  rect(ground.position.x,ground.position.y,800,20);
  fill("green"); 
  rect(wall1.position.x,wall1.position.y,20,100);
  rect(wall2.position.x,wall2.position.y,20,100);
  fill("red"); 
  rect(left_wall.position.x,left_wall.position.y,20,700);
  rect(right_wall.position.x,right_wall.position.y,20,700);
  rect(top_wall.position.x,top_wall.position.y,800,20);
  fill("white");  
  ellipse(paperBall.position.x,paperBall.position.y,50); 
}




function Hforce() {
	Matter.Body.applyForce(paperBall, {
	  x:0,
	  y:0
	}
	,{
	  x:0.05,
	  y:0
	}
	);
  }
  
  function Vforce() {
	Matter.Body.applyForce(paperBall, {
	  x:0,
	  y:0
	}
	,{
	  x:0,
	  y:-0.05
	}
	);
  }