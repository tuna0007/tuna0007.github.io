class Branch
  {
    constructor(posX, posY, dir, dlina, lvl)
    {
      this.start = {x: posX, y: posY};
      this.oneDirection = dir;
      this.dlina = dlina;
      this.end = {x: dlina * cos(dir) + posX, y: dlina * sin(dir) + posY}
      this.level = lvl;
    }
    
    
    timeToBranch()
    {
      let from = color(`rgb(85,65,59)`);
      let to = color(`rgb(248,230,228)`);
      let s = map(this.level, 0, maxLevel-1, 0, 1);
      
      let l = lerpColor(from, to, s);

      fill(`rgb(59,40,9)`)
      
      stroke(l);
      let sw = map(this.dlina, 7, 130, 1, 20);
      strokeWeight(sw);
      line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
    
    
    metodSplit(newBranch)
    {
      let newVetka = new Branch(this.end.x, this.end.y, newBranch+this.oneDirection, this.dlina*random(0.6, 0.9), this.level+1);
      vetka[vetka.length] = newVetka;
    }
  }


let vetka = [ ];

let minDlina = 7;
let maxLevel = 10;

function setup() {
  createCanvas(800, 800);
  background(`rgb(32,39,51)`);

  vetka[vetka.length] = new Branch(400, 700, 3*PI/2, random(80, 130), 0);
  
  for (let i=0; i<vetka.length; i++)
    {
      
     if ((vetka[i].dlina > minDlina) && (vetka[i].level < maxLevel))
      {
        vetka[i].metodSplit(-PI/4 + random(-PI/8, PI/8));
        vetka[i].metodSplit(PI/4 + random(-PI/8, PI/8));
      }
      
      vetka[i].timeToBranch();
    }
}
