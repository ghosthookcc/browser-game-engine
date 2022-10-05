export class Vec2
{
	x = undefined;
	y = undefined;
	constructor(x, y)
	{
		this.x = parseFloat(x) ?? null;
		this.y = parseFloat(y) ?? null; 
	}
};