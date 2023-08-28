import * as GHCC from "ghcc";

const camera = new GHCC.PerspectiveCamera(GHCC.math.Vec3(0.0, 0.0, -2.5), 
                                          GHCC.math.Vec3(0.0, 0.0, 0.0));
const renderer = new GHCC.WebGLRenderer(animate);
const scene = new GHCC.BasicScene();

const CUBE1 = new GHCC.BasicEntity(new GHCC.Box(1.0, 1.0, 1.0));
const CUBE2 = new GHCC.BasicEntity(new GHCC.Box(0.5, 0.5, 1.5));

scene.addObject(CUBE1);
scene.addObject(CUBE2);

scene.addCamera(camera);

renderer.addScene(scene);
function animate()
{
    const rotation = 1.0 * renderer.DeltaTime * 0.65;
    CUBE1.rotation.z = -(rotation / 3);
    CUBE2.rotation.z = rotation / 3;
    renderer.render();
}   