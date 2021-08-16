const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,300,100,100);
    box2 = new Box(900,300,100,100);
    box3 = new Box(1100,200,100,100);
    box4 = new Box(900,200,100,100);
    box5 = new Box(1000,130,80,80);

    pig1 = new pig(1000,300,70,70);
    pig2 = new pig(1000,200,70,70);

    log1 = new log(1000,250,350,PI);
    log2 = new log(1000,150,350,PI);
    log3 = new log(1100,80,150,45);
    log4 = new log(900,80,150,-45);

    bird1 = new bird(500,100,50,50);




    ground = new Ground(600,480,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();

    ground.display();
}