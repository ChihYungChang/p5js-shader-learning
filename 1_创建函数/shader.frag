#ifdef GL_ES
precision mediump float;
#endif

// 将我们传入的rgb值转换为0和1之间的空间的函数
vec3 rgb(float r,float g,float b){
  return vec3(r/255.,g/255.,b/255.);
}

void main(){
  // 红色
  vec3 color=rgb(255.,0.,0.);
  
  gl_FragColor=vec4(color,1.);
}

