export const normal_vert_source = `#version 300 es
    layout(location = 0) in vec3 in_position;
    layout(location = 1) in vec3 in_color;

    out lowp vec3 v_out_color;

    uniform mat4 projViewMatrix;
    uniform mat4 modelMatrix;
    uniform vec3 offset;

    void main() {
      gl_Position = projViewMatrix * modelMatrix * vec4(in_position + offset, 1.0);
      v_out_color = in_color;
    }
`;

export const normal_frag_source = `#version 300 es
    in lowp vec3 v_out_color;

    out lowp vec4 FragColor;

    void main() {
      FragColor = vec4(v_out_color, 1.0);
    }
`;

export default { normal_vert_source, normal_frag_source };