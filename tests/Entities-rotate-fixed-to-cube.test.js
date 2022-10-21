import * as GHCC from "ghcc";

const camera = new GHCC.PerspectiveCamera(GHCC.math.Vec3(0.0, 0.0, -2.5), 
                                          GHCC.math.Vec3(0.0, 0.0, 0.0));
const renderer = new GHCC.WebGLRenderer(animate); 
const scene = new GHCC.BasicScene();

const CUBE = new GHCC.BasicEntity(new GHCC.Box(0.5, 0.25, 0.5));
const CUBE2 = new GHCC.BasicEntity(new GHCC.Box(1.25, 0.05, 0.00));

scene.addObject(CUBE);
scene.addObject(CUBE2);

scene.addCamera(camera);
camera.addComponent(new GHCC.PerspectiveController(camera));

renderer.addScene(scene);
function animate()
{      
    CUBE.position.x += 0.2 * renderer.DeltaTime;
    CUBE.rotation.z = GHCC.math.DegToRad(45 * renderer.DeltaTime);
    CUBE2.position.vec = CUBE.position.vec;
    CUBE2.rotation.vec = CUBE.rotation.vec;
    renderer.render();
}