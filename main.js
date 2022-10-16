import * as GHCC from "ghcc";

const camera = new GHCC.PerspectiveCamera(GHCC.math.Vec3(0.0, 0.0, 2.5));
const renderer = new GHCC.WebGLRenderer(animate); 
const scene = new GHCC.BasicScene();

renderer.addScene(scene);
renderer.addCamera(camera);

function animate()
{
    renderer.render();
}