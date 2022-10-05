import { VEC } from "./base/vec.base.type.js";

export class Vec3 extends VEC
{
	constructor(x, y, z)
	{

		super();
		this.x = parseFloat(x) ?? null;
		this.y = parseFloat(y) ?? null;
		this.z = parseFloat(z) ?? null; 
		return this;
	}
}