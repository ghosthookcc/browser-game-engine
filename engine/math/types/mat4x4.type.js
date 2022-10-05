import { MATRIX } from "./base/matrix.base.type.js";

export class Mat4x4 extends MATRIX
{
	constructor(identity)
	{
		super();
		let mat4x4 = [0, 0, 0, 0,
		   			  0, 0, 0, 0,
		   			  0, 0, 0, 0,
			   	      0, 0, 0, 0];
		if (identity === true)
		{
			mat4x4[0] = 1;
			mat4x4[5] = 1;
			mat4x4[10] = 1;
			mat4x4[15] = 1;
		}	
		return mat4x4;
	}
}