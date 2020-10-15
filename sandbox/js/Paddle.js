class Paddle {

  constructor(w, h) {
    this.x = 0;
    this.y = height - h / 2;
    this.width = w;
    this.height = h;
  }

  move() {
    this.x = mouseX;
  }

  display() {
    push();
    rectMode(CENTER);
    fill(255, 255, 255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

}