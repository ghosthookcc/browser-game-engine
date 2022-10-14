import { PerspectiveObj, ShaderObj } from "../../../globals.js";

import { math } from "../../../globals.js";

export class Mesh 
{
	constructor()
	{
		Mesh.prototype.position = math.Vec3(0.0, 0.0, 0.0);
		Mesh.prototype.rotation = math.Vec3(0.0, 0.0, 0.0);
	}

	translate()
	{
		
	}

	rotate()
	{
		mat4.rotate(PerspectiveObj.getModViewMat(),    
        		    PerspectiveObj.getModViewMat(),     
             		Mesh.prototype.rotation.x,
                	[1, 0, 0]);
		
		mat4.rotate(PerspectiveObj.getModViewMat(),    
        		    PerspectiveObj.getModViewMat(),     
             		Mesh.prototype.rotation.y,
                	[0, 1, 0]);

		mat4.rotate(PerspectiveObj.getModViewMat(),    
         		    PerspectiveObj.getModViewMat(),     
             		Mesh.prototype.rotation.z,
                	[0, 0, 1]);
	}

	rotateX(deg)
	{
		Mesh.prototype.rotation.x = deg;
		return Mesh.prototype.rotation.x;
	}

	rotateY(deg)
	{
		Mesh.prototype.rotation.y = deg;
		return Mesh.prototype.rotation.y;
	}

	rotateZ(deg)
	{
		Mesh.prototype.rotation.z = deg;
		return Mesh.prototype.rotation.z;
	}

	incRotateX(deg)
	{
		Mesh.prototype.rotation.x += deg;
		return Mesh.prototype.rotation.x;
	}

	incRotateY(deg)
	{
		Mesh.prototype.rotation.y += deg;
		return Mesh.prototype.rotation.y;
	}

	incRotateZ(deg)
	{
		Mesh.prototype.rotation.z += deg;
		return Mesh.prototype.rotation.z;
	}
}