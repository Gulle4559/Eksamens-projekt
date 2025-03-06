
let playerHeight = 50;
let playerWidth = 50;
let playerX = 50;
let playerY = 50;


let bane;



function preload(){
bil1= loadImage("Bil1.png");
bil2= loadImage("Bil2.png");
bil3= loadImage("Bil3.png");
bil4= loadImage("Bil4.png");

bane = loadImage("Bane1.jpg");

}


function setup(){
createCanvas(600,600);




}


function draw(){

    background(250);
    bane.resize(400,400);
    image(bane, 0, 0); 
    
    image(bil1,playerX,playerY,playerWidth,playerHeight);
}




