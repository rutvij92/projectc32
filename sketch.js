
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,ground2;
var pentagon;
var backgroundImg,bg;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18;
var box19,box20,box21,box22;
var box23,box24,box25;
var box26,box27;
var box28;


var boX1,boX2,boX3,boX4,boX5,boX6,boX7;
var boX8,boX9,boX10,boX11,boX12,boX13;
var boX14,boX15,boX16,boX17,boX18;
var boX19,boX20,boX21,boX22;
var boX23,boX24,boX25;
var boX26,boX27;
var boX28;

var score=0;

var rope;
function preload()
{
	dateTime();
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground1 = new Ground(600,450,250,20);
	ground2 = new Ground(1000,350,250,20);
	box1=new Box1(510,430,35,50);
	box2=new Box2(540,430,35,50);
	box3=new Box1(570,430,35,50);
	box4=new Box2(600,430,35,50);
	box5=new Box1(630,430,35,50);
	box6=new Box2(660,430,35,50);
	box7=new Box1(690,430,35,50);
	box8=new Box2(520,390,35,50);
	box9=new Box1(550,390,35,50);
	box10=new Box2(580,390,35,50);
	box11=new Box1(610,390,35,50);
	box12=new Box2(640,390,35,50);
	box13=new Box1(670,390,35,50);
	box14=new Box2(530,350,35,50);
	box15=new Box1(560,350,35,50);
	box16=new Box2(590,350,35,50);
	box17=new Box1(620,350,35,50);
	box18=new Box2(650,350,35,50);
	box19=new Box1(540,310,35,50);
	box20=new Box2(570,310,35,50);
	box21=new Box1(600,310,35,50);
	box22=new Box2(630,310,35,50);
	box23=new Box2(550,270,35,50);
	box24=new Box1(580,270,35,50);
	box25=new Box2(610,270,35,50);
	box26=new Box1(560,230,35,50);
	box27=new Box2(590,230,35,50);
	box28=new Box(570,190,35,50);



	boX1=new Box1(910,330,35,50);
	boX2=new Box2(940,330,35,50);
	boX3=new Box1(970,330,35,50);
	boX4=new Box2(1000,330,35,50);
	boX5=new Box1(1030,330,35,50);
	boX6=new Box2(1060,330,35,50);
	boX7=new Box1(1090,330,35,50);
	boX8=new Box2(920,290,35,50);
	boX9=new Box1(950,290,35,50);
	boX10=new Box2(980,290,35,50);
	boX11=new Box1(1010,290,35,50);
	boX12=new Box2(1040,290,35,50);
	boX13=new Box1(1070,290,35,50);
	boX14=new Box2(930,250,35,50);
	boX15=new Box1(960,250,35,50);
	boX16=new Box2(990,250,35,50);
	boX17=new Box1(1020,250,35,50);
	boX18=new Box2(1050,250,35,50);
	boX19=new Box1(940,210,35,50);
	boX20=new Box2(970,210,35,50);
	boX21=new Box1(1000,210,35,50);
	boX22=new Box2(1030,210,35,50);
	boX23=new Box2(950,170,35,50);
	boX24=new Box1(980,170,35,50);
	boX25=new Box2(1010,170,35,50);
	boX26=new Box1(960,130,35,50);
	boX27=new Box2(990,130,35,50);
	boX28=new Box(970,90,35,50);

pentagon = new Pentagon(200,450,40,40);

rope = new Rope(pentagon.body,{x:200, y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg){
    background(backgroundImg);
    }
  
  drawSprites();
 ground1.display();
ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();



boX1.display();
boX2.display();
boX3.display();
boX4.display();
boX5.display();
boX6.display();
boX7.display();
boX8.display();
boX9.display();
boX10.display();
boX11.display();
boX12.display();
boX13.display();
boX14.display();
boX15.display();
boX16.display();
boX17.display();
boX18.display();
boX19.display();
boX20.display();
boX21.display();
boX22.display();
boX23.display();
boX24.display();
boX25.display();
boX26.display();
boX27.display();
boX28.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();



boX1.score();
boX2.score();
boX3.score();
boX4.score();
boX5.score();
boX6.score();
boX7.score();
boX8.score();
boX9.score();
boX10.score();
boX11.score();
boX12.score();
boX13.score();
boX14.score();
boX15.score();
boX16.score();
boX17.score();
boX18.score();
boX19.score();
boX20.score();
boX21.score();
boX22.score();
boX23.score();
boX24.score();
boX25.score();
boX26.score();
boX27.score();
boX28.score();





box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();
box21.score();
box22.score();
box23.score();
box24.score();
box25.score();
box26.score();
box27.score();
box28.score();


pentagon.display();
rope.display();

textSize(30);
fill("white");
text("score:"+score,900,50)
}

 function mouseDragged(){
     Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
 }


 function mouseReleased(){
     rope.fly();
 }


 function keyPressed(){
    if (keyCode===32){
        rope.attach(pentagon.body);

    }

}

async function dateTime(){
    var responce=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responceJSON=await responce.json();
    var datetime=responceJSON.datetime;
    var hour=datetime.slice(11,13)
    if (hour>=06&&hour<=18){
        bg="orange";
    }
    else{
        bg="black";
    }
    backgroundImg=bg;
 }