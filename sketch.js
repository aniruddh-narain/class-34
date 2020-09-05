var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPos = database.ref('ball/position');
    ballPos.on("value",readPos);
}

function draw(){
    background("white");

    if(position !== undefined){

    if(keyDown(LEFT_ARROW)){
        writePos(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(3,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+3);
    }
    drawSprites();
    }
} 

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writePos(x,y){
    database.ref('ball/position').set({
        x:position.x + x,
        y:position.y + y
    });
}
