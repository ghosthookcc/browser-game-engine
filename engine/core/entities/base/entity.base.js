import { gl, ShaderObj } from "../../globals.js";

import { BasicMesh } from "../../geometry/mesh/basic.mesh.js";

export class Entity 
{
	constructor(mesh, self = this)
	{		
		this.components = new Array();

		this.mesh = mesh;

		this.VBO_OBJ = mesh.VBO_OBJ;
		this.VAO_OBJ = mesh.VAO_OBJ;

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
		if (component.isFrameComponent 
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