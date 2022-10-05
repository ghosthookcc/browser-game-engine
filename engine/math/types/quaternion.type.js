import { QUATERNION } from "./base/quaternion.base.type.js";

export class Quaternion extends QUATERNION
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