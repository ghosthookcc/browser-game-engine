import { gl, entry, PerspectiveObj, ShaderObj } from "../../globals.js";

export class Renderer
{
	constructor()
	{    
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
    	gl.clearDepth(1.0);
    	gl.enable(gl.DEPTH_TEST);
    	gl.enable(gl.CULL_FACE);
    	gl.depthFunc(gl.LEQUAL);
		entry.addEventListener("resize", () => { this.resize(); });
	}

	resize() 
	{
    	// lookup the size the browser is displaying the canvas
    	const expectedWidth  = entry.clientWidth;
    	const expectedHeight = entry.clientHeight;

    	// check if the canvas is not the same size
    	if (entry.width  !== expectedWidth ||
        	entry.height !== expectedHeight) 
    	{	

      		// make the canvas the same size
      		entry.width  = expectedWidth;
      		entry.height = expectedHeight;
    	}
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	}

	/*
	CREATE_ENTRYPOINT()
	{
		const entrypoint_contain = document.createElement("div");
		entrypoint_contain.classList.add("container");

		const entrypoint = document.createElement("canvas");
		entrypoint.classList.add("entrypoint");

		const overlay = document.createElement("div");
		const overlay_fps = document.createElement("div");
		const overlay_fps_span = document.createElement("span");
		overlay_fps_span.classList.add("FPS");
		overlay_fps_span.innerHTML = "0";
		overlay_fps.appendChild(overlay_fps_span);

		const overlay_frametime = document.createElement("div");
		const overlay_frametime_span = document.createElement("span");
		overlay_frametime_span.classList.add("FRAME_TIME");
		overlay_frametime_span.innerHTML = "0";
		overlay_frametime.appendChild(overlay_frametime_span);

		overlay.appendChild(overlay_fps);
		overlay.appendChild(overlay_frametime);

		entrypoint_contain.appendChild(entrypoint);
		entrypoint_contain.appendChild(overlay);

		return entrypoint_contain;
	}
	*/

	PREP_CANVAS()
	{
    	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    	this.resize();
	}	
}