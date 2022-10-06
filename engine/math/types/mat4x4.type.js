import { MATRIX } from "./base/matrix.base.js";

export class Mat4x4 extends MATRIX
{
	constructor(identity)
	{
		super();
		this.mat4x4 = [0, 0, 0, 0,
		   			   0, 0, 0, 0,
		   			   0, 0, 0, 0,
			   	       0, 0, 0, 0];
		if (identity === true)
		{
			this.mat4x4[0] = 1;
			this.mat4x4[5] = 1;
			this.mat4x4[10] = 1;
			this.mat4x4[15] = 1;
		}	
		return this.mat4x4;
	}
}