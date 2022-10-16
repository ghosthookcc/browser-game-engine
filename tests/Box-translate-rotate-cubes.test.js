import * as GHCC from "ghcc";

const camera = new GHCC.PerspectiveCamera(GHCC.math.Vec3(0.0, 0.0, -4.0));

const renderer = new GHCC.WebGLRenderer(animate);
const scene = new GHCC.BasicScene();

const CUBE1 = new GHCC.Box(0.5, 0.5, 0.5);
const CUBE2 = new GHCC.Box(0.5, 0.5, 0.5);
const CUBE3 = new GHCC.Box(0.5, 0.5, 0.5);
const CUBE4 = new GHCC.Box(0.5, 0.5, 0.5);
const CUBE5 = new GHCC.Box(0.25, 1.0, 0.25);

scene.add(CUBE1);
scene.add(CUBE2);
scene.add(CUBE3);
scene.add(CUBE4);
scene.add(CUBE5);

renderer.addCamera(camera);
renderer.addScene(scene);
function animate()
{
    const rotation = 1.0 * renderer.DeltaTime * 0.65;
    CUBE1.rotateX(-rotation / 3);
    CUBE1.rotateY(-rotation / 3);

    CUBE2.rotateX(rotation / 3);
    CUBE2.rotateY(rotation / 3);

    CUBE3.rotateY(-rotation / 3);

    CUBE4.rotateY(rotation / 3)

    CUBE5.rotateX(rotation);

    const CUBESX = CUBE1.getPosition().x;
    if (CUBESX < 2.0)
    {   
        CUBE1.translateX(rotation / 3);
        CUBE4.translateX(rotation / 3)
        CUBE2.translateX(-rotation / 3);
        CUBE3.translateX(-rotation / 3);
    }

    renderer.render();
}