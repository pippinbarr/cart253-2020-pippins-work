class SportsCar extends Car {
  // Create a new SportsCar object, make it faster than a Car
  constructor(x, y) {
    super(x, y);
    this.vx = 15; // So fast!
  }

  // Display the sports car by first displaying the regular car
  // then added our racing stripes
  display() {
    // Call the super class (Car) display() method to get the standard
    // car shape
    super.display();

    // Add our racing stripes!
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 0);
    rect(this.x, this.y - this.height / 10, this.width, this.height / 20)
    rect(this.x, this.y + this.height / 10, this.width, this.height / 20)
    pop();
  }
}