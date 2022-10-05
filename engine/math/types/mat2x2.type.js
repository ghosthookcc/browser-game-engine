export class Mat2x2
{
	constructor()
	{
	}

	create(identity)
	{
		let mat2x2 = [0, 0,
				 	  0, 0];
		if (identity === true)
		{
			mat4x4[0] = 1;
			mat4x4[5] = 1;
		}

		return mat2x2;
	}
}