#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

// 将我们传入的rgb值转换为0和1之间的空间的函数
vec3 rgb(float r,float g,float b){
  return vec3(r/255.,g/255.,b/255.);
}

void main(){
  // 红色
  vec3 color=rgb(sin(u_time)*255.,u_mouse.x,u_mouse.y);
  
  gl_FragColor=vec4(color,1.);
}

