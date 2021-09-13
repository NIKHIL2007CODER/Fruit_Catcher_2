class Game{
    constructor(){
        this.right = createButton(">>");
        this.left = createButton("<<");
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }

        
      
        

            
    play(){
        
        form.hide();

        this.right.position(width-200 , height-200);
        this.right.style('width' , '200px');
        this.right.style('height' , '200px');
        this.right.style('font-size' , '30px');
        this.right.style('background' , color(255,255,0));

        this.left.position(30 , height-200);
        this.left.style('width' , '200px');
        this.left.style('height' , '200px');
        this.left.style('font-size' , '30px');
        this.left.style('background' , color(255,255,0));

        Player.getPlayerInfo();
        if(allPlayers !== undefined){
        image(back_img, 0, 0,windowWidth , windowHeight);
        var x =100;
        var y=200;
        var index =0;

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500+allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 

            textAlign(CENTER);
            textSize(40);
            stroke(1);
            strokeWeight(3);
            fill(0,255,255);
            textFont("Harrington")
            text(allPlayers[plr].name , players[index - 1].x , players[index - 1].y -30);


            fill("red");
            textSize(25);
            text(allPlayers.player1.name + " : " +allPlayers.player1.score , 100, 50);
            text(allPlayers.player2.name + " : " +allPlayers.player2.score , 100, 100);

        }

    }


      
    

    

        // Give movements for the players using arrow / mouse keys
        if(keyIsDown(39) ){
            xVel += 0.5 ; 
        }
        

        this.right.mousePressed(()=>{
            xVel += 2 ;
            player.update();
        });

        if(keyIsDown(37) ){
            xVel -= 0.5 ;
            player.update();
        }

        this.left.mousePressed(()=>{
            xVel -= 2 ;
        });
      

        // Create and spawn fruits randomly
        if (frameCount % 20 === 0) {
            fruits = createSprite(random(100, 1000), 0, 100, 100);
            fruits.velocityY = 5;
            var rand = Math.round(random(1,5));
            switch(rand){
                case 1: fruits.addImage("fruit1",fruit1_img);
                        fruits.scale = 1 ;
                break;
                case 2: fruits.addImage("fruit1", fruit2_img);
                        fruits.scale = 2 ;
                break;
                case 3: fruits.addImage("fruit1", fruit3_img);
                        fruits.scale = 2;
                break;
                case 4: fruits.addImage("fruit1", fruit4_img);
                        fruits.scale = 1.2;
                break;
                case 5: fruits.addImage("fruit1", fruit5_img);
                        fruits.scale = 1;
                break;
            }
            fruitGroup.add(fruits);
          
            
        }

        if (player.index !== null) {
            for(var i=0 ;i<fruitGroup.length; i++){
            if (fruitGroup.get(i).isTouching(players)){
                fruitGroup.get(i).destroy();
                 player.score =player.score+1;
                 player.update();
 
             }
            }

            if(player.score >= 20){
                this.end();
            }
           }

           


        player.distance += xVel;
        xVel *= 0.98;
        player.xPos += xVel;
        xVel *= 0.985;
        player.update();
        
        // drawing the sprites 
        drawSprites();
    }

    end(){
       console.log("Game Ended");
       game.update(2);
       clear();
       fill(255,126,0);
       textFont("harrington");
       fruitGroup.destroyEach();
       textSize(200);
       stroke(10,275,255);
       strokeWeight(20);
       text("GAME OVER" , width/2 , height/2);
    }
}