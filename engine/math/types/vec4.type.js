import { VEC } from "./base/vec.base.js";

export class Vec4 extends VEC
{
	constructor(x, y, z, w)
	{
		this.x = x;
		this.y = y;
		this.z = z; 
		this.w = w;
		return this;
	}
}