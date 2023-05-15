let theShader;

function preload() {
  theShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  createCanvas(800, 800, WEBGL);
  noStroke();
}

function draw() {
  shader(theShader);

  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
