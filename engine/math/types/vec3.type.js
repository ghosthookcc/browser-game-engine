import { VEC } from "./base/vec.base.js";

export class Vec3 extends VEC
{
	constructor(x, y, z)
	{
		super();
		this.x = x;
		this.y = y;
		this.z = z; 
		return this;
	}
}