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

let image1
let image2
let image3
let image4
let imageM

let målstreg;
let målstregX = 700;
let målstregY = 100; 
let målstregHeight = 550;
let målstregWidth = 100;
let bane;







function preload(){// loader alle billeder 
image1 = loadImage("Bil1.png");
image2 = loadImage("Bil2.png");
image3 = loadImage("Bil3.png");
image4 = loadImage("Bil4.png");

bane = loadImage("Bane1.jpg");
imageM = loadImage("målstreg1.png");


}


function setup(){
createCanvas(800,800);
background(250);
bane.resize(800,800);// bane tilpasset
image(bane, 0, 0); // bane lagt ind

//image1(bil1,playerX,playerY,playerWidth,playerHeight);// spiller

//image2(bil2,bil2X,bil2Y,playerWidth,playerHeight)// bil2

//image3(bil3,bil3X,bil3Y,playerWidth,playerHeight)// bil3

//image4(bil4,bil4X,bil4Y,playerWidth,playerHeight)// bil4



//imageM(målstreg,målstregX,målstregY,målstregWidth,målstregHeight)// målestreg




rect(250, 650, 270, 37);
textSize(30);
text('Spørgsmål 1', 300, 680);

    
rect(150, 740, 200, 30);// venstre

rect(380, 740, 200, 30);//højre

}

function mousePressed() {
    // Hvis klik er indenfor højre boks
    if (mouseX >= 380 && mouseX <= 580 && mouseY >= 740 && mouseY <= 770) {
        playerX +=10 

        



}

}

function draw(){
    
    image(image1,playerX,playerY,playerHeight,playerWidth)
    
    image(image2,bil2X,bil2Y,playerHeight,playerWidth)
    
    image(image3,bil3X,bil3Y,playerHeight,playerWidth)
    
    image(image4,bil4X,bil4Y,playerHeight,playerWidth)
    
    image(imageM,målstregX,målstregY,målstregWidth,målstregHeight)
    

    }