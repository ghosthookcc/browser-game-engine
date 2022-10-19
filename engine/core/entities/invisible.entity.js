import { Entity } from "./base/entity.base.js";

import { BasicMesh } from "../geometry/mesh/basic.mesh.js";

export class InvisibleEntity extends Entity
{
	constructor(mesh, UpdateCallback)
	{
		super(mesh);
		this.isInvisibleEntity = true;

		this.mesh = mesh;

		this.position = mesh.position;
		this.rotation = mesh.rotation;

		this.mesh.VAO_OBJ = undefined;
		this.mesh.VBO_OBJ = undefined;

		this.update = UpdateCallback;
	}
}