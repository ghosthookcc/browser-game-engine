import { MATRIX } from "./base/matrix.base.js";

export class Mat4x4
{
	constructor(identity)
	{
		this.mat4x4 = [0, 0, 0, 0,
		   			   0, 0, 0, 0,
		   			   0, 0, 0, 0,
			   	       0, 0, 0, 0];
		if (identity)
		{
			this.mat4x4[0] = 1;
			this.mat4x4[5] = 1;
			this.mat4x4[10] = 1;
			this.mat4x4[15] = 1;
		}	
		return this.mat4x4;
	}
}