import { VEC } from "./base/vec.base.js";

export class Vec3 extends VEC
{
	constructor(x, y, z)
	{
		super();
		this.x = x;
		this.y = y;
		this.z = z; 
	
		this.ToArray  = () => { return new Array(this.x, this.y, this.z); }
		
		return this;
	}
}