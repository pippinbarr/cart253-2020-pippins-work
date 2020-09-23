let shade = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  shade = random(0, 255);
  background(shade);
}