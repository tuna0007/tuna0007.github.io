class Bubble
{
  constructor(posX, posY, dirX, dirY, size)
  {
    this.positionX = posX;
    this.positionY = posY;
    this.directionX = dirX;
    this.directionY = dirY;
    this.size = size;
  }
  
  createBubbles()
  {
    "sharikCanvas."
    sharikCanvas.stroke(`rgb(245,120,29)`);
    sharikCanvas.fill(192,252,255,80);
    sharikCanvas.circle(this.positionX, this.positionY, this.size);
  }
  
  mooove()
  {
    this.positionX = this.positionX + this.directionX;
    this.positionY = this.positionY + this.directionY;
    if (this.size >= 0)
      this.size = this.size - 0.1;
  }
}

let utakata;

function preload(){
  utakata = loadImage('utakata.png'); 
}
  

let sharik = [ ];


function setup() {
  createCanvas(800, 400);
  
  noCursor();
  
  sharikCanvas = createGraphics(width,height);
}



function draw() {
  background(64,72,92, 50);
  
  frameRate(60);
  
    
  if (mouseIsPressed === true)
    {
      if (mouseX != pmouseX)
        sharik[sharik.length] = new Bubble(mouseX, mouseY, (mouseX-pmouseX)*0.3, (mouseY-pmouseY)*0.3, random(10, 30));
      else sharik[sharik.length] = new Bubble(mouseX, mouseY, random(-1, 1), random(-1, 1),  random(10, 30));
    }

  
  for (let n=0;n<sharik.length;n++)
    {
      sharik[n].createBubbles();
      sharik[n].mooove();
    }

  // let pusto = [ ];
  
  sharik = sharik.filter(shar=>((shar.positionX >= 0 && shar.positionX <= width+10) && (shar.positionY >= 0 && shar.positionY <= height+10) && shar.size > 1));
  
  // for (let n=0;n<sharik.length;n++)
  //   {
  //     if ((sharik[n].positionX >= 0 && sharik[n].positionX <= width+10) && (sharik[n].positionY >= 0 && sharik[n].positionY <= height+10))
  //     pusto[pusto.length] = sharik[n];
  //   }
  
  
  image(sharikCanvas,0,0);
  sharikCanvas.background(64,72,92, 100);
  image(utakata,mouseX-60,mouseY-30);
}