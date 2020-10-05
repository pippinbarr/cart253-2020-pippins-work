class Fish {

  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = 100;
    this.fill = {
      r: random(0, 255),
      g: random(0, 255),
      b: random(0, 255)
    };
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.nervousness = 0.05;
  }

  move() {
    if (random() < this.nervousness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    this.x += this.vx;
    this.y += this.vy;

    // 3. Constrain the fish's position to the canvas

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    push();
    // Display the fish on the canvas
    noStroke();
    // Use its color (randomly generated earlier)
    fill(this.fill.r, this.fill.g, this.fill.b);
    // And draw a circle at its position
    ellipse(this.x, this.y, this.size);
    pop();
  }
}