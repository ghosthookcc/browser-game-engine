import { VEC } from "./base/vec.base.type.js";

export class Vec4 extends VEC
{
	constructor(x, y, z, w)
	{

		super();
		this.x = parseFloat(x) ?? null;
		this.y = parseFloat(y) ?? null;
		this.z = parseFloat(z) ?? null; 
		this.w = parseFloat(w) ?? null;
		return this;
	}
}