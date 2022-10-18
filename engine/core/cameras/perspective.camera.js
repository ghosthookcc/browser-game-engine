import { math, PerspectiveObj, ShaderObj } from "../globals.js";

import { Camera } from "./base/camera.base.js";

import { BasicEntity } from "../entities/basic.entity.js";

export class PerspectiveCamera extends Camera 
{
	constructor(start_pos)
	{
		super(start_pos);
	}	

	Update()
	{
		if (super._shouldUpdate())
		{
			let position = super.getPosition();

			const new_cameraMat = math.Mat4x4(false);
			mat4.lookAt(new_cameraMat,
						position.ToArray(),
					    [0.0, 0.0, 0.0],
						[0.0, 1.0, 0.0]);

			const new_viewMat = math.Mat4x4(false); 
			mat4.invert(new_viewMat, new_cameraMat);

			const new_projViewMat = math.Mat4x4(false);
			mat4.mul(new_projViewMat, PerspectiveObj.getProjMat(), new_viewMat);

			PerspectiveObj.setProjView(new_projViewMat);

	   	    ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("projViewMatrix"), false, 
           	        	          	   PerspectiveObj.getProjViewMat());
			super._update(false);
		}
	}
}