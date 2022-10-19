export class Component 
{
	constructor(options = null)
	{
		this.isFrameComponent = true;
		this.name = options["component_name"];
		this.callback_func = options["callback_func"];
		this.callback_args = options["callback_args"];
		this.call_using_args = () =>
		{
			this.callback_func(... this.callback_args);
		}
	}
}