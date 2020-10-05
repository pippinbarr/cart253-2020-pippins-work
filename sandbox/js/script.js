// Variables to store our Fish in...
let fish;
let fish2;

function setup() {
  createCanvas(500, 500);
  // Create our Fish
  fish = new Fish();
  fish2 = new Fish();
}

function draw() {
  background(0);

  // Move and display our fish
  fish.move();
  fish2.move();

  fish.display();
  fish2.display();
}