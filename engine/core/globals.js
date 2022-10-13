import { Math } from "../math/math.js"; 
import { Perspective } from "../gl/perspective.js";
import { Shader } from "../gl/shader.js";

export const entry = document.querySelector("#entrypoint");
export const gl = entry.getContext("webgl2");

if (gl === null) alert("[-] webgl2 could not be initialized . . .");

export const math = new Math();

export const PerspectiveObj = new Perspective();
export const ShaderObj = new Shader();

export default { entry, gl }; 