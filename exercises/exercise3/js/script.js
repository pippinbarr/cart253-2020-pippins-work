/**************************************************
Placeholder Project
Pippin Barr

This is a project I can display when I create example links
to show how to submit things!
**************************************************/

let angle = 0;

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
  fill(255, 0, 0);
  stroke(255, 255, 0);
  strokeWeight(100);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("It's a placeholder, holding a place.", 0, 0);
  pop();

  angle += 0.01;
}