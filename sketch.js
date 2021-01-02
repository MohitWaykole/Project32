const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gameState = "attached";
var score = 0;
var bg = "sprites/bg1.png";
var backgroundImg;

function preload(){
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(570, 450, 340, 10);
    ground2 = new Ground(1013, 275, 260, 10);

    //last row blocks
    box1 = new Box(435, 400, 40, 70, "lightBlue");
    box2 = new Box(480, 400, 40, 70, "lightBlue");
    box3 = new Box(525, 400, 40, 70, "lightBlue");
    box4 = new Box(570, 400, 40, 70, "lightBlue");
    box5 = new Box(615, 400, 40, 70, "lightBlue");
    box6 = new Box(660, 400, 40, 70, "lightBlue");
    box7 = new Box(705, 400, 40, 70, "lightBlue");

    //second last row blocks
    box8 = new Box(480, 300, 40, 70, "pink");
    box9 = new Box(525, 300, 40, 70, "pink");
    box10 = new Box(570, 300, 40, 70, "pink");
    box11 = new Box(615, 300, 40, 70, "pink");
    box12 = new Box(660, 300, 40, 70, "pink");

    //third last row blocks
    box13 = new Box(525, 200, 40, 70, "lightGreen");
    box14 = new Box(570, 200, 40, 70, "lightGreen");
    box15 = new Box(615, 200, 40, 70, "lightGreen");

    //top row blocks
    box16 = new Box(570, 100, 40, 70, "lightGrey");

    box17 = new Box(920, 230, 40, 70, "lightBlue");
    box18 = new Box(965, 230, 40, 70, "lightBlue");
    box19 = new Box(1010, 230, 40, 70, "lightBlue");
    box20 = new Box(1055, 230, 40, 70, "lightBlue");
    box30 = new Box(1100, 230, 40, 70, "lightBlue");
    box35 = new Box(965, 130, 40, 70, "lightGreen");
    box40 = new Box(1010, 130, 40, 70, "lightGreen");
    box45 = new Box(1055, 130, 40, 70, "lightGreen");
    box50 = new Box(1010, 30, 40, 70, "pink");

    polygon = new Polygon(100, 330, 20);

    sling = new Chain(polygon.body, {x:100,y:312});
}

function draw(){
    if (backgroundImg){
        background(backgroundImg);
    }
    
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box30.display();
    box35.display();
    box40.display();
    box45.display();
    box50.display();
    polygon.display();
    ground1.display();
    ground2.display();
    sling.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box30.score();
    box35.score();
    box40.score();
    box45.score();
    box50.score();

    drawSprites();

    textSize(40);
    fill("black");
    text("Score: "+score, 900, 50);
}

function mouseDragged(){
    if (gameState != "flying"){
        Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
        sling.attach(polygon.body);
    }
}

function mouseReleased(){
    gameState = "flying";
    sling.fly();
}

function keyPressed(){
    if (keyCode == 32){
        Matter.Body.setPosition(polygon.body, {x:100, y:330});
        sling.attach(polygon.body);
        gameState = "attached";
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=6 && hour<=19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}