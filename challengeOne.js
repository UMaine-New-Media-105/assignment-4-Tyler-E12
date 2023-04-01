//Tyler Edwards Assignment 4 challenge 1


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightgreen');
  translate(width/2, height/2); // move sprite to canvas center
  
  drawFlower(50,50)
  drawFlower(-120,-200)
  drawFlower (-20,250,.5)
  
}
function drawFlower(x,y,size){ //creates a flower sprite
  numPetals = 15 //used to customize the amount of petals
translate(x,y)
scale(size)
  for (let i = 0; i < numPetals; i++) {
 push();
    rotate(i * TWO_PI / numPetals);
    translate(40, 0);
    fill('#FFC0CB');
    rotate(30)
    noStroke();
    ellipse(0, 0, 10, 60);
    pop();
  noStroke()
  fill('#FFFF00');
  ellipse(0, 0, 60, 60); // flower center
    
    
    
  }

}
