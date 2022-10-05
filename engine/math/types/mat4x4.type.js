export class Mat4x4 
{
	constructor()
	{
	}

	create(identity)
	{
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