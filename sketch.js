var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitPOS ;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/jungle2.jpg");
  player_img = loadImage("images/basket.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(windowWidth-30,windowHeight-30);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
  distance = 0 ;

  yVel = 0;
  xVel = 0 ;

  form = new Form();

  score = player.score ;
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
    if(playerCount === 2 ){
        game.update(1);
    }

    if(gameState === 1){
      game.play();
      form.hide();
    }

    

    // if(gameState === 2){
      // game.end();
    // }
}