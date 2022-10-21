import { math, PerspectiveObj, ShaderObj } from "../../../globals.js";

import { VAO } from "../../../buffers/vertexArray.buffer.js";
import { VBO } from "../../../buffers/vertex.buffer.js";

export class Mesh 
{
	constructor()
	{
		this.modViewMat = math.Mat4x4(true);
		this.position = 
		{
			translate: true,
			get translating() { return this.translate; },
			set translating(bool) { this.translate = bool; },

			_vec_pos: math.Vec3(0.0, 0.0, 0.0),

			get vec() { return this._vec_pos; },
			get x() { return this._vec_pos.x; },
			get y() { return this._vec_pos.y; },
			get z() { return this._vec_pos.z; },

			set vec(new_vec) { 
							   	this._vec_pos = new_vec; 
							   	this.translating = true; 
							 },
			set x(new_x) { 
						    this._vec_pos.x = new_x; 
						   	this.translating = true; 
						 },
			set y(new_y) { 
						   	this._vec_pos.y = new_y; 
				           	this.translating = true;
				         },
			set z(new_z) { 
				 		   	this._vec_pos.z = new_z; 
				           	this.translating = true;
				         }
		}
		this.rotation = 
		{
			rotate: true,
			get rotating() { return this.rotate; },
			set rotating(bool) { this.rotate = bool; },

			_vec_rot: math.Vec3(0.0, 0.0, 0.0), 

			get vec() { return this._vec_rot; },
			get x() { return this._vec_rot.x; },
			get y() { return this._vec_rot.y; },
			get z() { return this._vec_rot.z; },

			set vec(new_rot) { 
								console.log(this._vec_rot);
								this._vec_rot = new_rot;
								this.rotating = true;
							 },
			set x(new_x_deg) { 
					      	    this._vec_rot.x = new_x_deg;
							    this.rotating = true;
				             },
			set y(new_y_deg) { 
								this._vec_rot.y = new_y_deg;
								this.rotating = true;
				             },
			set z(new_z_deg) { 
							    this._vec_rot.z = new_z_deg;
							    this.rotating = true;
				             },
		}

		this.VBO_OBJ = new VBO();
		this.VAO_OBJ = new VAO();

		this.rerender = true;

		Mesh.prototype.isMesh = true;
	}
	
	/*  Implement proper game engine units for use in distance */
	translate()
	{
		this.modViewMat[12] = this.position.x;
		this.modViewMat[13] = this.position.y;
		this.modViewMat[14] = this.position.z;
	}

	rotate()
	{
		//math.MATRIX.rotateX_to(this.modViewMat, this.rotation.x);
		//math.MATRIX.rotateY_to(this.modViewMat, this.rotation.y);
		//math.MATRIX.rotateZ_to(this.modViewMat, this.rotation.z);
		mat4.rotateX(this.modViewMat,
					 this.modViewMat,
					 this.rotation.x);
		mat4.rotateY(this.modViewMat,
					 this.modViewMat,
					 this.rotation.y);
		mat4.rotateZ(this.modViewMat,
				     this.modViewMat,
				     this.rotation.z);
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