import { MATRIX } from "./base/matrix.base.type.js";

export class Mat2x2 extends MATRIX
{
	constructor(identity)
	{
		super();
		let mat2x2 = [0, 0,
		   			  0, 0];
		if (identity === true)
		{
			mat2x2[0] = 1;
			mat2x2[5] = 1;
			mat2x2[10] = 1;
			mat2x2[15] = 1;
		}	
		return mat2x2;
	}
}