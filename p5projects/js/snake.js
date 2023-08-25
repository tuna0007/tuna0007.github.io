// cube size
let boxSize = 40; 
/////////////////////////////////snake////////////////////////////////////
class Snake
{
  constructor()
  {
    this.tailX = [ ];   
    this.tailX[0] = width/2; 
    
    this.tailY = [ ];
    this.tailY[0] = height/2;
    
    this.dirX = 0;
    this.dirY = 0;
  }
  
  makeSnake()
  {
    fill(`rgb(191,130,238)`);
    for (let i=0;i<this.tailX.length;i++)
      {
        rect(this.tailX[i], this.tailY[i], boxSize);
      }
  }
  
  letItSnake() //mooove
  {
    for (let i=1;i<this.tailX.length;i++)
      {
        this.tailX[this.tailX.length-i] = this.tailX[this.tailX.length-i-1];
        this.tailY[this.tailY.length-i] = this.tailY[this.tailY.length-i-1];
        
        if ((snake777.tailX[0] == snake777.tailX[i]) && (snake777.tailY[0] == snake777.tailY[i]) && (score>2)) 
          {
            clear(59,61,59);
            background(255, 0, 0);
            textSize(70);
            stroke(100,82,59);
            strokeWeight(7);
            text(`GAME OVER`, width/2-200, height/2);
            let button = createButton('try again');
            button.position(width/2, height/2);
            button.size(30);
            button.mousePressed();
          }
      }

    this.tailX[0] = this.tailX[0] + this.dirY;
    this.tailY[0] = this.tailY[0] + this.dirX;

  }
}

//////////////////////////////mouse///////////////////////////////////////
class Mouse
{
  constructor()
  {
    this.posHitX = this.boostX();
    this.posHitY = this.boostY();
  }
  
  makeMouse()
  {
    fill(`grey`);
    rect(this.posHitX, this.posHitY, boxSize);
  }
  
  //generate new mouse
  boostX()
  {
    let numbX = 0;
    let posXarray = [ ];
    let roundingX;
    let resultX;
    for (let i=0; i<width/(boxSize+5); i++)
      {
        posXarray[i] = numbX+boxSize;
        numbX = numbX+boxSize;
      }
    roundingX = ~~(Math.random()*posXarray.length);
    resultX = posXarray[roundingX];
    return resultX;
  }
  
  boostY()
  {
    let numbY = 0;
    let posYarray = [ ];
    let roundingY;
    let resultY;
    for (let i=0; i<height/(boxSize+5); i++)
      {
        posYarray[i] = numbY+boxSize;
        numbY = numbY+boxSize;
      }
    roundingY = ~~(Math.random()*posYarray.length);
    resultY = posYarray[roundingY];
    return resultY;
  }
}
///////////////////////end/////////////////////////////////////

let snake777;
let mice;
let score = 0;
let queue = false;
let textCanvas;

function setup() {
  createCanvas(800, 800);
  
  snake777 = new Snake();
  mice = new Mouse();
}

function draw() {
  background(`rgb(59,61,59)`);
  
  frameRate(6); //fps
  
  //tail boost when eat
  if (queue == true)
    {
      snake777.tailX.push(snake777.tailX[snake777.tailX.length-1]);
      snake777.tailY.push(snake777.tailY[snake777.tailY.length-1]);
    }
  
  mice.makeMouse();
  snake777.letItSnake();
  
  
  //infiniti run
  if (snake777.tailX[0] === width) 
    snake777.tailX[0] = 0;
  if (snake777.tailX[0] < 0) 
    snake777.tailX[0] = width-boxSize;
  if (snake777.tailY[0] === height)
    snake777.tailY[0] = 0;
  if (snake777.tailY[0] < 0)
    snake777.tailY[0] = height-boxSize;
  
  snake777.makeSnake();
  
  if ((snake777.tailX[0] == mice.posHitX) && (snake777.tailY[0] == mice.posHitY))
  {
    mice.posHitX = mice.boostX();
    mice.posHitY = mice.boostY();
    score = score + 1;
    queue = true
  }
  else queue = false;
  
  

  //counter
  fill(`rgb(191,130,238)`);
  rect(575, 5, 215, 40)
  let whereIsText = 580; 
  let whereIsScore = whereIsText+167;
  textSize(20);
  stroke(100,82,59);
  strokeWeight(2);
  fill(100,82,59);
  text(`мышек съедено: `, whereIsText, 30);
  text(score, whereIsScore, 30);
}


//control
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake777.dirX = -boxSize;
    snake777.dirY = 0;
  } else
  if (keyCode === DOWN_ARROW) {
    snake777.dirX = boxSize;
    snake777.dirY = 0;
  } else
  if (keyCode === LEFT_ARROW) {
    snake777.dirY = -boxSize;
    snake777.dirX = 0;
  } else
  if (keyCode === RIGHT_ARROW) {
    snake777.dirY = boxSize;
    snake777.dirX = 0;
  }
}