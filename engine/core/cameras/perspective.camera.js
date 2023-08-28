import { math, PerspectiveObj, ShaderObj } from "../globals.js";

import { Camera } from "./base/camera.base.js";

import { BasicEntity } from "../entities/basic.entity.js";
import { BasicMesh } from "../geometry/mesh/basic.mesh.js";

export class PerspectiveCamera extends Camera 
{
	constructor(start_pos, start_rot)
	{
		super();
		
		this.mesh.position.vec = start_pos;
		this.mesh.rotation.vec = start_rot;

		this.update = function() 
		{
			if (this.mesh.position.translating) 
			{ 
				this.mesh.translate();
				this.mesh.position.translating = false;
			}
			if (this.mesh.rotation.rotating) 
			{	 
				this.mesh.rotate();
				this.mesh.rotation.rotating = false;
			}

			let position = this.mesh.position.vec;

			const new_cameraMat = math.Mat4x4(true);
			const new_center = position.add(math.Vec3(0.0, 0.0, -1.0));
			mat4.lookAt(new_cameraMat,
						position.ToArray(),
					    new_center.ToArray(),
						[0.0, 1.0, 0.0]);

			const new_viewMat = math.Mat4x4(true);
			mat4.rotateX(new_cameraMat,
						 new_cameraMat,
						 this.mesh.rotation.x);
			mat4.rotateY(new_cameraMat,
						 new_cameraMat,
						 this.mesh.rotation.y);
			mat4.rotateZ(new_cameraMat,
						 new_cameraMat,
						 this.mesh.rotation.z);
			mat4.invert(new_viewMat, new_cameraMat);

			const new_projViewMat = math.Mat4x4(true);
			mat4.mul(new_projViewMat, PerspectiveObj.getProjMat(), new_viewMat);

			PerspectiveObj.setProjView(new_projViewMat);

   	   	 	ShaderObj.setUniformMat4fv(ShaderObj.getUniformLoc("projViewMatrix"), false, 
         		             	       PerspectiveObj.getProjViewMat());
   	   	}
	};
}