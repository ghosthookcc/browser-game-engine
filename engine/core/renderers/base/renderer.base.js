import { gl, entry,
		 PerspectiveObj, ShaderObj } from "../../globals.js";

export class Renderer
{
	constructor()
	{
		ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("projMatrix"), false, 
								   PerspectiveObj.getProjMat());
		ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("modelViewMatrix"), false, 
								   PerspectiveObj.getModViewMat());
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

	PREP_CANVAS()
	{
    	gl.clearColor(0.0, 0.0, 0.0, 1.0);
    	gl.clearDepth(1.0);
    	gl.enable(gl.DEPTH_TEST);
    	gl.depthFunc(gl.LEQUAL);
    	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    	this.resize();
	}	
}