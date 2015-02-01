varying vec2 vUv;

uniform sampler2D tPrev;
uniform sampler2D tCurr;
uniform float uDeltaT;
uniform float uTime;

void main() {
    vec3 prevPos = texture2D(tPrev, vUv).rgb;
    vec3 currPos = texture2D(tCurr, vUv).rgb;
    vec3 vel = vec3(0.0, sin(10.0*uTime)*2.0, 0.0);

    currPos += vel * uDeltaT;
    gl_FragColor = vec4(currPos, 1.0);
}