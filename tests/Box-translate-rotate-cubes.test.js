import * as GHCC from "ghcc";

const camera = new GHCC.PerspectiveCamera(GHCC.math.Vec3(0.0, 0.0, -4.0), 
                                          GHCC.math.Vec3(0.0, 0.0, 0.0));
const renderer = new GHCC.WebGLRenderer(animate);
const scene = new GHCC.BasicScene();

const CUBE1 = new GHCC.BasicEntity(new GHCC.Box(0.5, 0.5, 0.5));
const CUBE2 = new GHCC.BasicEntity(new GHCC.Box(0.5, 0.5, 0.5));
const CUBE3 = new GHCC.BasicEntity(new GHCC.Box(0.5, 0.5, 0.5));
const CUBE4 = new GHCC.BasicEntity(new GHCC.Box(0.5, 0.5, 0.5));
const CUBE5 = new GHCC.BasicEntity(new GHCC.Box(0.75, 1.5, 0.25));

scene.addObject(CUBE1);
scene.addObject(CUBE2);
scene.addObject(CUBE3);
scene.addObject(CUBE4);
scene.addObject(CUBE5);

scene.addCamera(camera);

renderer.addScene(scene);
function animate()
{
    const rotation = 1.0 * renderer.DeltaTime * 0.65;
    CUBE1.rotation.x = -(rotation / 3);
    CUBE1.rotation.y = -(rotation / 3);

    CUBE2.rotation.x = rotation / 3;
    CUBE2.rotation.y = rotation / 3;

    CUBE3.rotation.y = -(rotation / 3);

    CUBE4.rotation.y = rotation / 3;

    CUBE5.rotation.x = rotation;

    const CUBESX = CUBE1.position.x;
    if (CUBESX < 2.0)
    {   
        CUBE1.position.x +=  rotation / 3;
        CUBE4.position.x +=  rotation / 3
        CUBE2.position.x += -rotation / 3;
        CUBE3.position.x += -rotation / 3;
    }

    renderer.render();
}