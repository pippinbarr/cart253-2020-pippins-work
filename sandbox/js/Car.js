class Car extends Vehicle {
  // Create a new Car object that moves to the right
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.vx = 5;
  }

  // Display the car as a rectangle with four wheels
  display() {
    push();
    rectMode(CENTER);
    noStroke();
    // Draw the wheels of the car
    fill(127);
    rect(this.x - this.width / 3, this.y - this.height / 2, this.width / 4, this.height / 2);
    rect(this.x + this.width / 3, this.y - this.height / 2, this.width / 4, this.height / 2);
    rect(this.x - this.width / 3, this.y + this.height / 2, this.width / 4, this.height / 2);
    rect(this.x + this.width / 3, this.y + this.height / 2, this.width / 4, this.height / 2);
    // Draw the body of the car
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}