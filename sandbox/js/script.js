"use strict";

// Our cars
let vehicles = [];
let numCars = 10;
let numMotorcycles = 5;
let numTrucks = 10;

let pedestrian;

let state = `title`;


// Set up the canvas and our cars
function setup() {
  createCanvas(600, 600);

  setupText();
  setupVehicles();
  setupPedestrian();
}

function setupText() {
  textSize(32);
  textAlign(CENTER, CENTER);
}

function setupVehicles() {
  // Create the correct number of cars and put them in our array
  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height - height / 10);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  // Create the correct number of motorcycles and put them in our array
  for (let i = 0; i < numMotorcycles; i++) {
    let x = random(0, width);
    let y = random(0, height - height / 10);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }

  for (let i = 0; i < numTrucks; i++) {
    let x = random(0, width);
    let y = random(0, height - height / 10);
    let truck = new Truck(x, y);
    vehicles.push(truck);
  }

  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    if (random() < 0.5) {
      vehicle.vx = -vehicle.speed
    }
    else {
      vehicle.vx = vehicle.speed
    }
  }
}

function setupPedestrian() {
  pedestrian = new Pedestrian(width / 2, height);
}

// Display and move the cars
function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `success`) {
    success();
  }
  else if (state === `dead`) {
    dead();
  }
}

function title() {
  displayText(`THE CROSSER`);
}


function simulation() {
  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();

    pedestrian.checkHit(vehicle);

    if (pedestrian.dead) {
      state = `dead`;
    }
    else if (pedestrian.y < 0) {
      state = `success`;
    }
  }

  pedestrian.handleInput();
  pedestrian.move();
  pedestrian.display();
}

function success() {
  displayText(`YOU CROSSED THE ROAD!`)
}

function dead() {
  displayText(`YOU DIED!`)
}

function displayText(message) {
  push();
  fill(255);
  text(message, width / 2, height / 2);
  pop();
}

function mousePressed() {
  state = `simulation`;
}