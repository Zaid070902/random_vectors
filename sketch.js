let walker, walkers;
walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function mousePressed() {
  for (let i = 0; i < 50; i++) {
    walkers.push(new Walker(mouseX, mouseY));
  }

}

function draw() {
  blendMode(BLEND);

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].move();
    walkers[i].display();

  }

}

