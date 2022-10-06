import { QUATERNION } from "./base/quaternion.base.js";

export class Quaternion extends QUATERNION
{
	constructor(x, y, z, w)
	{

		super();
		this.x = x;
		this.y = y;
		this.z = z; 
		this.w = w;
		return this;
	}
}