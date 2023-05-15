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

  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0); // we divide millis by 1000 to convert it to seconds
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]); // we flip Y so it's oriented properly in our shader

  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
