import { MATRIX } from "./base/matrix.base.js";

export class Mat3x3
{
	constructor(identity)
	{
		this.mat3x3 = [0, 0, 0,
		   	 		   0, 0, 0,
		   			   0, 0, 0];
		if (identity)
		{
			this.mat3x3[0] = 1;
			this.mat3x3[5] = 1;
			this.mat3x3[10] = 1;
		}	
		return this.mat3x3;
	}
}