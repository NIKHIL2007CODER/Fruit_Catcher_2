class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder" , "Name")
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.waiting = createElement('h3');
       this.title = createElement('h2');
       this.reset = createButton("Reset");
      
     

    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.waiting.hide();

    }


    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(width/4, -70);
        this.title.style('font-size', '100px');
        this.title.style('color', color(100,25,100));

        this.input.position(width/3,420);
        this.input.style('width', '200px');
        this.input.style('height', '30px');
        this.input.style('font-size', '20px');
        this.input.style('background', color(120,200,234));

        this.button.position(width/1.7,415);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('font-size' ,'20px')
        this.button.style('background', color(185,40,79));

        this.reset.position(width-100 , 50);
        this.reset.style('width' , '100px');
        this.reset.style('height' , '35px')
        this.reset.style('font-size' , '25px');
        this.reset.style('background' , color(124,157,323));

      

       

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(width/3,200);
            this.greeting.style('color', color(255,255,0));
            this.greeting.style('font-size', '100px');
            
            this.waiting.position(width/2.5 +70 , 450);
            this.waiting.html("waiting for another player ...");
            this.waiting.style('font-size' , '20px')
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          
          database.ref("/").update({
            players: null,
            finishedPlayers: 0,
          });
        });

    }
}