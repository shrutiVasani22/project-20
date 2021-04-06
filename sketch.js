var bgImage;
var catImage1, mouseImage1,catImage2,mouseImage2,mouseImage3;
var mouse , cat ,bg



function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
    catImage1=loadAnimation("images/cat1.png");
    mouseImage1=loadAnimation("images/mouse2.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImage2=loadAnimation("images/mouse3.png");
    mouseImage3=loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     

   

   cat=createSprite(900,700,50,50);
    cat.addAnimation("sittingcat",catImage1);
    cat.scale=0.1;

    mouse = createSprite(100,670,50,50);
   mouse.addAnimation("standing mouse",mouseImage1);
   mouse.scale=0.15 ;


 
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
     
   
    if (cat.x-mouse.x < (cat.width-mouse.width)/2 ){
     mouse.addAnimation("happyMouse",mouseImage3);
     mouse.changeAnimation("happyMouse");

     cat.velocityX=0

     cat.changeAnimation("sittingcat");
     
    }

    drawSprites();
  }


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
  cat.addAnimation("catRunning",catImage2);
  cat.changeAnimation("catRunning");


  mouse.addAnimation("mouseTeasing",mouseImage2);
  mouse.frameDelay = 25 ;
  mouse.changeAnimation("mouseTeasing");
 
  


  }


}
