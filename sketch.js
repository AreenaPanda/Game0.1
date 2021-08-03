var canvas, backgroundImage;

//var gameState = 0;
//var playerCount;
// allPlayers;
//var score = 0;

//var database;

//var form, player, game;

//var players, iceMan1, iceMan2, iceMan3, iceMan4, iceMan5;
//var fireMan, fireball;
//var iceMenscore =0;

var fireMan, iceMan;
var standingFireMan_img, walkingFireMan_ani;
// leftWalkFireMan_img; 
var standingIceMan_img, walkingIceMan_ani;
// leftWalkIceMan_img;
var fireball;
var fireball_ani;
var iceball;
var iceball_ani;

var fireManScore=0;
var iceManScore=0;


var backgroundImage;
var bg;
var edges;

/*var fireballGroup = new Group();
var iceballGroup = new Group();*/

function preload(){
  //Add Images!!

  //FireMan Img
  standingFireMan_img = loadImage("standingFireMan.png");
  walkingFireMan_ani = loadAnimation("leftWalkFireMan.png","rightWalkFireMan.png");
  //rightWalkFireMan_img = loadImage("rightWalkFireMan.png");

  // IceMan Img
  standingIceMan_img = loadImage("standingIceMan.png");
  walkingIceMan_ani = loadAnimation("leftWalkIceMan.png","rightWalkIceMan.png");
  //leftWalkIceMan_img = loadImage("rightWalkIceMan.png");

  bg = loadImage("lava1.jpg");

  fireball_ani = loadAnimation("fireBall1.png", "fireBall2.png");
  

  iceball_ani = loadAnimation("iceBall1.png","iceBall2.png");


}

function setup() {
 canvas = createCanvas(1500,700);
 backgroundImage = createSprite(750,350,1500,700);
 backgroundImage.addImage(bg);

  edges = createEdgeSprites();

 // Creating Players
 fireMan = createSprite(70,325,50,100);
 fireMan.addImage(standingFireMan_img);
 fireMan.scale = 2;

 iceMan = createSprite(1430,325,50,100);
 iceMan.addImage(standingIceMan_img);
 iceMan.scale = 2;

 /*fireball = createSprite(375,20,30,30);
 fireball.addAnimation("playing",fireball_ani);
 fireball.velocityY=10

 iceball = createSprite(1125,670,30,30);
 iceball.addAnimation("playing",iceball_ani);
 iceball.velocityY=-10*/
}

function draw() {
  background("yellow");

  
   
 //to move fireMan
if (keyDown("t")){
  fireMan.y = fireMan.y-5;
  fireMan.addAnimation("playing", walkingFireMan_ani);
  } 
if (keyDown("g")){
  fireMan.y = fireMan.y+5;
 // fireMan.addAnimation("playing", walkingFireMan_ani);
}

//to move iceMan
if (keyDown("up")){
  iceMan.y = iceMan.y-10;
  } 
if (keyDown("down")){
  iceMan.y = iceMan.y+10;
}

//shooting ice
if(keyDown("left")){
  createIceball();
}

//shooting fire
if(keyDown("h")){
  createFireball();
}

/*if(.isTouching(iceMan)){
  
  fireManScore = fireManScore+1 ; 
  
 }*/

  drawSprites();
  
  textSize(25);
  text(mouseX + ',' + mouseY, 20, 40);
  
  //display score
  text(fireManScore,700,20);
  text(iceManScore, 790,20);
  
  //draw line in b/w 
  for(var i = 0; i < 1500; i++) {
    line(750,i,750,i+10);

   
 }
}

function createFireball(){
  var Fb = createSprite(70,325,50,100);
  Fb.addAnimation("playing",fireball_ani);
  Fb.velocityX=10
  Fb.y=fireMan.y;
  }

function createIceball(){
  var Ib = createSprite(1430,325,50,100);
  Ib.addAnimation("playing",iceball_ani);
  Ib.velocityX=-10
  Ib.y=iceMan.y;
}


