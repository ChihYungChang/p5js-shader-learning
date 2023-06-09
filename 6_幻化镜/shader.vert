
// 这些是必要的定义，可以让显卡知道如何渲染着色器
#ifdef GL_ES
precision mediump float;// 精度设置
#endif

// 在p5.js中 此“vec3 aPosition”是一个内置的着色器功能。必须保持这种命名。
// 它会自动获取画布上每个顶点的位置
attribute vec3 aPosition;

// 我们总是必须在顶点着色器中至少做一件事：
// 告诉像素它在屏幕上的位置：

void main(){
  // 将位置数据复制到vec4中，将1.0作为第四个参数w
  // 当w=1.0时，向量被视为位置
  // 当w=0.0时，向量被视为方向
  vec4 positionVec4=vec4(aPosition,1.);
  
  // 将像素位置放大两倍
  // 并且通过执行 -1 将它向左和向下移动
  positionVec4.xy=positionVec4.xy*2.-1.;
  
  // 将顶点信息发送到片段着色器
  // 这是自动完成的，只要你把它放进内置的着色器函数“gl_Position”
  gl_Position=positionVec4;
}
