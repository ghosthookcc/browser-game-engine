import { gl } from "../../globals.js";

export class Renderer
{
	constructor()
	{
		
	}

	PREP_CANVAS()
	{
    	gl.clearColor(0.0, 0.0, 0.0, 1.0);
    	gl.clearDepth(1.0);
    	gl.enable(gl.DEPTH_TEST);
    	gl.depthFunc(gl.LEQUAL);
    	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	}	 
}