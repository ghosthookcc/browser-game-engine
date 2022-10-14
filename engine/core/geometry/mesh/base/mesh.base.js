import { PerspectiveObj, ShaderObj } from "../../../globals.js";

import { math } from "../../../globals.js";

export class Mesh 
{
	constructor()
	{
		Mesh.prototype.position = math.Vec3(0.0, 0.0, 0.0);
		Mesh.prototype.rotation = math.Vec3(0.0, 0.0, 0.0);

		Mesh.prototype.new_translation = false;
		Mesh.prototype.new_rotation = false;
	}

	translate()
	{
		mat4.translate(PerspectiveObj.getModViewMat(),
           	   		   PerspectiveObj.getModViewMat(),
              		   [Mesh.prototype.position.x, 
               			Mesh.prototype.position.y, 
               		    Mesh.prototype.position.z]);
	}

	translateX(new_x)
	{
		Mesh.prototype.position.x = new_x;
		Mesh.prototype.new_translation = true;
		return Mesh.prototype.position.x;
	}

	translateY(new_y)
	{
		Mesh.prototype.position.y = new_y;
		Mesh.prototype.new_translation = true;
		return Mesh.prototype.position.y;
	}

	translateX(new_z)
	{
		Mesh.prototype.position.z = new_z;
		Mesh.prototype.new_translation = true;
		return Mesh.prototype.position.z;
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

	rotateX(new_deg)
	{
		Mesh.prototype.rotation.x = new_deg;
		Mesh.prototype.new_rotation = true;
		return Mesh.prototype.rotation.x;
	}

	rotateY(new_deg)
	{
		Mesh.prototype.rotation.y = new_deg;
		Mesh.prototype.new_rotation = true;
		return Mesh.prototype.rotation.y;
	}

	rotateZ(new_deg)
	{
		Mesh.prototype.rotation.z = new_deg;
		Mesh.prototype.new_rotation = true;
		return Mesh.prototype.rotation.z;
	}

	incRotateX(deg)
	{
		Mesh.prototype.rotation.x += deg;
		Mesh.prototype.new_rotation = true;
		return Mesh.prototype.rotation.x;
	}

	incRotateY(deg)
	{
		Mesh.prototype.rotation.y += deg;
		Mesh.prototype.new_rotation = true;
		return Mesh.prototype.rotation.y;
	}

	incRotateZ(deg)
	{
		Mesh.prototype.rotation.z += deg;
		Mesh.prototype.new_rotation = true;
		return Mesh.prototype.rotation.z;
	}
}