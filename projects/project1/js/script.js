/**************************************************
Placeholder Project
Pippin Barr

This is a project I can display when I create example links
to show how to submit things!
**************************************************/

let angle = 0;
let zoom = 1;
let zoomFactor = 0.01;

// setup()
//
// Make a canvas!
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draw()
//
// Display some text!
function draw() {
  background(0);

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  scale(zoom);
  fill(255, 0, 0);
  stroke(255, 255, 0);
  strokeWeight(random(0, 2));
  textAlign(CENTER, CENTER);
  textSize(32);
  text("A placeholder project projecting through time and space", 0, 0);
  pop();

  angle += 0.01;
  zoom += zoomFactor;
  if (zoom > 2 || zoom < 0.25) {
    zoomFactor = -zoomFactor;
  }
}