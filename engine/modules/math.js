import { vec3 } from "./math_types/vec3.type.js";

export class ghccMath
{
	constructor()
	{
		
	}

	newVec3(x, y, z)
	{
		return new vec3(x, y, z);
	}
}

export default { ghccMath };