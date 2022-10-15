import { math, PerspectiveObj, ShaderObj } from "../../../globals.js";

export class Mesh 
{
	constructor()
	{
		this.position = math.Vec3(0.0, 0.0, 0.0);
		this.rotation = math.Vec3(0.0, 0.0, 0.0);

		this.modViewMat = math.Mat4x4(true);
	
		this.new_translation = false;
		this.new_rotation = false;

		this._position = math.Vec3(0.0, 0.0, 0.0);
	}

	translate()
	{
		mat4.translate(this.modViewMat,
           	   		   this.modViewMat,
              		   [this.position.x, 
               			this.position.y, 
               		    this.position.z]);
	}

	translateX(new_x)
	{
		this.position.x = new_x;
		this._position.x += new_x;
		this.new_translation = true;
		return this.position.x;
	}

	translateY(new_y)
	{
		this.position.y = new_y;
		this._position.y += this.position.y;
		this.new_translation = true;
		return this.position.y;
	}

	translateZ(new_z)
	{
		this.position.z = new_z;
		this._position.z += this.position.z;
		this.new_translation = true;
		return this.position.z;
	}

	rotate()
	{
		mat4.rotate(this.modViewMat,    
        		    this.modViewMat,     
             		this.rotation.x,
                	[1, 0, 0]);
		
		mat4.rotate(this.modViewMat,    
        		    this.modViewMat,     
             		this.rotation.y,
                	[0, 1, 0]);

		mat4.rotate(this.modViewMat,    
         		    this.modViewMat,    
             		this.rotation.z,
                	[0, 0, 1]);
	}

	rotateX(new_deg)
	{
		this.rotation.x = new_deg;
		this.new_rotation = true;
		return this.rotation.x;
	}

	rotateY(new_deg)
	{
		this.rotation.y = new_deg;
		this.new_rotation = true;
		return this.rotation.y;
	}

	rotateZ(new_deg)
	{
		this.rotation.z = new_deg;
		this.new_rotation = true;
		return this.rotation.z;
	}

	incRotateX(deg)
	{
		this.rotation.x += deg;
		this.new_rotation = true;
		return this.rotation.x;
	}

	incRotateY(deg)
	{
		this.rotation.y += deg;
		this.new_rotation = true;
		return this.rotation.y;
	}

	incRotateZ(deg)
	{
		this.rotation.z += deg;
		this.new_rotation = true;
		return this.rotation.z;
	}

	get_translation_status()
	{
		return this.new_translation;
	}

	set_translation_status(bool)
	{
		this.new_translation = bool;
	}

	get_rotation_status()
	{
		return this.new_rotation;
	}

	set_rotation_status(bool)
	{
		this.new_rotation = bool;
	}

	getPosition()
	{
		return this._position;
	}

	getModViewMat()
	{
		return this.modViewMat;
	}
}