export class Vec3 
{
	x = undefined;
	y = undefined;
	z = undefined;
	constructor(x, y, z)
	{
		this.x = parseFloat(x) ?? null;
		this.y = parseFloat(y) ?? null;
		this.z = parseFloat(z) ?? null; 
	}
};