let playerHeight = 90;
let playerWidth = 90;
let playerX = 50;
let playerY = 140;
let bil2X = 50;
let bil2Y = 260;
let bil3X = 50;
let bil3Y = 380;
let bil4X = 50;
let bil4Y = 500;
let målstreg;
let målstregX = 700;

let målstregY = 100; 
let målstregHeight = 550;
let målstregWidth = 100;
let bane;

function preload(){
bil1= loadImage("Bil1.png");
bil2= loadImage("Bil2.png");
bil3= loadImage("Bil3.png");
bil4= loadImage("Bil4.png");

bane = loadImage("Bane1.jpg");
målstreg = loadImage("målstreg1.png");

}


function setup(){
createCanvas(800,800);
background(250);
bane.resize(800,800);
image(bane, 0, 0); 

image(bil1,playerX,playerY,playerWidth,playerHeight);

image(bil2,bil2X,bil2Y,playerWidth,playerHeight)

image(bil3,bil3X,bil3Y,playerWidth,playerHeight)

image(bil4,bil4X,bil4Y,playerWidth,playerHeight)



image(målstreg,målstregX,målstregY,målstregWidth,målstregHeight)



}