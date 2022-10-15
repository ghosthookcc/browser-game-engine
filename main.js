import * as GHCC from "ghcc";

const renderer = new GHCC.WebGLRenderer(animate); 
const scene = new GHCC.BasicScene();

function animate()
{
    renderer.render();
}