import * as GHCC from "ghcc";

console.log(GHCC);   

const renderer = new GHCC.WebGL2Renderer();

const ShaderObj = new GHCC.Shader();
const PerspectiveObj = new GHCC.Perspective();

ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("projMatrix"), false, PerspectiveObj.getProjMat());
ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("modelViewMatrix"), false, PerspectiveObj.getModViewMat());

const CUBE = new GHCC.Cube(ShaderObj);

let rotation = 0.0;
function draw(DeltaTime)
{
    rotation = 1.0 * DeltaTime;
    mat4.rotate(PerspectiveObj.getModViewMat(),     
                PerspectiveObj.getModViewMat(),     
                rotation * 0.65,
                [1, 1, 0]);

    ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("modelViewMatrix"), 
                               false, 
                               PerspectiveObj.getModViewMat());
    renderer.draw();    
    CUBE.draw(); 
}

const engine_state = Object.freeze(
{
    RUNNING: 0,
    PAUSED: 1,
    STOPPED: 2,
});

window.addEventListener("resize", PerspectiveObj.resize(GHCC.entry));

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

    let frame_time = await next_frame(DeltaTime, 144);
    let fps = Math.round(1000.0 / frame_time);

    GHCC.GUI.set_fps(fps);
    GHCC.GUI.set_frame_time(frame_time);
}

const next_frame = async (DeltaTime, fps) => 
{
    let FullFrameTime = 1000.0 / fps;
    if (DeltaTime < FullFrameTime) 
    {
        const DeltaCurrFrame = FullFrameTime - DeltaTime;
        setTimeout(function()
        {
            render();
        }, DeltaCurrFrame);
    } else { render(); }

    let frame_time = FullFrameTime - game_time.DeltaTime();
    return frame_time;
};

window.onload = function()
{
    const main = new function() 
    { 
        window.requestAnimationFrame(render);
    };
};