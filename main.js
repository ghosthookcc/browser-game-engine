import * as GHCC from "ghcc";


const camera = new GHCC.PerspectiveCamera(GHCC.math.Vec3(0.0, 0.0, -2.5));
const renderer = new GHCC.WebGLRenderer(animate); 
const scene = new GHCC.BasicScene();

const CUBE = new GHCC.Box(0.5, 0.5, 0.5);
scene.addObject(CUBE);
scene.addCamera(camera);

renderer.addScene(scene);
function animate()
{   
    if (CUBE.getRotation().x < 90.0)
    {
        CUBE.rotateX(45.0 * renderer.DeltaTime);
    }
    renderer.render();
}