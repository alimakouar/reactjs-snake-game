const can=document.getElementById("snakeGame");
const can_ctxt=snakeGame.getContext("2d");

var dx=11;
var dy=11;
var direction="none";

can_ctxt.fillStyle="black"
can_ctxt.fillRect(0,0,can.width,can.height)
can.style.border="2px solid red";

let snake=[{x:400,y:300},{x:389,y:300},{x:378,y:300},{x:367,y:300},{x:356,y:300},{x:345,y:300}];

function drawSquare(square)
{
    can_ctxt.fillStyle='red';
    can_ctxt.strokestyle='white';
    can_ctxt.fillRect(square.x,square.y,10,10);
}

function drawSnake(snake){
    snake.forEach(drawSquare);
}

//fonction main qui dessine le serpent la 1ere fois
function main(){
    var snake=[{x:400,y:300},{x:389,y:300},{x:378,y:300},{x:367,y:300},{x:356,y:300},{x:345,y:300}];
    drawSnake(snake);
}

//les fonction du deplacement
function move_right(){  

    r=setTimeout(function onTick()
     {
           if(direction!="left" && !gameOver()){
           const head ={x:snake[0].x + dx, y:snake[0].y};
           snake.unshift(head);
           snake.pop();
           clear()
           drawSnake(snake);
           direction="right"
            move_right();

           };
       },100)
}

function move_left(){
    l=setTimeout(function onTick()
    {
 if(direction!="right" && direction!="none" && !gameOver()){
    const head ={x:snake[0].x - dx, y:snake[0].y};
    snake.unshift(head);
    snake.pop();
    clear()
    drawSnake(snake);

    direction="left";
    move_left();
    };
    },100);
   
}
function move_up(){
    u=setTimeout(function onTick()
    {
    if(direction!="down" && !gameOver()){
    const head ={x:snake[0].x , y:snake[0].y -dy};
    snake.unshift(head);
    snake.pop();
    clear()
    drawSnake(snake);
    direction="up";
    move_up();
    };
},100);
}
function move_down(){
    d=setTimeout(function onTick()
    {
    if(direction!="up" && !gameOver()){
    const head ={x:snake[0].x , y:snake[0].y +dy};
    snake.unshift(head);
    snake.pop();
    clear()
    drawSnake(snake);
    direction="down"
    move_down();
    };
},100);
}