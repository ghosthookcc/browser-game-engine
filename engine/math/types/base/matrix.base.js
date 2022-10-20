export class MATRIX
{
	constructor()
	{

	}

	rotateX_to(mat4A, rad)
	{
		const sdeg = Math.sin(rad);
		const cdeg = Math.cos(rad);

		mat4A[4]  = mat4A[4]  * cdeg + mat4A[8] * sdeg;
		mat4A[5]  = mat4A[5]  * cdeg + mat4A[9] * sdeg;
		mat4A[6]  = mat4A[6]  * cdeg + mat4A[10] * sdeg;
		mat4A[7]  = mat4A[7]  * cdeg + mat4A[11] * sdeg;
		mat4A[8]  = mat4A[8]  * cdeg - mat4A[4] * sdeg;
		mat4A[9]  = mat4A[9]  * cdeg - mat4A[5] * sdeg;
		mat4A[10] = mat4A[10] * cdeg - mat4A[6] * sdeg;
		mat4A[11] = mat4A[11] * cdeg - mat4A[7] * sdeg;
	}

	rotateY_to(mat4A, rad)
	{
	  	const sdeg = Math.sin(rad);
  		const cdeg = Math.cos(rad);

  		mat4A[0]  = mat4A[0] * cdeg - mat4A[8] * sdeg;
  		mat4A[1]  = mat4A[1] * cdeg - mat4A[9] * sdeg;
  		mat4A[2]  = mat4A[2] * cdeg - mat4A[10] * sdeg;
  		mat4A[3]  = mat4A[3] * cdeg - mat4A[11] * sdeg;
  		mat4A[8]  = mat4A[0] * sdeg + mat4A[8] * cdeg;
  		mat4A[9]  = mat4A[1] * sdeg + mat4A[9] * cdeg;
  		mat4A[10] = mat4A[2] * sdeg + mat4A[10] * cdeg;
  		mat4A[11] = mat4A[3] * sdeg + mat4A[11] * cdeg;
  	}

  	rotateZ_to(mat4A, rad)
  	{
  		const sdeg = Math.sin(rad);
		const cdeg = Math.cos(rad);

		mat4A[0] = mat4A[0] * cdeg + mat4A[4] * sdeg;
		mat4A[1] = mat4A[1] * cdeg + mat4A[5] * sdeg;
		mat4A[2] = mat4A[2] * cdeg + mat4A[6] * sdeg;
		mat4A[3] = mat4A[3] * cdeg + mat4A[7] * sdeg;
		mat4A[4] = mat4A[4] * cdeg - mat4A[0] * sdeg;
		mat4A[5] = mat4A[5] * cdeg - mat4A[1] * sdeg;
		mat4A[6] = mat4A[6] * cdeg - mat4A[2] * sdeg;
		mat4A[7] = mat4A[7] * cdeg - mat4A[3] * sdeg;
	}
}