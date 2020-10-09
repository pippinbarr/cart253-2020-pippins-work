"use strict";

let arrow = {
  x: 0,
  y: 0,
  size: 100
};

let heart1 = {
  x: 600,
  y: 300,
  size: 100,
  alive: true
};

let heart2 = {
  x: 600,
  y: 500,
  size: 100,
  alive: true
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  arrow.x = mouseX;
  arrow.y = mouseY;

  checkHeart(heart1);
  checkHeart(heart2);

  fill(255);
  ellipse(arrow.x, arrow.y, arrow.size);

  displayHeart(heart1);
  displayHeart(heart2);
}

function checkHeart(heart) {
  let d = dist(arrow.x, arrow.y, heart.x, heart.y);
  if (d < arrow.size / 2 + heart.size / 2) {
    heart.alive = false;
  }
}

function displayHeart(heart) {
  if (heart.alive) {
    fill(255, 100, 100);
    ellipse(heart.x, heart.y, heart.size);
  }
}