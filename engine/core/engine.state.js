export const engine_states = Object.freeze(
{
    RUNNING: 0,
    PAUSED: 1,
    STOPPED: 2,
});

export var state = engine_states.RUNNING;
document.addEventListener("keydown", (event) => 
{
    if (event.key === "Escape") { state = engine_states.STOPPED; }
    if (event.key === "p") 
    { 
        if (state === engine_states.PAUSED)
        {
            state = engine_states.RUNNING; 
        }
        else
        {
            state = engine_states.PAUSED
        }
    }
});