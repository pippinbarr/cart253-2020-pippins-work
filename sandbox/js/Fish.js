class Fish {

  constructor(x, y, size, color, speed, nervousness) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.minSize = 20; // NEW! The minimum size before you're considered dead
    this.fill = color;
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    this.nervousness = nervousness;
    this.alive = true; // NEW: Whether this fish is alive or not
  }

  // NEW! The bitten() function handles being bitten by the shark
  bitten() {
    // Get smaller
    this.size = this.size - 1;
    // That 10 should probably be a property
    // Check if we are too small
    if (this.size < this.minSize) {
      // If we're too small, we're dead
      this.alive = false;
    }
  }

  move() {
    // NEW! Don't move if we're dead!
    if (!this.alive) {
      return;
    }

    if (random() < this.nervousness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    // NEW! Don't display if we're dead!
    if (!this.alive) {
      return;
    }

    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}