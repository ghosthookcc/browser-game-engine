import { gl, math } from "./globals.js";

export class Perspective
{
	_fov = 45 * Math.PI / 180;   
	_aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
	_z_near = 0.1;	
	_z_far = 100.0;
	
	_proj_mat = math.Mat4x4(true);
	_mod_view_mat = math.Mat4x4(true);	

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

		mat4.perspective(this.getProjMat(), 
						 fov,
						 aspect,
						 z_near,
						 z_far,
						 this.getProjMat());

		this.start_pos = start_pos;
		mat4.translate(this.getModViewMat(),
               		   this.getModViewMat(),
               		   [start_pos.x, start_pos.y, start_pos.z]);
	}

	resize(canvas) 
	{
    	// lookup the size the browser is displaying the canvas
    	const expectedWidth  = canvas.clientWidth;
    	const expectedHeight = canvas.clientHeight;

    	// check if the canvas is not the same size
    	if (canvas.width  !== expectedWidth ||
        	canvas.height !== expectedHeight) 
    	{	

      		// make the canvas the same size
      		canvas.width  = expectedWidth;
      		canvas.height = expectedHeight;
    	}

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	}

	getProjMat()
	{
		return this._proj_mat;
	}

	getModViewMat()
	{
		return this._mod_view_mat;
	}
}