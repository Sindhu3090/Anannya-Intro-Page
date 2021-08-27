// obtain game engine variable
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// player information
var player_value;

// storyline information
var jet_value;

// background information
var background_value;
var background_image_one, background_image_two, background_image_three, background_image_four , background_image_five , background_image_six, backgroundanimation;

// game information
var ground;
var game;
var intro;
var gameState = 0;

// Preload function to declare all the assets before rendering.
function preload() {
    // loadPlayerSprites();
   
    loadBackgroundSprites();
}
function setup() {
    // create a base canvas
    createCanvas(1550,740);

    // Initialize game engine and gameworld;
    engine = Engine.create();
    world = engine.world;

    // Initialize game ground
    ground = new Ground(600,height,1200,20);
    
    // create an instance of the game object.
    game = new Game();
    gameState = game.getState();
    game.start();    
}

function draw() {

    background(255);
    gameState = game.getState();

    if (gameState === 1) {
        console.log(gameState);
        game.playbackground1();
          
     
    }

    fill("red");
    textFont("Arial");
          strokeWeight(4);
          stroke("red");
     textSize(30);
    text("  SCORE : " + score, 30, 140);
   
}

function loadBackgroundSprites() {
    background_image_one = loadImage("sprite/BG11.png");
    backgroundanimation = loadImage("intro_sprite/abgt.jpg")
    background_image_two = loadImage("sprite/BG21.png");
    background_image_three = loadImage("intro_sprite/abgt.jpg");
    background_image_four = loadImage("sprite/BG31.png");
    background_image_five = loadImage("sprite/BG43.png");
    background_image_six = loadImage("sprite/BG51.png");
}
