class Vehicle {
  // Create a new Vehicle object
  constructor(x, y, vx) {
    this.x = x;
    this.y = y;
    // NOTE: We don't know the dimensions of a variable
    // so they start undefined
    this.width = undefined;
    this.height = undefined;
    // NOTE: We don't know how a vehicle will move
    // so we set its velocity to 0
    this.vx = 0;
    this.vy = 0;
  }

  // Move the vehicle according to its velocity
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Wrap the vehicle if it reaches the right edge
  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
  }

  // Display the vehicle
  display() {
    // We will leave this empty because we don't display a generic
    // vehicle! Instead, we leave this up to the subclasses.
  }
}