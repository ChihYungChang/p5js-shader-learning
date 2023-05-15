#ifdef GL_ES
precision mediump float;
#endif

// 它是一个在我们程序的生命周期中永远不会改变的变量
const float PI=3.14159265358979323846;

// 与我们的 const 变量不同，因为它不是一个变量，而是一个在我们的着色器编译之前运行的脚本
#define PI 3.14159265358979323846

// 将我们传入的rgb值转换为0和1之间的空间的函数
vec3 rgb(float r,float g,float b){
  return vec3(r/255.,g/255.,b/255.);
}

void main(){
  // 红色
  vec3 color=rgb(255.,0.,0.);
  
  gl_FragColor=vec4(color,1.);
}

