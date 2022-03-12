var database
var player1
var game1
var form1
var gameState=0
var playerCount=0
var allplayers
var distance=0

function setup(){
  database=firebase.database();
  createCanvas(windowWidth, windowHeight);
  game1 = new Game()
  game1.getState();
  game1.start();

}

function draw(){
  background("gray");
  if(playerCount===4){
    game1.update(1);
  }
  if(gameState===1){
    clear()
    game1.play();
  }
}

