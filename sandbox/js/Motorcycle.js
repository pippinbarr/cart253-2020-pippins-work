class Motorcycle extends Vehicle {
  // Create a new motorcycle object that moves to the right
  constructor(x, y) {
    super(x, y);
    this.width = 30;
    this.height = 10;
    this.vx = 10;
  }

  // Display the motorcycle as a skinny rectangle
  display() {
    push();
    rectMode(CENTER);
    noStroke();
    // Draw the front and back wheels
    fill(127);
    rect(this.x - this.width / 2, this.y, this.width, this.height / 2);
    rect(this.x + this.width / 2, this.y, this.width, this.height / 2);
    // Draw the body of the motorcycle
    fill(255, 255, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}