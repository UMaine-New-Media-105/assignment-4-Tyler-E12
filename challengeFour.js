let sprites = [
  ///sets the array
  "drawStar",
  "drawAttack",
  "drawAttack2",
  "drawConvert",
  "drawExplosion",
];

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background("black");
  for (let i = 0; i < sprites.length; i++) {
    let sprite = sprites[i];
    switch (sprite) {
      case "drawStar": //uses a case statement, like else-if but better
        drawStar("orange", -70, -120);
        break;
      case "drawAttack":
        drawAttack("orange", 50, -120);
        break;
      case "drawAttack2":
        drawAttack2("orange", 170, -120);
        break;
      case "drawConvert":
        drawConvert("red", 290, -120);
        break;
      case "drawExplosion":
        drawExplosion(500, -10);
        break;
    }
  }
}

function drawStar(starFill, starX, starY) {
  //this function is used to draw the star and circle.
  push();
  translate(starX, starY);
  fill(starFill);
  noStroke();
  strokeWeight(4);
  beginShape();
  vertex(150, 150);
  vertex(180, 240);
  vertex(150, 220);
  vertex(120, 240);
  vertex(150, 150); //this creates the first part of the star shape.
  endShape();
  beginShape();
  vertex(150, 220);
  vertex(100, 185);
  vertex(200, 185);
  vertex(150, 220); //this creates the second part of the star shape.
  endShape();
  pop();
}

function drawAttack(starFill, x, y) {
  //this function is used to draw the star and circle.
  push();
  translate(x, y);
  fill(starFill);
  noStroke();
  strokeWeight(4);
  beginShape();
  vertex(150, 150);
  vertex(180, 240);
  vertex(150, 220);
  vertex(120, 240);
  vertex(150, 150); //this creates the first part of the star shape.
  endShape();
  beginShape();
  vertex(150, 220);
  vertex(100, 185);
  vertex(200, 185);
  vertex(150, 220); //this creates the second part of the star shape.
  endShape();
  fill("red");
  ellipse(80, 220, 10);
  pop();
}
function drawAttack2(starfill, x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("red");
  ellipse(118, 200, 10);
  fill("orange");
  noStroke();
  strokeWeight(4);
  beginShape();
  vertex(150, 150);
  vertex(180, 240);
  vertex(150, 220);
  vertex(120, 240);
  vertex(150, 150); //this creates the first part of the star shape.
  endShape();
  beginShape();
  vertex(150, 220);
  vertex(100, 185);
  vertex(200, 185);
  vertex(150, 220); //this creates the second part of the star shape.
  endShape();
  pop();
}
function drawConvert(starfill, x, y) {
  push();
  translate(x, y);
  fill("red");
  noStroke();
  strokeWeight(4);
  beginShape();
  vertex(150, 150);
  vertex(180, 240);
  vertex(150, 220);
  vertex(120, 240);
  vertex(150, 150); //this creates the first part of the star shape.
  endShape();
  beginShape();
  vertex(150, 220);
  vertex(100, 185);
  vertex(200, 185);
  vertex(150, 220); //this creates the second part of the star shape.
  endShape();
  pop();
}
function drawExplosion(x, y) {
  translate(x, y);
  strokeWeight(1.5);
  stroke("red");
  beginShape(line);
  vertex(50, 50);
  vertex(70, 80);
  endShape();
  beginShape(line);
  vertex(110, 50);
  vertex(90, 80);
  endShape();
  beginShape(line);
  vertex(50, 130);
  vertex(70, 100);
  endShape();
  beginShape(line);
  vertex(110, 130);
  vertex(90, 100);
  endShape();
}
