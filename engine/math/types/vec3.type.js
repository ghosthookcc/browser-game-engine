export class Vec3 
{
	x = undefined;
	y = undefined;
	z = undefined;
	constructor(x, y, z)
	{
		this.x = x ?? null;
		this.y = y ?? null;
		this.z = z ?? null; 
	}
};

export default { vec3 };