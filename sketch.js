var canvas;
var music;
var box1,box2,box3,box4;
var circle;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 box1=createSprite(100,590,175,30);
 box2=createSprite(300,590,175,30);
 box3=createSprite(500,590,175,30);
 box4=createSprite(700,590,175,30);
 circle=createSprite(400,300,35,35);

 box1.shapeColor="purple";
 box2.shapeColor="green";
 box3.shapeColor="blue";
 box4.shapeColor="orange";
 circle.shapeColor=rgb(255,255,255);
circle.velocityX=5;
circle.velocityY=8;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    circle.bounceOff(edges);
  //  circle.bounceOff(box1);
  //  circle.bounceOff(box2);
  //  circle.bounceOff(box3);
  //  circle.bounceOff(box4);
    
    if(circle.isTouching(box1)&&circle.bounceOff(box1)){
     circle.shapeColor="purple";
     

    }
    if(circle.isTouching(box2)&&circle.bounceOff(box2)){
        circle.shapeColor="green";
        circle.velocityX=0;
        circle.velocityY=0;
       

       }
 if(circle.isTouching(box3)&&circle.bounceOff(box3)){
        circle.shapeColor="blue";
        music.play();
    }
 if(circle.isTouching(box4)&&circle.bounceOff(box4)){
        circle.shapeColor="orange";
    
    }
drawSprites();


    //add condition to check if box touching surface and make it box
}
