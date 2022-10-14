import * as GHCC from "ghcc";

const renderer = new GHCC.WebGLRenderer(animate);
const CUBE = new GHCC.Box(1.0, 1.0, 1.0);

function animate()
{
    const rotation = 1.0 * renderer.DeltaTime * 0.65;
    CUBE.rotateX(rotation);
    CUBE.rotateY(rotation);
    renderer.render(CUBE);
}