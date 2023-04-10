let xCoord = 25; //sets a bunch of variables
let yCoord = 27;
let offset = 100;
let colorChange = 10;
let rotation;
let sprites = ["fourside", "squareTwo", "rounder"]; //creates the array
let randomMode;

function setup() {
  createCanvas(400, 400);
  noLoop(); //set to stop the sprites from flashing
}

function draw() {
  background("lightblue");
  let R = 100;
  let G = 150; //needed even though not used (see below)
  let B = 230;
  let numSprites = 0;

  rotation = random(50, 50.5); //sets the rotation as random
  noStroke();
  rotate(rotation);
  fill("lightgreen");

  while (numSprites < 10) {
    let randomX = random(10, 350);
    let randomY = random(10, 350);
    let randomMode = random(sprites);
    console.log("Random Mode: " + randomMode);

    if (randomMode == "fourside") {
      fourside(randomX + 25, randomY + 25);
      fill("yellow");
    } else if (randomMode == "squareTwo") {
      squareTwo(randomX + 35, randomY + 35);
      fill("orange");
    } else if (randomMode == "rounder") {
      rounder(randomX + 10, randomY);
    }

    if (mouseIsPressed) {
      R = R + colorChange * 0.2;
      G = G + colorChange * 0.2;
      B = B + colorChange * 0.2;
    } else {
      R = R - colorChange;
      G = G - colorChange;
      B = B - colorChange;
      //my code for some reason decides to crash if this is removed, so I left it.
    }

    numSprites++;
  }
}

function fourside(x, y) {
  //the sprites for the array to call.
  push();
  translate(-75, -70);
  rect(x + 25, y + 25, 50);
  pop();
}

function squareTwo(x, y) {
  push();
  translate(-75, -70);
  rect(x + 35, y + 35, 50);
  pop();
}

function rounder(x, y) {
  push();
  translate(-75, -70);
  ellipse(x + 10, y, 50);
  pop();
}
