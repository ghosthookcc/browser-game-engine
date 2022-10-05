import { Math } from "../math/math.js"; 

export const entry = document.querySelector("#entrypoint");
export const gl = entry.getContext("webgl2");

if (gl === null) alert("[-] webgl2 could not be initialized . . .");

export const math = new Math();

export default { entry, gl };