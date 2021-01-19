//step1: create a class/design
//step2: define properties and functions inside the class
//step3: create a new object
//step4: saving the object in computer memory
//step5: changing properties if you want to
//step6: calling the function

const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var myengine, myworld;
var box1,box2,box3;
var ground1,ground2;

function setup(){
    var canvas = createCanvas(400,400);     
    myengine = Engine.create(); //.world
    myworld = myengine.world;

    box1 = new BOX(100,50,60,70);
    box2 = new BOX(200,150,80,90);
    box3 = new BOX(300,20,30,40);
    ground1 = new GROUND(200,390);  
    ground2 = new GROUND(200,10);  
}

function draw(){
    background("cyan");
    Engine.update(myengine);

    box1.display();
    box2.display();
    box3.display();
    
    ground1.muski();
    ground2.muski();
}
