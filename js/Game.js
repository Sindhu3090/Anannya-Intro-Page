class Game {
    constructor() {
        this.currentState = 1; 
        this.level = 0;
    }

    getState() {
        return this.currentState;
    }

    update(state) {
        this.currentState = state;
    }

    start() {
        //creating intro of the game
        intro = new Intro();
        intro.display();

        //creating a player variable
        player_value = new Player(200,565);
      
        //creating a ground variable
        ground = new Ground(600,900,1200,90);
    }

        
        //creating  gamstate 3 , first level of the game
        playbackground1() {
            background("white");

            //giving the background image details
            background(background_image_one);

            //displaying the variables

        
            ground.display();
            // drawSprites();

        
        
        
        }

    
    

    end(){
        background("white");

    }

    }
 








 