import { Entity } from "./base/entity.base.js";

export class InvisibleEntity extends Entity
{
	constructor()
	{
		super();
		this.isInvisibleEntity = true;
	}
}