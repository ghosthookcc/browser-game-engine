import { Entity } from "./base/entity.base.js";

export class BasicEntity extends Entity
{
	constructor(mesh = null)
	{
		super();
		this.isBasicEntity = true;
		this.mesh = mesh;	
		this.VAO_OBJ = mesh.VAO_OBJ;
	}

	rotateX(deg)
	{
		this.mesh.rotateX(deg);
	}
	rotateY(deg)
	{
		this.mesh.rotateY(deg);
	}
	rotateZ(deg)
	{
		this.mesh.rotateZ(deg);
	}

	update()
	{
		this.mesh.update();
	}

	draw()
	{
		this.mesh.draw();
	}
}