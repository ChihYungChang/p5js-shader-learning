let theShader;

function preload() {
  theShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  pixelDensity(1);

  createCanvas(800, 800, WEBGL);
  noStroke();
}

function draw() {
  theShader.setUniform("u_resolution", [width, height]);

  shader(theShader);

  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
