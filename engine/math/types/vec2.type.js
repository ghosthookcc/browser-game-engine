import { VEC } from "./base/vec.base.js";

export class Vec2 extends VEC
{
	constructor(x, y)
	{
		super();
		this.x = x;
		this.y = y;
		return this;
	}
}