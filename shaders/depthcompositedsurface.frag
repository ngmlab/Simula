#version 300 es
precision highp float;

uniform sampler2D uTexSampler;
in highp vec2 vColorTexCoord;
in highp vec2 vDepthTexCoord;
out highp vec4 fragmentColor;

float unpack_depth(highp vec4 rgba ) {
  float depth = dot(rgba, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0));
  depth = (depth==0.0) ? 1.0 : depth;
  return depth;
}

void main(void)
{
    gl_FragDepth = unpack_depth(texture2D(uTexSampler, vDepthTexCoord));    

    fragmentColor = texture2D(uTexSampler, vColorTexCoord);

}


