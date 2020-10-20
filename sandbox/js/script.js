"use strict";

// Two rectangles represented in terms of position, dimensions, and velocity
let rect1 = {
  x: 0,
  y: 250,
  width: 100,
  height: 100,
  vx: 2, // Moving right
  vy: 0
};

let rect2 = {
  x: 600,
  y: 300,
  width: 100,
  height: 100,
  vx: -2, // Moving left
  vy: 0
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  // Move our rectangles according to their velocity
  rect1.x = rect1.x + rect1.vx;
  rect1.y = rect1.y + rect1.vy;

  rect2.x = rect2.x + rect2.vx;
  rect2.y = rect2.y + rect2.vy;

  // We want to check if the rectangles overlap (collide) so let's
  // track that in a variable. We'll assume they don't...
  let overlap = false;

  // Now we check if there is an overlap
  if (rect1.x + rect1.width > rect2.x && // Is the right side of rect1 past the left side of rect2?
    rect1.x < rect2.x + rect2.width && // Is the left side of rect1 NOT past the right side of rect2?
    rect1.y + rect1.height > rect2.y && // Is the bottom of rect1 past the top of rect2?
    rect1.y < rect2.y + rect2.height) { // Is the top of rect1 NOT past the bottom of rect2?
    // If ALL of those things are true, the rectangles are overlapping.
    overlap = true;
  }

  noStroke();

  // We fill the rectangles red if they overlap and green otherwise
  if (overlap) {
    fill(255, 0, 0);
  }
  else {
    fill(0, 255, 0);
  }

  // Display our rectangles
  rect(rect1.x, rect1.y, rect1.width, rect1.height);
  rect(rect2.x, rect2.y, rect2.width, rect2.height);
}