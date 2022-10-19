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

	rotateX(new_deg)
	{
		this.mesh.rotateX(new_deg);
	}
	rotateY(new_deg)
	{
		this.mesh.rotateY(new_deg);
	}
	rotateZ(new_deg)
	{
		this.mesh.rotateZ(new_deg);
	}

	incRotateX(deg)
	{
		this.mesh.incRotateX(deg);
	}
	incRotateY(deg)
	{
		this.mesh.incRotateY(deg);
	}
	incRotateZ(deg)
	{
		this.mesh.incRotateZ(deg);
	}

	translateX(new_x)
	{
		this.mesh.translateX(new_x);
	}
	translateY(new_y)
	{
		this.mesh.translateY(new_y);
	}
	translateZ(new_z)
	{
		this.mesh.translateZ(new_z);
	}

	translateTo(new_pos)
	{
		return this.mesh.translateTo(new_pos);
	}

	getPosition()
	{
		return this.mesh.getPosition();
	}

	set_translation_status(bool)
	{
		this.mesh.set_translation_status(bool);
	}

	set_rotation_status(bool)
	{
		this.mesh.set_rotation_status(bool);
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