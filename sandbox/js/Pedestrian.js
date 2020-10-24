class Pedestrian {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 5;
    this.dead = false;
  }

  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.maxSpeed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.maxSpeed;
    }
    else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.maxSpeed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.maxSpeed;
    }
    else {
      this.vy = 0;
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  checkHit(vehicle) {
    if (this.x > vehicle.x - vehicle.width / 2 &&
      this.x < vehicle.x + vehicle.width / 2 &&
      this.y > vehicle.y - vehicle.height / 2 &&
      this.y < vehicle.y + vehicle.height / 2) {
      this.dead = true;
    }
  }

  display() {
    push();
    fill(255);
    stroke(255);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}