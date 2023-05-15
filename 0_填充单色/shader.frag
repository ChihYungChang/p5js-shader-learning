#ifdef GL_ES
precision mediump float;
#endif

void main(){
  // 在着色器中，RGB色谱从0到1而不是0到255
  vec3 color=vec3(0.,0.,1.);
  
  // gl_FragColor是一个内置的着色器变量，.frag文件必须包含它
  // 我们将vec3颜色设置为新的vec4，透明度为1（无透明度）
  gl_FragColor=vec4(color,1.);
}

