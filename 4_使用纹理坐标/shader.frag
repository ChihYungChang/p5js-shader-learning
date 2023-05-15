#ifdef GL_ES
precision mediump float;
#endif

// 从顶点着色器接收vTexCord
varying vec2 vTexCoord;

uniform vec2 u_resolution;

void main(){
  // vTexCord是一个从0.0到1.0的值，具体取决于像素位置
  // 我们可以用它访问屏幕上的每个像素
  // vec2 st=vTexCoord;
  
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
}

