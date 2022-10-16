export class Camera 
{
	constructor(start_pos)
	{
		this.rerender = true;
		this.position = start_pos;	
	}

	getPosition()
	{
		return this.position;
	}

	_rerender(new_state)
	{
		this.rerender = new_state;
	}

	_shouldRerender()
	{
		return this.rerender;
	}
}