export class Entity 
{
	constructor(self = this)
	{
		this.AttachedTo = self;		
		this.components = new Array();

		document.addEventListener("Render", function()
		{
			self.components.forEach(component =>
			{
				component.call_using_args();
			});
		});
	}

	addComponent(component)
	{
		if (component.isComponent 
		&&  component.name !== null
		&&  component.callback_func !== null
		&&  component.callback_args !== null)
		{
			this.components.push(component);
		}
	}

	_getComponents()
	{
		return this.components;
	}
}