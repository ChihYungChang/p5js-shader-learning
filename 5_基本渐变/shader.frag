#ifdef GL_ES
precision mediump float;// 精度
#endif

uniform vec2 u_resolution;// p5js传进来的参数

void main(){
  // 像素的位置除以分辨率，以获得画布上的归一化位置
  // 举个例子就是将屏幕上每个像素点 映射成 0到1
  vec2 st=gl_FragCoord.xy/u_resolution.xy;
  
  // 让我们使用x轴上的像素位置作为红色的渐变
  // 当位置接近0.0时，我们得到黑色（st.x=0.0）
  // 在位置更接近宽度（定义为1.0）的地方，我们得到红色（st.x=1.0）
  
  gl_FragColor=vec4(st.x,0.,0.,1.);// R,G,B,A
  
}

