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

let Pokal

let Spørgsmål=["1","2","3","4","5","6","7","8","9"]
let s = 0

let Svar 
let s1

let s2

let Bil2t = 0
let Bil3t = 0
let Bil4t = 0

let gameWon = false;// sætter spillet vundet til falsk.

let gamelost = false

function preload(){// loader alle billeder 
image1 = loadImage("Bil1.png");
image2 = loadImage("Bil2.png");
image3 = loadImage("Bil3.png");
image4 = loadImage("Bil4.png");

bane = loadImage("Bane1.jpg");
imageM = loadImage("målstreg1.png");

Pokal = loadImage("Pokal1.png");

}


function setup(){
createCanvas(800,800);
background(250);
bane.resize(800,800);// bane tilpasset
image(bane, 0, 0); // bane lagt ind



}

function mousePressed() {
    // Hvis klik er indenfor højre boks
    if (mouseX >= 380 && mouseX <= 580 && mouseY >= 740 && mouseY <= 770) {    
        playerX +=70 
        s++
    }
    if (mouseX >= 150 && mouseX <= 350 && mouseY >= 740 && mouseY <= 770) {
        playerX -=70;
        s--
}

    if (playerX >= 50 && playerX <= 50 ){
    background(bane)
    text(Spørgsmål[s], 300,680)
    textSize(30)
   
    
   
     if (playerX >= 51 && playerX <= 110 ){
        background(bane)
        text(Spørgsmål[s], 300,680)
        textSize(30)  
       
 

    }
}


   




if (playerX + playerWidth >= målstregX) {
    gameWon = true; // Sæt spillet til vundet
}



}



function draw(){
    
    background(bane)
    rect(250, 650, 270, 37);
    textSize(30);
    text(Spørgsmål[s], 300,680);



    
    rect(150, 740, 200, 30);// venstre

    rect(380, 740, 200, 30);//højre

    image(imageM,målstregX,målstregY,målstregWidth,målstregHeight)

    image(image1,playerX,playerY,playerHeight,playerWidth)
    
    image(image2,bil2X,bil2Y,playerHeight,playerWidth)
    
    image(image3,bil3X,bil3Y,playerHeight,playerWidth)
    
    image(image4,bil4X,bil4Y,playerHeight,playerWidth)
    
    if (gameWon) {
        background(Pokal)
        fill(0,128,0); // grøn farve
        textSize(50);
        text("DU VANDT!", width / 2 - 130, height / 2);
        
    }

    if (gamelost) {
        background(Pokal)
        fill(0,128,0); // grøn farve
        textSize(50);
        text("Du Tabte!", width / 2 - 130, height / 2);
        
    }
   Bil2t+=1 
   if(Bil2t==150){
    Bil2t=0
    bil2X += 70

   }
   Bil3t+=1 
   if(Bil3t==180){
    Bil3t=0
    bil3X += 70

   }
   Bil4t+=1 
   if(Bil4t==200){
    Bil4t=0
    bil4X += 70

   }
   
   if (bil2X + playerWidth >= målstregX) {
    gamelost = true; // Sæt spillet til vundet
}

if (bil3X + playerWidth >= målstregX) {
    gamelost = true; // Sæt spillet til vundet
}

if (bil4X + playerWidth >= målstregX) {
    gamelost = true; // Sæt spillet til vundet
}
   console.log(gamelost)
}

