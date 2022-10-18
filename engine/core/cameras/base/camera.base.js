import { InvisibleEntity } from "../../entities/invisible.entity.js";

export class Camera extends InvisibleEntity
{
	constructor(start_pos)
	{
		super();
		this.update = true;
		this.position = start_pos;	
	}

	getPosition()
	{
		return this.position;
	}

	_update(new_state)
	{
		this.update = new_state;
	}

	_shouldUpdate()
	{
		return this.update;
	}
}