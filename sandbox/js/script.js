"use strict";

let fish;
let fish2;
let shark;

function setup() {
  createCanvas(500, 500);

  fish = new Fish(100, 250, 100, {
    r: 220,
    g: 200,
    b: 0
  }, 10, 0.1);

  fish2 = new Fish(100, 250, 50, {
    r: 0,
    g: 200,
    b: 100
  }, 1, 0.01);

  shark = new Shark(0, 0, 100, {
    r: 100,
    g: 100,
    b: 120
  });

}

function draw() {
  background(0);

  shark.shrink();

  fish.move();
  fish2.move();
  shark.move();

  shark.checkEating(fish);
  shark.checkEating(fish2);

  fish.display();
  fish2.display();
  shark.display();
}