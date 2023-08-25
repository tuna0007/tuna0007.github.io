class Krug
  {
    constructor(ugol, sun)
    {
      this.angle = ugol;
      this.diametr = sun;
      this.pos = {
        x: width/2+cos(this.angle)  * this.diametr  , 
        y: height/2+sin(this.angle) * this.diametr };
      this.size = 1; 
    }
    
    mooove()
    {
      this.diametr = this.diametr + 0.2;
      this.pos.x = width/2+cos(this.angle)  * this.diametr;
      this.pos.y = height/2+sin(this.angle) * this.diametr;
      
      const zalupa = abs(width/4-this.diametr);
      this.size = map(zalupa,10,width/4,40,0);
    }
    
    iSeeYou()
    {
      colorMode(HSB,360,100,100);
      this.color = color((this.angle%TWO_PI)/TWO_PI*360, 40, 100);
      
      //let autilus = (Math.sqrt(5)+1)/2;
      //this.color = color(this.angle*PI*4*TWO_PI/autilus%360, 40, 100);
      
      fill(this.color);
      circle(this.pos.x, this.pos.y, this.size);
    }
  }


let circles = [ ];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(20);
  
  circles[circles.length] = new Krug(((Math.sqrt(5)+1)/2)*TWO_PI*frameCount, 10);
  
  const bazar = circles.filter(circle => circle.diametr < width/2);
  circles = bazar;
  
  for (let i=0;i<circles.length;i++)
  { 
    circles[i].mooove()
    circles[i].iSeeYou()
  }
}

