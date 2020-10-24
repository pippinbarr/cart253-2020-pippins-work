class Truck extends Vehicle {
  // Create a new Truck object
  constructor(x, y) {
    super(x, y);
    this.width = 80;
    this.height = 20;
    this.speed = 3;
  }

  // Display the truck as a rectangle
  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 100, 100);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}