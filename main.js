import * as GHCC from "ghcc";

console.log(GHCC);   

const renderer = new GHCC.WebGLRenderer();
const CUBE = new GHCC.Cube(1.0, 1.0, 1.0);

let rotation = 0.0;
function draw(DeltaTime)
{
    rotation = 1.0 * DeltaTime;
    mat4.rotate(GHCC.PerspectiveObj.getModViewMat(),     
                GHCC.PerspectiveObj.getModViewMat(),     
                rotation * 0.65,
                [1, 1, 0]);

    GHCC.ShaderObj.setUniformMat4fv(GHCC.ShaderObj.getUniformLoc("modelViewMatrix"), false, 
                                    GHCC.PerspectiveObj.getModViewMat());

    renderer.draw();    
    CUBE.draw(); 
}

const engine_state = Object.freeze(
{
    RUNNING: 0,
    PAUSED: 1,
    STOPPED: 2,
});

var state = engine_state.RUNNING;
document.addEventListener("keydown", (event) => 
{
    if (event.key === "Escape") { state = engine_state.STOPPED; }
    if (event.key === "p") 
    { 
        if (state === engine_state.PAUSED)
        {
            state = engine_state.RUNNING; 
        }
        else
        {
            state = engine_state.PAUSED
        }
    }
});

const game_time = new GHCC.GameTime();
async function render()
{
    if (state === engine_state.STOPPED) return 0;

    const DeltaTime = game_time.DeltaTime();
    
    if (state != engine_state.PAUSED)
    {
        draw(DeltaTime); 
    }

    let frame_time = await game_time.next_frame(render);
    let fps = Math.round(1000.0 / frame_time);

    GHCC.GUI.set_fps(fps);
    GHCC.GUI.set_frame_time(frame_time);
}

window.onload = function()
{
    const main = new function() 
    { 
        window.requestAnimationFrame(render);
    };
};