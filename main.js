import * as GHCC from "ghcc";

function log_str(str_to_log) 
{
    console.log(str_to_log);
}

let str = "Hello Component System!";
let args = new Array(str);

const camera = new GHCC.PerspectiveCamera(GHCC.math.Vec3(0.0, 0.0, -2.5));
const CustomComponent = new GHCC.Component({ "component_name" : "say_hello", 
                                             "callback_func"  : log_str, 
                                             "callback_args"  : args });
camera.addComponent(CustomComponent);

const renderer = new GHCC.WebGLRenderer(animate); 
const scene = new GHCC.BasicScene();

const CUBE = new GHCC.Box(0.5, 0.5, 0.5);
scene.addObject(CUBE);
scene.addCamera(camera);

renderer.addScene(scene);
function animate()
{   
    CUBE.rotateZ(1.0 * 0.65 * renderer.DeltaTime)
    renderer.render();
}