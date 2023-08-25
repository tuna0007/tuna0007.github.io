let randomArray = (arr) => {return arr[Math.floor(Math.random()*arr.length)]};

class Fish
{
  constructor (posX, posY)
  {
    this.bodyX = posX;
    this.bodyY = posY;
    this.bodyWidth = 400;
    this.fatContent = random(160, 580);
    
    /* COLORS */
    let colors = [1, 51, 102, 153, 204, 255];
    this.colorR = randomArray(colors);
    this.colorG = randomArray(colors);
    this.colorB = randomArray(colors);
    
    /* BUILD IT */
    this.eyesGenerator = randomArray([this.makeEyes1,this.makeEyes2, this.makeEyes3, this.makeEyes5]);
    this.smileGenerator = randomArray([this.makeSmile1, this.makeSmile2, this.makeSmile3, this.makeSmile4]);
    this.tailGenerator = randomArray([this.makeTail1, this.makeTail2]);
    this.dorsalFinGenerator = randomArray([ ]);
    this.ventralFinGenerator = randomArray([ ]);
  }
  
  makeFish ()
  {
    this.tailGenerator();
    this.makeVentralFin1();
    this.makeBody();
    this.smileGenerator();
    //this.makeSmile4();
    this.makeDorsalFin1();
    //this.makePectoralFin1();
    this.eyesGenerator();
    //this.makeEyes5();
  }
  
  
  makeBody ()
  {
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(107, 104, 128);
    ellipse(this.bodyX, this.bodyY, this.bodyWidth, this.fatContent);
    
    // textSize(32);
    // text(`R: ${this.colorR}`, this.bodyX-300, 100);
    // text(`G: ${this.colorG}`, this.bodyX-100, 100);
    // text(`B: ${this.colorB}`, this.bodyX+100, 100);
  }
  
  
  /* EYES */
  makeEyes1 () 
  {
    strokeWeight(3);
    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.bodyX+180, this.bodyY-60, 65, 50);
    fill(0, 0, 0);
    circle(this.bodyX+180, this.bodyY-60, 20);
    noStroke();
    fill(255, 255, 255);
    circle(this.bodyX+185, this.bodyY-52, 8);
    
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.bodyX+135, this.bodyY-40, 65, 50);
    fill(0, 0, 0);
    circle(this.bodyX+135, this.bodyY-40, 20);
    noStroke();
    fill(255, 255, 255);
    circle(this.bodyX+140, this.bodyY-32, 8);
  }
  
  makeEyes2 () 
  {
    //RIGHT
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(248,246,227);
    ellipse(this.bodyX+180, this.bodyY-60, 50, 50); //eyeball
    fill(this.colorR, this.colorG, this.colorB, 200);
    ellipse(this.bodyX+180, this.bodyY-60, 40, 40); //iris
    noStroke();
    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.bodyX+180, this.bodyY-60, 30, 30); //iris
    stroke(0, 0, 0);
    fill(30,30,30)
    circle(this.bodyX+180, this.bodyY-60, 20); //pupil
    noStroke();
    fill(255, 255, 255);
    circle(this.bodyX+170, this.bodyY-67, 10);//highlight
    circle(this.bodyX+167, this.bodyY-62, 6);//highlight
    circle(this.bodyX+167, this.bodyY-58, 3);//highlight
    
    //LEFT
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(248,246,227);
    ellipse(this.bodyX+135, this.bodyY-40, 50, 50);//eyeball
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB, 200);
    ellipse(this.bodyX+135, this.bodyY-40, 40, 40);//iris
    noStroke();
    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.bodyX+135, this.bodyY-40, 30, 30);//iris
    stroke(0, 0, 0);
    fill(30,30,30)
    circle(this.bodyX+135, this.bodyY-40, 20); //pupil
    noStroke();
    fill(255, 255, 255);
    circle(this.bodyX+125, this.bodyY-47, 10); //highlight
    circle(this.bodyX+122, this.bodyY-42, 6); //highlight
    circle(this.bodyX+122, this.bodyY-38, 3); //highlight
  }
  
  makeEyes3 ()
  {
    //RIGHT
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB, 200);
    ellipse(this.bodyX+180, this.bodyY-60, 50, 50); //eyeball
    noStroke();
    fill(this.colorR, this.colorG, this.colorB, 200);
    ellipse(this.bodyX+180, this.bodyY-60, 40, 20); //iris
    fill(this.colorR-30, this.colorG-30, this.colorB-30, 150);
    ellipse(this.bodyX+180, this.bodyY-53, 30, 20); //iris
    fill(this.colorR+50, this.colorG+50, this.colorB+50, 80);
    ellipse(this.bodyX+184, this.bodyY-63, 35, 30); //iris
    stroke(0, 0, 0);
    fill(30,30,30)
    ellipse(this.bodyX+180, this.bodyY-60, 15, 30); //pupil
    noStroke();
    fill(255, 255, 255);
    ellipse(this.bodyX+170, this.bodyY-67, 11, 9);//highlight
    ellipse(this.bodyX+170, this.bodyY-65, 14, 10);//highlight
    ellipse(this.bodyX+193, this.bodyY-51, 4, 5);//highlight
    
    //LEFT
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB, 200);
    ellipse(this.bodyX+135, this.bodyY-40, 50, 50); //eyeball
    noStroke();
    fill(this.colorR, this.colorG, this.colorB, 200);
    ellipse(this.bodyX+135, this.bodyY-40, 40, 20); //iris
    fill(this.colorR-30, this.colorG-30, this.colorB-30, 150);
    ellipse(this.bodyX+135, this.bodyY-33, 30, 20); //iris
    fill(this.colorR+50, this.colorG+50, this.colorB+50, 80);
    ellipse(this.bodyX+139, this.bodyY-43, 35, 30); //iris
    stroke(0, 0, 0);
    fill(30,30,30)
    ellipse(this.bodyX+135, this.bodyY-40, 15, 30); //pupil
    noStroke();
    fill(255, 255, 255);
    ellipse(this.bodyX+125, this.bodyY-47, 11, 9);//highlight
    ellipse(this.bodyX+125, this.bodyY-45, 14, 10);//highlight
    ellipse(this.bodyX+148, this.bodyY-31, 4, 5);//highlight
  }
  
  
  makeEyes4 ()
  {
    //RIGHT
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB, 200);
    heart(this.bodyX+185, this.bodyY-80, 50);
    noStroke();
    fill(this.colorR, this.colorG, this.colorB, 200);
    heart(this.bodyX+185, this.bodyY-75, 40);
    fill(255, 255, 255, 20);
    ellipse(this.bodyX+180, this.bodyY-58, 28, 33);
    ellipse(this.bodyX+188, this.bodyY-63, 38, 26);
    fill(this.colorR-30, this.colorG-30, this.colorB-30, 200);
    ellipse(this.bodyX+188, this.bodyY-58, 38, 26);
    ellipse(this.bodyX+191, this.bodyY-58, 30, 28);
    
    stroke(this.colorR-40, this.colorG-40, this.colorB-40, 255);
    fill(this.colorR-60, this.colorG-60, this.colorB-60, 105);
    ellipse(this.bodyX+189, this.bodyY-58, 27, 26);
    
    stroke(230,230,230, 250);
    fill(230,230,230, 250)
    heart(this.bodyX+188, this.bodyY-68, 28);
    strokeWeight(1);
    fill(30,30,30)
    heart(this.bodyX+191, this.bodyY-67, 25);
    
    noStroke();
    fill(255, 255, 255, 60);
    ellipse(this.bodyX+198, this.bodyY-73, 18, 16); //highlight
    ellipse(this.bodyX+199, this.bodyY-70, 10, 8); //highlight
    ellipse(this.bodyX+197, this.bodyY-53, 8, 6); //highlight
    ellipse(this.bodyX+196, this.bodyY-50, 7, 4); //highlight
    ellipse(this.bodyX+175, this.bodyY-60, 7, 5); //highlight
    fill(255, 255, 255, 170);
    ellipse(this.bodyX+199, this.bodyY-65, 8, 6); //highlight
       
    //LEFT
    for (let i=0; i<40; i+=6)
      {
        strokeWeight(3);
        //stroke(0, 0, 0);
        strokeWeight(1);
        stroke(30, 30, 30, 50)
        fill(this.colorR+(i+30), this.colorG+(i+30), this.colorB);
        heart(this.bodyX+130, this.bodyY-70+(i/2), 50-i);
      }

    
    noStroke();
    fill(255, 255, 255, 20);
    ellipse(this.bodyX+125, this.bodyY-48, 28, 33);
    ellipse(this.bodyX+133, this.bodyY-53, 38, 26);
    fill(this.colorR-30, this.colorG-30, this.colorB-30, 200);
    ellipse(this.bodyX+133, this.bodyY-48, 38, 26);
    ellipse(this.bodyX+136, this.bodyY-48, 30, 28);
    
    stroke(this.colorR-40, this.colorG-40, this.colorB-40, 255);
    fill(this.colorR-60, this.colorG-60, this.colorB-60, 105);
    ellipse(this.bodyX+134, this.bodyY-48, 27, 26);
    
    
    stroke(230,230,230);
    fill(230,230,230)
    //heart(this.bodyX+132, this.bodyY-58, 28);
    strokeWeight(1)
    fill(30,30,30)
    //heart(this.bodyX+135, this.bodyY-57, 25);
    
    noStroke();
    fill(255, 255, 255, 60);
    ellipse(this.bodyX+143, this.bodyY-63, 18, 16); //highlight
    ellipse(this.bodyX+144, this.bodyY-60, 10, 8); //highlight
    ellipse(this.bodyX+142, this.bodyY-43, 8, 6); //highlight
    ellipse(this.bodyX+141, this.bodyY-40, 7, 4); //highlight
    ellipse(this.bodyX+120, this.bodyY-50, 7, 5); //highlight
    fill(255, 255, 255, 170);
    ellipse(this.bodyX+144, this.bodyY-55, 8, 6); //highlight
  }
  
  
  
  makeEyes5 ()
  {
    //RIGHT
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB, 200);
    heart(this.bodyX+185, this.bodyY-80, 50);
    noStroke();
    fill(this.colorR, this.colorG, this.colorB, 200);
    heart(this.bodyX+185, this.bodyY-75, 40);
    fill(255, 255, 255, 20);
    ellipse(this.bodyX+180, this.bodyY-58, 28, 33);
    ellipse(this.bodyX+188, this.bodyY-63, 38, 26);
    fill(this.colorR-30, this.colorG-30, this.colorB-30, 200);
    ellipse(this.bodyX+188, this.bodyY-58, 38, 26);
    ellipse(this.bodyX+191, this.bodyY-58, 30, 28);
    
    stroke(this.colorR-40, this.colorG-40, this.colorB-40, 255);
    fill(this.colorR-60, this.colorG-60, this.colorB-60, 105);
    ellipse(this.bodyX+189, this.bodyY-58, 27, 26);
    
    stroke(230,230,230, 250);
    fill(230,230,230, 250)
    heart(this.bodyX+188, this.bodyY-68, 28);
    strokeWeight(1);
    fill(30,30,30)
    heart(this.bodyX+191, this.bodyY-67, 25);
    
    noStroke();
    fill(255, 255, 255, 60);
    ellipse(this.bodyX+198, this.bodyY-73, 18, 16); //highlight
    ellipse(this.bodyX+199, this.bodyY-70, 10, 8); //highlight
    ellipse(this.bodyX+197, this.bodyY-53, 8, 6); //highlight
    ellipse(this.bodyX+196, this.bodyY-50, 7, 4); //highlight
    ellipse(this.bodyX+175, this.bodyY-60, 7, 5); //highlight
    fill(255, 255, 255, 170);
    ellipse(this.bodyX+199, this.bodyY-65, 8, 6); //highlight
       
    //LEFT
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB, 200);
    heart(this.bodyX+130, this.bodyY-70, 50);
    noStroke();
    heart(this.bodyX+130, this.bodyY-65, 40);
    fill(255, 255, 255, 20);
    ellipse(this.bodyX+125, this.bodyY-48, 28, 33);
    ellipse(this.bodyX+133, this.bodyY-53, 38, 26);
    fill(this.colorR-30, this.colorG-30, this.colorB-30, 200);
    ellipse(this.bodyX+133, this.bodyY-48, 38, 26);
    ellipse(this.bodyX+136, this.bodyY-48, 30, 28);
    
    stroke(this.colorR-40, this.colorG-40, this.colorB-40, 255);
    fill(this.colorR-60, this.colorG-60, this.colorB-60, 105);
    ellipse(this.bodyX+134, this.bodyY-48, 27, 26);
    
    
    stroke(230,230,230);
    fill(230,230,230)
    heart(this.bodyX+132, this.bodyY-58, 28);
    strokeWeight(1)
    fill(30,30,30)
    heart(this.bodyX+135, this.bodyY-57, 25);
    
    noStroke();
    fill(255, 255, 255, 60);
    ellipse(this.bodyX+143, this.bodyY-63, 18, 16); //highlight
    ellipse(this.bodyX+144, this.bodyY-60, 10, 8); //highlight
    ellipse(this.bodyX+142, this.bodyY-43, 8, 6); //highlight
    ellipse(this.bodyX+141, this.bodyY-40, 7, 4); //highlight
    ellipse(this.bodyX+120, this.bodyY-50, 7, 5); //highlight
    fill(255, 255, 255, 170);
    ellipse(this.bodyX+144, this.bodyY-55, 8, 6); //highlight
  }
  
  
  
  /* SMILES */
  makeSmile1 ()
  {
    strokeWeight(3);
    stroke(0, 0, 0);
    strokeWeight(3);
    line(this.bodyX+140, this.bodyY, this.bodyX+198, this.bodyY+10);
  }
  
  makeSmile2 ()
  {
    strokeWeight(3);
    stroke(0, 0, 0);
    strokeWeight(3);
    line(this.bodyX+140, this.bodyY, this.bodyX+197, this.bodyY-13);
  }
  
  makeSmile3 ()
  {
    strokeWeight(3);
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(255, 255, 255);
    line(this.bodyX+140, this.bodyY, this.bodyX+198, this.bodyY-13);
    triangle(this.bodyX+150, this.bodyY-2,    //left 
             this.bodyX+170, this.bodyY-7,    //right
             this.bodyX+160, this.bodyY+20);  //peak
    
    triangle(this.bodyX+180, this.bodyY-9,    //left 
             this.bodyX+198, this.bodyY-13,    //right
             this.bodyX+195, this.bodyY+12);  //peak
  }
  
  makeSmile4 ()
  {
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(255,79,79)
    arc(this.bodyX+170, this.bodyY-17, 45, 90, 0, 5*PI/6, CHORD)
    fill("rgb(255,255,255)")
    quad(this.bodyX+160, this.bodyY-7, 
         this.bodyX+170, this.bodyY-11, 
         this.bodyX+170, this.bodyY+2, 
         this.bodyX+160, this.bodyY+5);
    
    quad(this.bodyX+176, this.bodyY-12, 
         this.bodyX+186, this.bodyY-15, 
         this.bodyX+186, this.bodyY-2, 
         this.bodyX+177, this.bodyY);
  }
  
  
  
  /* TAILS */
  makeTail1 ()
  {
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB);
    triangle(this.bodyX-(this.bodyWidth/2)+15, this.bodyY, 
             this.bodyX-330, this.bodyY-70, 
             this.bodyX-330, this.bodyY+70);
  }
  
  makeTail2 ()
  {
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB);
    quad(this.bodyX-(this.bodyWidth/2)+15, this.bodyY, 
         this.bodyX-330, this.bodyY-70, 
         this.bodyX-280, this.bodyY, 
         this.bodyX-330, this.bodyY+70);
  }
  
  
  /* FINS */
  makeDorsalFin1 ()
  {
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB);
    triangle(this.bodyX+50, this.bodyY-(this.fatContent/2)+15,   //right 
             this.bodyX-50, this.bodyY-(this.fatContent/2)+15,   //left 
             this.bodyX-30, this.bodyY-(this.fatContent/2)-70);  //peak
  }
  
  makeVentralFin1 ()
  {
    strokeWeight(3);
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB);
    triangle(this.bodyX+50, this.bodyY+(this.fatContent/2)-8,   //right 
             this.bodyX-50, this.bodyY+(this.fatContent/2)-10,   //left 
             this.bodyX-30, this.bodyY+(this.fatContent/2)+70);  //peak
    
    triangle(this.bodyX-100, this.bodyY+(this.fatContent/2)-40,   //right 
             this.bodyX-165, this.bodyY+(this.fatContent/2)-120,   //left 
             this.bodyX-180, this.bodyY+(this.fatContent/2)-30);  //peak
  }
  
  /*makePectoralFin1 ()
  {
    stroke(0, 0, 0);
    fill(this.colorR, this.colorG, this.colorB, 70);
    quad(this.bodyX-2, this.bodyY-80, 
         this.bodyX+70, this.bodyY-40,  //base top
         this.bodyX+65, this.bodyY-0,  //base bottom
         this.bodyX-10, this.bodyY+30);
  }*/
  
}

let nemo;
let dori;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  nemo = new Fish(350, 400);
}


function draw() {
  background(41,190,184);
  
  nemo.makeFish();
  
  textSize(24);
  text(`x: ${mouseX} y: ${mouseY}`, mouseX, mouseY);
}





function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape();
}