function setup() {
    createCanvas(windowWidth, windowHeight);
    
    background(`rgb(47,61,107)`); //gradient
    
    for (let h=26;h<201;h+=20) 
      {
        noStroke(); 
        fill(27,245,187, 4);
        rect(0, 0, windowWidth, 125+h);
      }
    
    cumshot = get();
  }
  
  
  
  function draw() {
    image(cumshot, 0, 0, windowWidth, windowHeight); 
    
    
    translate(width/2, height/2);
    
    let f = frameCount*0.04
    
    
    let sizze = 30;
    let quantity = 52;
    let smeshenieX;
    let smeshenieY;
    
    rectMode(CENTER)
    for (let posY=0; posY<sizze*quantity; posY+=sizze+5, sizze-=3)
      {
         smeshenieY = cos(f+posY*0.2)*3;
        for (let posX=0; posX<380 ;posX+=50)
          {
            smeshenieX = cos(f+posX*0.01)*3;
            stroke(255,204,247, 80);
            fill(184,152,194, 200);
            rect(posX-180+smeshenieX, posY-50+smeshenieY, sizze);
          }
      }
    
    
    let s = 15;
    let q = 6;
    let r = 27;
    
    for (let n=1;n<10;n++,q+=6)
      {  
        for (let a=0;a<TWO_PI;a+=TWO_PI/q)
          {
            stroke(255,204,247, 80);
            fill(184,152,194, 200);
            circle(n*cos(a)*r, n*sin(a)*s-150, 50);
  
          }
        r = r + sin(f+n)
        s = s + cos(f+n)
      }
  
    stroke(0);
    fill(250);
    circle(-100, -180, 60);
    circle(90, -180, 60);
    
    fill(0);
    circle(-90, -170, 20);
    circle(80, -180, 20);
    
    
    for (let i=0; i<12;i++)
      {
        stroke(0);
        fill(250, 10, 10, 110);
        arc(0, -90, 120, 100, -70, PI + QUARTER_PI, CHORD);
      }
  }