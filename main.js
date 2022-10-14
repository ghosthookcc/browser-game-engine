import * as GHCC from "ghcc";

const renderer = new GHCC.WebGLRenderer(animate);

function animate()
{
    renderer.render();
}