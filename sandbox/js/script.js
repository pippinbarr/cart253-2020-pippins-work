// Our white circle
let circle = {
  x: undefined, // We don't know x yet because we set it randomly
  y: undefined, // We don't know y yet because we set it randomly
  size: 100
};

// The danger zone we'd like to avoid
let dangerZone = {
  x: 250,
  y: 250,
  size: 150
}

function setup() {
  createCanvas(500, 500);

  // Give our white circle a random position (once at the start of the program)
  circle.x = random(0, width);
  circle.y = random(0, height);

  // Calculate the distance from our circle to the danger zone...
  let d = dist(circle.x, circle.y, dangerZone.x, dangerZone.y);
  // Check if our white circle overlaps the danger zone...
  while (d < circle.size / 2 + dangerZone.size / 2) {
    // If it does, try a different random position!
    circle.x = random(0, width);
    circle.y = random(0, height);
    // Recalculate the distance for the next time through the loop
    d = dist(circle.x, circle.y, dangerZone.x, dangerZone.y);
  }
}

function draw() {
  background(0);

  // Draw the danger zone!
  noFill();
  stroke(255, 0, 0);
  ellipse(dangerZone.x, dangerZone.y, dangerZone.size);

  // Draw the white ellipse
  fill(255);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
}