var bg
var player , playerImg
var bullet , bulletImg , bulletGroup
var ammo = 15 , life = 3
var heart1 ,heart2 ,heart3 , heartImg

function preload(){
  bg = loadImage("assets/background.jpg")
  playerImg = loadImage("assets/Player Sprite.png")
  bulletImg = loadImage("assets/Bullet.png")

  heartImg = loadImage("assets/heart.webp")

}

function setup() {
  createCanvas(windowWidth-50,windowHeight-50);

  
  player = createSprite(width-500,height/2)
  player.addImage(playerImg)
  player.scale = 0.45

  heart1 = createSprite(width/26,height/15)
  heart1.addImage(heartImg)
  heart1.scale = 0.1

  heart2 = createSprite(width/10,height/15)
  heart2.addImage(heartImg)
  heart2.scale = 0.1

  heart3 = createSprite(width/6.1,height/15)
  heart3.addImage(heartImg)
  heart3.scale = 0.1

  bulletGroup = createGroup();  

  scoreboard= createElement("h1");
}

function draw() {
  background(bg);  

  scoreboard.html("Bullets Left: "+ammo)
  scoreboard.style('color:red'); 
  scoreboard.position(width-250,height-850)

  if(keyDown("space") && ammo>0){
    shootBullet();
  }

  if (keyDown(UP_ARROW)) {
    player.y += -5
  }

  if (keyDown(DOWN_ARROW)) {
    player.y += 5
  }

  if (keyDown(RIGHT_ARROW)) {
    player.x += 5
  }

  if (keyDown(LEFT_ARROW)) {
    player.x += -5
  }


  if (life===3) {
    heart1.hide()
  }

  drawSprites();
}


function shootBullet(){
  ammo = ammo-1
  bullet= createSprite(player.x-60, player.y, 50,20)
  bullet.y= player.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bullet.velocityX= -7
  bulletGroup.add(bullet)
}

