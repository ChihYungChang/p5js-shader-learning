
// 这些是必要的定义，可以让显卡知道如何渲染着色器
#ifdef GL_ES
precision mediump float;// 精度设置
#endif

// 来自cpu的tex坐标
attribute vec2 aTexCoord;

// 这是一个将与片段着色器共享的变量
// 我们将把属性texcords指定给变化的texcORDs，以将它们从vert着色器移动到frag着色器
// 它可以被称为你想要的任何名称，但通常人们会在它前面加上“v”来表示它是一个变化的
varying vec2 vTexCoord;

void main(){
  // 复制纹理坐标
  vTexCoord=aTexCoord;
}
