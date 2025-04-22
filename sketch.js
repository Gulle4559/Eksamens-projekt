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

let image1;
let image2;
let image3;
let image4;
let imageM;
let imageS;

let målstreg;
let målstregX = 700;
let målstregY = 100; 
let målstregHeight = 550;   
let målstregWidth = 100;
let bane;

let Pokal
let Tabte
let Svar = ""

let score = 0;


let Spørgsmål=["Hvad er 2+2?","Hvordan finder man c^2 i en trekant?","hvordan ser funktionen for en linær graf ud?","Hvad er 5*6 ","Løs ligningen 3(2x-4)+5=2x+11 ","6","7","8","9"]
let s = 0;

let Svar1 =["3","a*b","ax*b","25","9/3","6","7","8","9"] 
let s1 = 0;


let Svar2 = ["4","a^2+b^2","ax+b","30","9/2","6","7","8","9"]
let s2 = 0;

let Bil2t = 0;
let Bil3t = 0;
let Bil4t = 0;

let gameWon = false;

let gamelost = false;

let good; 

let bad;

let StartM;
let SlutM = false;

let start=0;

function preload(){
image1 = loadImage("Bil1.png");
image2 = loadImage("Bil2.png");
image3 = loadImage("Bil3.png");
image4 = loadImage("Bil4.png");

bane = loadImage("Bane1.jpg");
imageM = loadImage("målstreg1.png");

Pokal = loadImage("Pokal1.png");
Tabte = loadImage("You lose.png");

imageS = loadImage("Matematisk_Racer.PNG")

good = loadSound('buzzer-rightanswer.mp3');
bad = loadSound('wrong-answer-sound-fx.mp3');
StartM = loadSound('title-theme-mario-kart-wii-cortado.mp3')



}


function setup(){
createCanvas(800,800);
background(250);
bane.resize(800,800);// bane tilpasset
image(bane, 0, 0); 

 
   
}
function mouseMoved(){
    if(!SlutM){
     StartM.play()
    SlutM=true
 
    }
     
    
 }

 
 
 




function mousePressed() {
    // Hvis klik er indenfor højre boks
    if (mouseX >= 380 && mouseX <= 580 && mouseY >= 740 && mouseY <= 770) {    
        if(Svar == "højre"){
            playerX +=70 
            s++
            s1++
            s2++
            score++
            good.play();
        } else {
            bad.play();
            if(s!=0){
                playerX -=70;
                s--
                s1--
                s2--
                score--

               

            }
        }
        Svar = ""


        
    }
    // Hvis klik er indenfor venstre boks
    if (mouseX >= 150 && mouseX <= 350 && mouseY >= 740 && mouseY <= 770) {
        if(Svar == "venstre"){
            playerX +=70 
            s++
            s1++
            s2++
            score++
            good.play();
        } else {
            
            bad.play();
            if(s!=0){
                playerX -=70;
                s--
                s1--
                s2--
                score--

               

            }
        }
        Svar = ""
}

if (playerX + playerWidth >= målstregX) {
    gameWon = true; // Sæt spillet til vundet
}

if(mouseX >= 10 && mouseX <= 167 && mouseY >= 50 && mouseY <= 250){

    StartM.play()

}
}

function draw(){
    if(start==1){
        background(bane)
        rect(0, 670, 800, 37);
        textSize(30);
       
        text(Spørgsmål[s], 0,700);
        if(Svar == ""){
            
            let temp = random(1,3)
            temp = Math.floor(temp)
            if (temp == 1){
                Svar = "venstre"
            } else {
                Svar = "højre"
            }
            
        }
        if(Svar == "venstre"){
            rect(150, 740, 200, 30);// venstre
            text(Svar2[s2],200,768);
            textSize(30);
            
        
            rect(380, 740, 200, 30);//højre
            text(Svar1[s1],430,768);
            textSize(30);
        }
        if(Svar == "højre"){
            rect(150, 740, 200, 30);// venstre
            text(Svar1[s1],200,768);
            textSize(30);
            
        
            rect(380, 740, 200, 30);//højre
            text(Svar2[s2],430,768);
            textSize(30);
        }
    
        image(imageM,målstregX,målstregY,målstregWidth,målstregHeight)
    
        image(image1,playerX,playerY,playerHeight,playerWidth)
        
        image(image2,bil2X,bil2Y,playerHeight,playerWidth)
        
        image(image3,bil3X,bil3Y,playerHeight,playerWidth)
        
        image(image4,bil4X,bil4Y,playerHeight,playerWidth)
        
        if (gameWon) {
            background(Pokal)
            fill(0,128,0); 
            textSize(50);
            text("DU VANDT!",270,490);
            
        }
    
        if (gamelost) {
            background(Tabte)
            fill(0,0,0); 
            textSize(50);
            text("Du Tabte!", 270,490);
            
        }
    
        
    
       
    
       Bil2t+=1 
       if(Bil2t==650){
        Bil2t=0
        bil2X += 50
    
       }
       Bil3t+=1 
       if(Bil3t==580){
        Bil3t=0
        bil3X += 50
    
       }
       Bil4t+=1 
       if(Bil4t==500){
        Bil4t=0
        bil4X += 50
    
       }
       
       if (bil2X + playerWidth >= målstregX) {
        gamelost = true; 
    }
    
    if (bil3X + playerWidth >= målstregX) {
        gamelost = true; 
    }
    
    if (bil4X + playerWidth >= målstregX) {
        gamelost = true; 
    }
       

    } else{
    //Start menu
    image(imageS,225,400,300,100);
    image(image1,330,250,playerHeight,playerWidth)
    rect(250, 650, 270, 37);
    text("Start Spil",320,680);
    textSize(30);
    rect(10,90,160,80)
    text("Intro lyd",30,140)
    
    
     if(mouseIsPressed){
        if(mouseX >= 250 && mouseX <= 520 && mouseY >= 650 && mouseY <= 687){
           start=1 
           
        }


     }
    }
    
}


