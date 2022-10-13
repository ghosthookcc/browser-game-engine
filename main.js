import * as GHCC from "ghcc";

const renderer = new GHCC.WebGLRenderer();
const CUBE = new GHCC.Box(1.0, 1.0, 1.0);

function draw(DeltaTime)
{
    renderer.draw(DeltaTime);    
    CUBE.draw(DeltaTime); 
}

const game_time = new GHCC.GameTime();
async function render()
{
    if (GHCC.state === GHCC.engine_states.STOPPED) return 0;

    const DeltaTime = game_time.DeltaTime();
    
    if (GHCC.state != GHCC.engine_states.PAUSED)
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
        render();
    };
};