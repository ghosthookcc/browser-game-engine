import { math, PerspectiveObj, ShaderObj } from "../../../globals.js";

import { VAO } from "../../../buffers/vertexArray.buffer.js";
import { VBO } from "../../../buffers/vertex.buffer.js";

export class Mesh 
{
	constructor()
	{
		this.position = math.Vec3(0.0, 0.0, 0.0);
		this.rotation = math.Vec3(0.0, 0.0, 0.0);

		this.modViewMat = math.Mat4x4(true);
	
		this.new_translation = false;
		this.new_rotation = false;
		this.rerender = true;

		this._real_position = math.Vec3(0.0, 0.0, 0.0);
		this._real_rotation = math.Vec3(0.0, 0.0, 0.0);

		this.VBO_OBJ = new VBO();
		this.VAO_OBJ = new VAO();

		Mesh.prototype.isMesh = true;
	}
	
	/*  Implement proper game engine units for use in distance */
	translate()
	{
		mat4.translate(this.modViewMat,
           	   		   this.modViewMat,
              		   [this.position.x, 
               			this.position.y, 
               		    this.position.z]);
	}

	translateTo(new_pos)
	{
		this.position = new_pos;
		this._real_position = new_pos;
		this.new_translation = true;
		return this.position;
	}

	translateX(new_x)
	{
		this.position.x = new_x;
		this._real_position.x += new_x;
		this.new_translation = true;
		return this.position.x;
	}
	translateY(new_y)
	{
		this.position.y = new_y;
		this._real_position.y += this.position.y;
		this.new_translation = true;
		return this.position.y;
	}
	translateZ(new_z)
	{
		this.position.z = new_z;
		this._real_position.z += this.position.z;
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
		this._real_rotation.x += new_deg;

		new_deg = math.DegToRad(new_deg);
		this.rotation.x = new_deg;
		this.new_rotation = true;
		return this.rotation.x;
	}
	rotateY(new_deg)
	{
		this._real_rotation.y += new_deg;

		new_deg = math.DegToRad(new_deg);
		this.rotation.y = new_deg;
		this.new_rotation = true;
		return this.rotation.y;
	}
	rotateZ(new_deg)
	{
		this._real_rotation.z += new_deg;

		new_deg = math.DegToRad(new_deg);
		this.rotation.z = new_deg;
		this.new_rotation = true;
		return this.rotation.z;
	}
	
	incRotateX(deg)
	{
		this._real_rotation.x += deg;

		deg = math.DegToRad(deg);
		this.rotation.x += deg;
		this.new_rotation = true;
		return this.rotation.x;
	}
	incRotateY(deg)
	{
		this._real_rotation.y += deg;

		deg = math.DegToRad(deg);
		this.rotation.y += deg;
		this.new_rotation = true;
		return this.rotation.y;
	}
	incRotateZ(deg)
	{
		this._real_rotation.z += deg;

		deg = math.DegToRad(deg);
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
		return this.position;
	}
	getRotation()
	{
		return this._real_rotation;
	}

	getModViewMat()
	{
		return this.modViewMat;
	}

	// merge current mesh with another mesh into a combined mesh
	merge(other)
	{

	}
}