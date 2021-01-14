let button = {
  x: 100,
  y: 100,
  width: 200,
  height: 100,
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  // Draw button
  push();
  fill(255, 0, 0);
  rect(button.x, button.y, button.width, button.height);
  pop();
}

function mousePressed() {
  if (mouseX > button.x &&
    mouseX < button.x + button.width &&
    mouseY > button.y &&
    mouseY < button.y + button.height) {
    console.log("Button was clicked!");
  }
}