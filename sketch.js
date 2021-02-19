var q,myQues, lazer, lazer2, lazer3;

function setup() {
  createCanvas(400,400);
 wall1 = createSprite(10, 30,700 , 10);
 wall1.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall2 = createSprite(360, 175, 10, 300);
 wall2.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall3 = createSprite(330, 320, 55, 10);
 wall3.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall4 = createSprite(320, 260, 80, 10);
 wall4.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall5 = createSprite(275, 200, 10, 250);
 wall5.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall6 = createSprite(40, 300, 10, 150);
 wall6.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall7 = createSprite(120, 220, 170, 10);
 wall7.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall8 = createSprite(180, 320, 200, 10);
 wall8.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall9 = createSprite(390, 370, 700, 10);
 wall9.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall10 = createSprite(80, 290, 10, 70);
 wall10.shapeColor = rgb(random(0,255),random(0,255),random(0,255))
 wall11 = createSprite(120, 250, 10, 70);
 wall11.shapeColor = rgb(random(0,255),random(0,255),random(0,255))

 wall12 = createSprite(180, 280, 120, 10);
 wall12.shapeColor = rgb(random(0,255),random(0,255),random(0,255))

 wall13 = createSprite(240, 200, 10, 170);
 wall13.shapeColor = rgb(random(0,255),random(0,255),random(0,255))

 wall14 = createSprite(240, 80, 60, 10);
 wall14.shapeColor = rgb(random(0,255),random(0,255),random(0,255))

 wall15 = createSprite(210, 125, 10, 100);
 wall15.shapeColor = rgb(random(0,255),random(0,255),random(0,255))

 wall16 = createSprite(0, 170, 410, 10);
 wall16.shapeColor = rgb(random(0,255),random(0,255),random(0,255))

 chest = createSprite(380, 387, 10, 20)
chest.shapeColor = "blue"
 you = createSprite(10, 10, 10, 10);
you.shapeColor = "violet"
lazer = createSprite(150, 200, 5, 100)
lazer.shapeColor = "green"
lazer2 = createSprite(50, 150, 5, 100)
lazer2.shapeColor = "red"
lazer3 = createSprite(250, 250, 5, 100)
lazer3.shapeColor = "red"
lazer.velocityY = random(10,55);
  lazer2.velocityY = random(20,55);
  lazer3.velocityY = random(25,55);



Book = createSprite(340,290,10,10);
Book.shapeColor = "brown"

myQues = Math.round(random (1,4))
console.log(myQues);
switch(myQues){
  case 1: q= "Are you above the age of 10";
         
          break;
  case 2: q = "Do you like Games";
  
          break;
  case 3: q= "Do you  like to study";
         
          break;
  case 4: q = "Are you human";
  
          break;
  }
}

function draw() {
  background("black");  
 
  edges = createEdgeSprites();
  you.bounceOff(edges);
  lazer.bounceOff(edges);
  lazer2.bounceOff(edges);
  lazer3.bounceOff(edges);
  you.bounceOff(edges);
  you.velocityX = 0
  you.velocityY = 0
  stuff();
  controls();

  

  if (you.collide(chest)){
    textSize(20)
    fill("red")
    text ("you win",150,200)
  }
  if (you.collide(lazer) || you.collide(lazer2) || you.collide(lazer3)){
    you.x = 10
    you.y = 10
  }

 
if(you.isTouching(Book)){
  textSize(20);
  fill("black");
  text(q,100,200);
  
if(keyDown('Y')){
  Book.destroy();
}
else if (keyDown('n')){
  you.x = 10
  you.y = 10
}

}

  drawSprites();
}
  
  function controls() {
    if (keyDown("up")) {
    you.velocityY = -3;
    you.velocityX = 0;
    }
    if (keyDown("down")) {
      you.velocityY = 3;
      you.velocityX = 0;
    }
    if (keyDown("left")) {
    you.velocityX = -3;
    you.velocityY = 0;
    }
    if (keyDown("right")) {
      you.velocityX = 3;
      you.velocityY = 0;
    }
    if (keyDown("space")) {
      you.velocityY = 0;
      you.velocityX = 0;
    }
  }
  function stuff() {
    you.bounceOff(wall1)
    you.bounceOff(wall2)
    you.bounceOff(wall3)
    you.bounceOff(wall4)
    you.bounceOff(wall5)
    you.bounceOff(wall6)
    you.bounceOff(wall7)
    you.bounceOff(wall8)
    you.bounceOff(wall9)
    you.bounceOff(wall10)
    you.bounceOff(wall11)
    you.bounceOff(wall12)
    you.bounceOff(wall13)
    you.bounceOff(wall14)
    you.bounceOff(wall15)
    you.bounceOff(wall16)
  }  
  