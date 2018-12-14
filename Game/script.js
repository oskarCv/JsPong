/*get the canvas element from the html dom*/
const canvas = document.getElementById('canvas');
/*setting the context for the canvas element*/
let ctx = canvas.getContext('2d');
//this will be executed for ever every 10 milliseconds unless we stop it

let x = canvas.width/2;
let y = canvas.height - 30;
let paddleLevel = 100;
let ballLevel = 5;
let dx = 2;
let dy = -2;
let ballRadius = 10;

let paddleHight = 10;
let paddleWidth = 50;

let paddleX = (canvas.width-paddleWidth)/2;
let paddleY = (canvas.height-paddleHight)-paddleLevel;

setInterval(draw,ballLevel);


function drawBall(){
    //draw Ball Code
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    //fill color
    ctx.fillStyle = "blue";  
    ctx.fill();
    ctx.closePath();
    
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX,paddleY,paddleWidth,paddleHight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
function draw(params) {
    /*clear previous draw*/
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(y + dy < 0 || y + dy > canvas.height - ballRadius){
        dy= -dy
    }
    if(x + dx < 0 || x +dx > canvas.width - ballRadius){
        dx = -dx;
    }
    x+= dx;
    y+= dy;
    
}
