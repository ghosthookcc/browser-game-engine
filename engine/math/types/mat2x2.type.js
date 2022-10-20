import { MATRIX } from "./base/matrix.base.js";

export class Mat2x2
{
	constructor(identity)
	{
		this.mat2x2 = [0, 0,
		   			   0, 0];
		if (identity)
		{
			this.mat2x2[0] = 1;
			this.mat2x2[5] = 1;
		}	
		return this.mat2x2;
	}
}