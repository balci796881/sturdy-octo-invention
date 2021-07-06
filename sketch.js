//zombie trying to survive and evolve, must defeat rock monster.
//playing:zombie,NPC:rock monster.score based on amount of apples collected.
// as score increases, zombie evolves
var zombie;
var apple;
var rock;
var knight,caveman,soldier,apples,monster;
var ground;
var applesgroup,monstergroup;
var gameState = "PLAY";
var enviroment,backgroundimg
var score = 0; 
function preload(){
  caveman = loadImage("zombie.png")
  knight = loadImage("knight.png")
  soldier = loadImage("american.png")
  apples = loadImage("7.jpg")
  monster = loadImage("rock.jpg")
  backgroundimg = loadImage("background.jpg")
}

function setup() {
  createCanvas(600,325);
  enviroment = createSprite(5,140,10,10);
  enviroment.addImage(backgroundimg);
  enviroment.scale = 1.6;
  zombie = createSprite(80,260,160,10)
  zombie.addImage(caveman)
  zombie.scale = 0.2;
  zombie.setCollider("rectangle",10,5,250,300);
  ground = createSprite(137,320,275,50);
  ground.visible = true;
  applesgroup = createGroup()
  monstergroup = createGroup()
}

function draw() {
  background(180,255,255);  
  drawSprites();
  if(gameState === "PLAY"){
    enviroment.velocityX = -9;
    if(enviroment.x<0){
      enviroment.x=enviroment.width/2;
    }
  if(keyDown("SPACE")&&zombie.y>=200){
    zombie.velocityY=-15;
  }
  if (zombie.isTouching(applesgroup)){
    score = score+1;   
  }
  zombie.velocityY =zombie.velocityY+0.8
  spawnapples(); 
}
zombie.collide(ground)
console.log(score)
}


function spawnapples(){
  if(frameCount%60===0){
  apple = createSprite(550,280,50,50);
  apple.y = Math.round(random(150,250))
  apple.addImage(apples)
  apple.scale = 0.25;
  apple.velocityX = -6 ; 
  apple.lifetime = 200;
  zombie.depth = apple.depth;
applesgroup.add(apple);
  }
}