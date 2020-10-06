class Shark {

  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.minSize = 10; // If we get smaller than this minimum we're dead
    this.shrinkRate = 0.1; // How much smaller we get each frame
    this.fill = color;
    this.alive = true; // The Shark starts out alive!
  }

  shrink() {
    // Don't bother to shrink if we're already dead
    if (!this.alive) {
      // By using return on its own we just exit the function here
      // without doing anything below
      return;
    }

    // Shrink by reducing the size by a set amount
    this.size = this.size - this.shrinkRate;
    // Check if we're smaller than the minimum size
    if (this.size < this.minSize) {
      // If so, we're dead
      this.alive = false;
    }
  }

  move() {
    // Don't bother to move if we're already dead
    if (!this.alive) {
      return;
    }

    // Move to the mouse position
    this.x = mouseX;
    this.y = mouseY;
  }

  display() {
    // Don't bother to display if we're already dead
    if (!this.alive) {
      return;
    }

    // Display as an ellipse at the current position
    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  // Our method for checking if the shark is eating a fish
  checkEating(fish) {
    // Don't bother checking if we're dead or the fish is dead or both!
    if (!this.alive || !fish.alive) {
      return;
    }

    // Calculate the distance between this shark and the fish
    let d = dist(this.x, this.y, fish.x, fish.y);
    // Check if we overlap the fish
    if (d < this.size / 2 + fish.size / 2) {
      // If we do, we should grow, so we call our OWN grow() method
      this.grow();
      // And the fish should handle being bitten
      fish.bitten();

    }
  }

  // Our method for getting bigger (when we eat a fish)
  grow() {
    // Get bigger.
    this.size = this.size + 1;
    // That 1 should probably be a property called something like biteAmount
  }

}