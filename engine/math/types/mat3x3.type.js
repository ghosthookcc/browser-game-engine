export class Mat3x3 
{
	constructor()
	{
	}

	create(identity)
	{
		let mat3x3 = [0, 0, 0,
				 	  0, 0, 0,
				      0, 0, 0];
		if (identity === true)
		{
			mat4x4[0] = 1;
			mat4x4[5] = 1;
			mat4x4[10] = 1;
		}

		return mat3x3;
	}
}