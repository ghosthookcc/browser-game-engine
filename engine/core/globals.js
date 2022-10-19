import { cMath } from "../math/math.js"; 
import { Perspective } from "../gl/perspective.js";
import { Shader } from "../gl/shader.js";

// fix so that multiple entrypoints can be renderer at the same time
export const entry = document.querySelectorAll(".entrypoint")[0];
export const gl = entry.getContext("webgl2");

if (gl === null) alert("[-] webgl2 could not be initialized . . .");

export const math = new cMath();

export const PerspectiveObj = new Perspective();
export const ShaderObj = new Shader();

export default { entry, gl }; 