let playerHeight = 50;
let playerWidth = 50;
let playerX = 50;
let playerY = 50;
let bil2X = 50;
let bil2Y = 110;
let bil3X = 50;
let bil3Y = 170;
let bil4X = 50;
let bil4Y = 230;



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
background(250);
bane.resize(400,400);
image(bane, 0, 0); 

image(bil1,playerX,playerY,playerWidth,playerHeight);

image(bil2,bil2X,bil2Y,playerWidth,playerHeight)

image(bil3,bil3X,bil3Y,playerWidth,playerHeight)

image(bil4,bil4X,bil4Y,playerWidth,playerHeight)
}