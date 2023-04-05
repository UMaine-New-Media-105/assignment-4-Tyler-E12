let xCoord = 25;
let yCoord = 27;
let offset = 100;
let colorChange = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightblue");
  let R = 100;
  let G = 150;
  let B = 230;

  for (let numRows = 0; numRows < 10; numRows++) {
    for (let numCols = 0; numCols < 10; numCols++) {
      drawSprite(
        numRows * offset + 25,
        numCols * offset + 27,
        R + 30,
        G + 300,
        B + 140
      );
      if (mouseIsPressed) {
        R = R + colorChange * 0.2;
        G = G + colorChange * 0.2;
        B = B + colorChange * 0.2;
      } else {
        R = R - colorChange;
        G = G - colorChange;
        B = B - colorChange;
      }
    }
  }
}

function drawSprite(x, y, a, b, c) {
  //draws the sprite thats repeated
  push();
  fill(a, b, c);
  noStroke();
  rotate(50); //rotates the sprites to make it more interesting
  translate(-75, -70);
  ellipse(x + 10, y, 50);
  rect(x + 25, y + 25, 50);
  rect(x + 35, y + 35, 50);
  pop();
}
