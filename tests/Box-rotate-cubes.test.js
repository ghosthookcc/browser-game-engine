import * as GHCC from "ghcc";

const renderer = new GHCC.WebGLRenderer(animate);
const scene = new GHCC.BasicScene();

const CUBE1 = new GHCC.Box(1.0, 1.0, 1.0)
const CUBE2 = new GHCC.Box(0.5, 0.5, 1.5);

scene.add(CUBE1);
scene.add(CUBE2);

renderer.add(scene);
function animate()
{
    const rotation = 1.0 * renderer.DeltaTime * 0.65;
    CUBE1.rotateZ(-rotation / 3);
    CUBE2.rotateZ(rotation / 3);
    renderer.render();
}