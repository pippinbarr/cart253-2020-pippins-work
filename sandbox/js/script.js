"use strict";

let balls = [];
let numBalls = 3;

let paddle;

let gravity = 0.0025;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numBalls; i++) {
    let ball = new Ball(random(0, width), random(-800, -100));
    balls.push(ball);
  }

  paddle = new Paddle(200, 20);
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravity);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }

  paddle.move();
  paddle.display()
}