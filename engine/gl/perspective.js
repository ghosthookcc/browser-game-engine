import { gl, entry, math } from "../core/globals.js";

export class Perspective
{
	_fov = 45 * Math.PI / 180;   
	_aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
	_z_near = 0.1;	
	_z_far = 100.0;
	
	_proj_mat = math.Mat4x4(false);
	_view_mat = math.Mat4x4(true);	
	_proj_view_mat = math.Mat4x4(false);

	constructor(fov=this._fov, 
				aspect=this._aspect, 
			    z_near=this._z_near,
			    z_far=this._z_far)
	{
		this.setFov(fov);
		this.setAspect(aspect);
		this.setZNear(z_near);
		this.setZFar(z_far);

		this.setProj();
		this.setView();
		this.setProjView();
	}

	setProj(proj_mat = this.getProjMat())
	{
		mat4.perspective(proj_mat,
						 this.fov,
						 this.aspect,
						 this.z_near,
						 this.z_far,
						 proj_mat);
	}
	setView(view_mat = this.getViewMat())
	{
		this._view_mat = view_mat;
	}
	setProjView(proj_view_mat = this.getProjViewMat())
	{
		this._proj_view_mat = proj_view_mat;
	}

	setFov(fov)
	{
		this.fov = fov;
		this.setProj();
	}
	setAspect(aspect)
	{
		this.aspect = aspect;
		this.setProj();
	}
	setZNear(z_near)
	{
		this.z_near = z_near;
		this.setProj();
	}
	setZFar(z_far)
	{
		this.z_far = z_far;
		this.setProj();
	}

	getProjMat()
	{
		return this._proj_mat;
	}
	getViewMat()
	{
		return this._view_mat;
	}
	getProjViewMat()
	{
		return this._proj_view_mat;
	}
}