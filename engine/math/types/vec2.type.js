import { VEC } from "./base/vec.base.type.js";

export class Vec2 extends VEC
{
	constructor(x, y)
	{

		super();
		this.x = parseFloat(x) ?? null;
		this.y = parseFloat(y) ?? null;
		return this;
	}
}