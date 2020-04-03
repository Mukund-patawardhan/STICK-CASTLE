const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1;

var sticka;
var stickb;
var stickc;
var stickd;
var sticke;
var stickf;
var stickg;
var stickh;
var sticki;
var stickj;
var stickk;
var stickl;
var stickm;
var stickn;
var sticko;
var stickp;
var stickq;

var bricka;
var brickb;
var brickc;
var brickd;
var bricke;
var brickf;
var brickg;
var brickh;
var bricki;
var brickj;
var brickk;
var brickl;
var brickm;
var brickn;
var bricko;
var brickp;
var brickq;
var brickr;
var bricks;
var brickt;
var bricku;
var brickv;
var brickw;
var brickx;
var bricky;
var brickz;
var brickaa;
var brickab;
var brickac;

function setup() {
  createCanvas(900,400);
  engine=Engine.create();
  world=engine.world


  fill("white");
  ground1=new Ground(450,400,900,10);
  fill("grey");

  

  sticka=new Sticks (650,300);
  stickb=new Sticks (650,250);
  stickc=new Sticks (650,120);
  stickd=new Sticks (150,250);
  stickp=new Sticks(150,300);
  stickq=new Sticks(150,120);

  bricka=new Bricks(650,160,100,50);
  brickb=new Bricks(650,280,100,50);
  brickc=new Bricks(650,350,100,50);
  brickd=new Bricks(150,350,100,50);
  bricke=new Bricks(150,280,100,50);
  brickf=new Bricks(150,160,100,50);

  
  
  brickz=new Bricks(-365,100,10,70);
  brickaa=new Bricks(-400,390,150,70);
  brickab=new Bricks(-400,300,110,10);
  sticke=new Sticks (-450,350);
  stickf=new Sticks (-350,350);
  stickg=new Sticks (-430,280);
  stickh=new Sticks (-370,280);

  

  brickh=new Bricks(250,100,80,30);
  bricki=new Bricks(250,90,40,30);
  brickj=new Bricks(250,80,10,30);

  brickk=new Bricks(550,100,80,30);
  brickl=new Bricks(550,90,40,30);
  brickac=new Bricks(550,80,10,30);

  
  
  

  brickm=new Bricks(-260,-150,100,50);

  brickn=new Bricks(400,390,150,93);
  bricko=new Bricks(400,350,100,93);
  brickp=new Bricks(400,200,40,93);
  brickq=new Bricks(460,395,20,279);
  brickr=new Bricks(340,395,20,279);

  bricks=new Bricks(750,190,30,70);
  brickt=new Bricks(750,340,30,70);
  bricku=new Bricks(750,70,30,70);
  sticki=new Sticks(750,270);
  stickj=new Sticks(750,125);
  stickk=new Sticks(750,5);

  brickv=new Bricks(50,190,30,70);
  brickw=new Bricks(50,340,30,70);
  brickx=new Bricks(50,70,30,70);
  sticko=new Sticks(50,270);
  stickm=new Sticks(50,125);
  stickn=new Sticks(50,5);

  bricky=new Bricks(-400,-300,30,70);
  stickl=new Sticks(400,100);

  brickg=new Ground(400,120,600,17);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  fill(255,25,55);
triangle(400,90,400,50,470,65);
  if(frameCount>25){
    triangle(50,90,50,50,130,65);
    triangle(750,90,750,50,830,65);
  }

  ground1.display();

  sticka.display();
  stickb.display();
  stickc.display();
  stickd.display();
  sticke.display();
  stickf.display();
  stickg.display();
  stickh.display();
  sticki.display();
  stickj.display();
  stickk.display();
  stickl.display();
  stickm.display();
  stickn.display();
  sticko.display();
  stickp.display();
  stickq.display();

  bricka.display();
  brickb.display();
  brickc.display();
  brickd.display();
  bricke.display();
  brickf.display();
  brickg.display();
  brickh.display();
  bricki.display();
  brickj.display();
  brickk.display();
  brickl.display();
  brickm.display();
  brickn.display();
  bricko.display();
  brickp.display();
  brickq.display();
  brickr.display();
  bricks.display();
  brickt.display();
  bricku.display();
  brickv.display();
  brickw.display();
  brickx.display();
  bricky.display();
  brickz.display();
  brickaa.display();
  brickab.display();
  brickac.display();

  console.log(brickj.x);
  
  drawSprites();
}