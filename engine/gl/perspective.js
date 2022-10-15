import { gl, entry, math } from "../core/globals.js";

export class Perspective
{
	_fov = 45 * Math.PI / 180;   
	_aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
	_z_near = 0.1;	
	_z_far = 100.0;
	
	_proj_mat = math.Mat4x4(true);
	_view_mat = math.Mat4x4(true);	

	_start_pos = math.Vec3(0.0, 0.0, -5.0);

	constructor(fov=this._fov, 
				aspect=this._aspect, 
			    z_near=this._z_near,
			    z_far=this._z_far,
			    proj_mat=this._proj_mat,
			    start_pos=this._start_pos)
	{
		this.fov = fov;
		this.aspect = aspect;
		this.z_near = z_near;
		this.z_far = z_far;
		this.proj_mat = proj_mat;

		mat4.perspective(this.getProjViewMat(), 
						 fov,
						 aspect,
						 z_near,
						 z_far,
						 this.getProjViewMat());

		this.start_pos = start_pos;
		mat4.translate(this.getProjViewMat(),
               		   this.getProjViewMat(),
               		   [start_pos.x, start_pos.y, start_pos.z]);
	}

	getViewMat()
	{
		return this._view_mat;
	}

	getProjViewMat()
	{
		return this._proj_mat;
	}
}