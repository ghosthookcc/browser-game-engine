export class Vec4 
{
	x = undefined;
	y = undefined;
	z = undefined;
	w = undefined;
	constructor(x, y, z, w)
	{
		this.x = parseFloat(x) ?? null;
		this.y = parseFloat(y) ?? null;
		this.z = parseFloat(z) ?? null; 
		this.w = parseFloat(w) ?? null;
	}
};