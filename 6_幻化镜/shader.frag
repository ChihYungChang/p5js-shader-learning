#ifdef GL_ES
precision mediump float;// 精度
#endif

uniform vec2 u_resolution;// p5js传进来的参数
uniform float u_time;

vec3 palette(float t){
  vec3 a=vec3(.730,.730,.730);
  vec3 b=vec3(.690,.690,.690);
  vec3 c=vec3(1.080,1.080,1.080);
  vec3 d=vec3(-3.112,-2.778,-2.445);
  return a+b*cos(6.281318*(c*t+d));
}

void main(){
  vec2 uv=(gl_FragCoord.xy*2.-u_resolution.xy)/u_resolution.y;
  vec2 uv0=uv;
  vec3 finalColor=vec3(0.);
  
  for(float i=0.;i<3.;i++){
    
    uv=fract(uv*1.5)-.5;
    
    float d=length(uv)*exp(-length(uv0));
    
    vec3 col=palette(length(uv0)+i*.4+u_time*.4);
    
    d=sin(d*8.+u_time)/8.;
    d=abs(d);
    
    d=pow(.02/d,1.2);
    
    finalColor+=col*d;
    
  }
  gl_FragColor=vec4(finalColor,1.);// R,G,B,A
  
}

