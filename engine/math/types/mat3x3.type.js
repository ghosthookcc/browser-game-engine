import { MATRIX } from "./base/matrix.base.type.js";

export class Mat3x3 extends MATRIX
{
	constructor(identity)
	{
		super();
		let mat3x3 = [0, 0, 0,
		   			  0, 0, 0,
		   			  0, 0, 0];
		if (identity === true)
		{
			mat3x3[0] = 1;
			mat3x3[5] = 1;
			mat3x3[10] = 1;
			mat3x3[15] = 1;
		}	
		return mat3x3;
	}
}