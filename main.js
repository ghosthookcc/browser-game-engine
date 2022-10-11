import * as GHCC from "ghcc";

console.log(GHCC);

const ShaderObj = new GHCC.Shader();
const PerspectiveObj = new GHCC.Perspective();

ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("projMatrix"), false, PerspectiveObj.getProjMat());
ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("modelViewMatrix"), false, PerspectiveObj.getModViewMat()); 

let positionsBuffer = GHCC.gl.createBuffer();
GHCC.gl.bindBuffer(GHCC.gl.ARRAY_BUFFER, positionsBuffer);

const position = GHCC.gl.getAttribLocation(ShaderObj.getProgram(), "in_position");

GHCC.gl.vertexAttribPointer(position, 3, GHCC.gl.FLOAT, false, 0, 0);
GHCC.gl.enableVertexAttribArray(position);

const positions = 
[
    // Front face
    -1.0, -1.0,  1.0,
    1.0, -1.0,  1.0,
    1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0,

    // Back face
    -1.0, -1.0, -1.0,
    -1.0,  1.0, -1.0,
    1.0,  1.0, -1.0,
    1.0, -1.0, -1.0,

    // Top face
    -1.0,  1.0, -1.0,
    -1.0,  1.0,  1.0,
    1.0,  1.0,  1.0,
    1.0,  1.0, -1.0,

    // Bottom face
    -1.0, -1.0, -1.0,
    1.0, -1.0, -1.0,
    1.0, -1.0,  1.0,
    -1.0, -1.0,  1.0,

    // Right face
    1.0, -1.0, -1.0,
    1.0,  1.0, -1.0,
    1.0,  1.0,  1.0,
    1.0, -1.0,  1.0,

    // Left face
    -1.0, -1.0, -1.0,
    -1.0, -1.0,  1.0,
    -1.0,  1.0,  1.0,
    -1.0,  1.0, -1.0,
];

GHCC.gl.bufferData(GHCC.gl.ARRAY_BUFFER, new Float32Array(positions), GHCC.gl.STATIC_DRAW);    

let colorsBuffer = GHCC.gl.createBuffer();
GHCC.gl.bindBuffer(GHCC.gl.ARRAY_BUFFER, colorsBuffer);

const color = GHCC.gl.getAttribLocation(ShaderObj.getProgram(), "in_color");

GHCC.gl.vertexAttribPointer(color, 3, GHCC.gl.FLOAT, false, 0, 0);
GHCC.gl.enableVertexAttribArray(color);

const faceColors = 
[
    [1.0,  1.0,  0.0, 1.0],    // Front face: red_green_mix
    [0.6,  0.0,  0.0, 0.0],    // Back face: dark_red
    [0.0,  0.8,  0.0, 1.0],    // Top face: light_green
    [0.0,  0.0,  1.0, 1.0],    // Bottom face: blue
    [0.4,  0.8,  0.2, 1.0],    // Right face: some_rgb_value
    [1.0,  0.0,  1.0, 1.0],    // Left face: purple
];

var colors = [];
var temp = [];
for (var j = 0; j < faceColors.length; j++) 
{
    const c = faceColors[j];
    colors = colors.concat(c, c, c, c);
}

GHCC.gl.bufferData(GHCC.gl.ARRAY_BUFFER, new Float32Array(colors), GHCC.gl.STATIC_DRAW);

const indexBuffer = GHCC.gl.createBuffer();

GHCC.gl.bindBuffer(GHCC.gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

const indices = 
[
    0,  1,  2,    0,  2,  3,    // Front face
    4,  5,  6,    4,  6,  7,    // Back face
    8,  9,  10,   8,  10, 11,   // Top face
    12, 13, 14,   12, 14, 15,   // Bottom face
    16, 17, 18,   16, 18, 19,   // Right face
    20, 21, 22,   20, 22, 23,   // Left face
];

GHCC.gl.bufferData(GHCC.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), GHCC.gl.STATIC_DRAW);

const PREP_CANVAS = () =>
{
    GHCC.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    GHCC.gl.clearDepth(1.0);
    GHCC.gl.enable(GHCC.gl.DEPTH_TEST);
    GHCC.gl.depthFunc(GHCC.gl.LEQUAL);
    GHCC.gl.clear(GHCC.gl.COLOR_BUFFER_BIT | GHCC.gl.DEPTH_BUFFER_BIT);
} 

let rotation = 0.0;
function draw(DeltaTime)
{
    PREP_CANVAS();

    rotation = 1.0 * DeltaTime;
    mat4.rotate(PerspectiveObj.getModViewMat(),     
                PerspectiveObj.getModViewMat(),     
                rotation * 0.65,
                [1, 1, 0]);

    ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("modelViewMatrix"), 
                               false, 
                               PerspectiveObj.getModViewMat());

    GHCC.gl.drawElements(GHCC.gl.TRIANGLES, 36, GHCC.gl.UNSIGNED_SHORT, 0);
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